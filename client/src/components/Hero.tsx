import { ArrowDown, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Hero() {
  const { profile } = portfolio;
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-32">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-x grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-mono text-sm text-accent-500">{profile.tagline}</p>
          <p className="font-mono text-sm text-accent-500 mt-2">I'm</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 bg-gradient-to-r from-accent-500 to-fuchsia-500 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
            {profile.role}
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Get in touch
            </a>
            <a href="#projects" className="btn-ghost">
              View my work <ArrowDown size={16} />
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download className="btn-ghost">
                <Download size={16} /> Resume
              </a>
            )}
          </div>

          <div className="mt-8 flex gap-4 text-slate-500 dark:text-slate-400">
            {profile.socials.github && (
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent-500">
                <Github size={22} />
              </a>
            )}
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent-500">
                <Linkedin size={22} />
              </a>
            )}
            {profile.socials.twitter && (
              <a href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="transition hover:text-accent-500">
                <Twitter size={22} />
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-accent-500">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="animate-float relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent-500 to-fuchsia-500 opacity-70 blur-lg" />
            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white text-6xl font-extrabold text-accent-500 dark:border-slate-800 dark:bg-slate-900 sm:h-72 sm:w-72">
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                initials
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
