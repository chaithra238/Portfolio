import { ExternalLink, Folder, Github } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { portfolio } from "../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04. Projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100}>
            <article className="card flex h-full flex-col">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="mb-4 h-44 w-full rounded-xl border border-slate-200 object-cover dark:border-slate-800"
                />
              )}
              <div className="flex items-start justify-between">
                <Folder size={32} className="text-accent-500" />
                <div className="flex gap-3 text-slate-400">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`} className="transition hover:text-accent-500">
                      <Github size={20} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className="transition hover:text-accent-500">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                {p.title}
                {p.featured && (
                  <span className="ml-2 align-middle rounded-full bg-accent-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-500">
                    Featured
                  </span>
                )}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
