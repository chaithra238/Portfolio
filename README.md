# Portfolio

Modern, responsive portfolio built with **React + TypeScript + Tailwind CSS** (client) and **Node.js + Express + TypeScript** (server, handles the contact form).

Sections: Hero · About me · Education · Internships & Certifications · Projects · Contact. Includes dark/light mode and scroll animations.

## Run it

Open two terminals.

```bash
# 1) Frontend
cd client
npm install
cp .env.example .env
npm run dev          # http://localhost:5173

# 2) Backend (contact form)
cd server
npm install
cp .env.example .env
npm run dev          # http://localhost:5000
```

The site works without the backend; only the contact form needs it.

## Make it yours

1. **Content:** edit `client/src/data/portfolio.ts`. Every section on the site is rendered from this one file.
2. **Resume / photo:** put `resume.pdf` and your photo in `client/public/` and update `resumeUrl` / `avatarUrl`.
3. **Colours:** change the `accent` palette in `client/tailwind.config.js`.
4. **Page title:** edit `client/index.html`.
5. **Add or remove a section:** edit `client/src/App.tsx` and the `links` array in `components/Navbar.tsx`.

## Contact form

`POST /api/contact` validates the message and appends it to `server/data/messages.jsonl`. Replace that with Nodemailer, Resend or a database when you want email delivery.

## Deploy

- Client: `npm run build` in `client/`, deploy `dist/` to Vercel / Netlify. Set `VITE_API_URL` to your API URL.
- Server: `npm run build && npm start` in `server/` on Render / Railway. Set `CLIENT_ORIGIN` to your site URL.

## Structure

```
portfolio/
├── client/
│   └── src/
│       ├── data/portfolio.ts      <- your content
│       ├── components/            <- Hero, About, Education, Experience, Projects, Contact...
│       └── types.ts
└── server/
    └── src/index.ts               <- Express API
```
