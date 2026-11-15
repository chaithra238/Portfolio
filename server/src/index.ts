import "dotenv/config";
import express from "express";
import cors from "cors";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const app = express();
const PORT = Number(process.env.PORT ?? 5000);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ?? "http://localhost:5173";

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

interface ContactBody {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

// Very small in-memory rate limit: 5 messages / 10 min per IP
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

app.post("/api/contact", async (req, res) => {
  if (rateLimited(req.ip ?? "unknown")) {
    return res.status(429).json({ error: "Too many messages. Please try again later." });
  }

  const { name, email, message } = req.body as ContactBody;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return res.status(400).json({ error: "Invalid request." });
  }
  if (!name.trim() || !message.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Please fill in all fields with a valid email." });
  }

  const entry = {
    receivedAt: new Date().toISOString(),
    name: name.trim().slice(0, 100),
    email: email.trim().slice(0, 150),
    message: message.trim().slice(0, 2000),
  };

  try {
    // Simple storage: one JSON line per message in server/data/messages.jsonl.
    // TODO: swap for Nodemailer / a database / an email API when you are ready.
    const dir = path.resolve("data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "messages.jsonl"), JSON.stringify(entry) + "\n");
    console.log(`New message from ${entry.name} <${entry.email}>`);
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not save your message." });
  }
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
