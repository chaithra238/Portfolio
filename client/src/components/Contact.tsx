import { useState, type FormEvent } from "react";
import { Loader2, Mail, Send } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { portfolio } from "../data/portfolio";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { profile } = portfolio;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not send message.");
    }
  }

  const field =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white";

  return (
    <Section id="contact" eyebrow="05. What's next?" title="Get In Touch">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 font-mono text-accent-500 hover:underline"
          >
            <Mail size={18} /> {profile.email}
          </a>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" required placeholder="Your name" className={field} />
            <input name="email" type="email" required placeholder="Your email" className={field} />
            <textarea name="message" required rows={5} placeholder="Your message" className={field} />
            <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
              {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-emerald-500">Thanks! Your message has been sent.</p>
            )}
            {status === "error" && <p className="text-sm text-red-500">{error}</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
