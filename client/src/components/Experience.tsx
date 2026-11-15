import { Award, Briefcase, ExternalLink } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { portfolio } from "../data/portfolio";

export default function Experience() {
  const { internships, certifications } = portfolio;
  const hasCerts = certifications.length > 0;

  return (
    <Section
      id="experience"
      eyebrow="03. Experience"
      title={hasCerts ? "Internships & certifications" : "Internships"}
    >
      <div className={hasCerts ? "grid gap-12 lg:grid-cols-[1.4fr_1fr]" : ""}>
        {/* Internships */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
            <Briefcase size={20} className="text-accent-500" /> Internships
          </h3>
          <div className="space-y-6">
            {internships.map((job, i) => (
              <Reveal key={job.company + job.period} delay={i * 100}>
                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h4>
                      <p className="text-accent-600 dark:text-accent-400">{job.company}</p>
                    </div>
                    <div className="text-right font-mono text-sm text-slate-500">
                      <p>{job.period}</p>
                      {job.location && <p>{job.location}</p>}
                    </div>
                  </div>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  {job.stack?.length && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {hasCerts && (
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
              <Award size={20} className="text-accent-500" /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="card !p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{c.title}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {c.issuer} · {c.date}
                        </p>
                      </div>
                      {c.credentialUrl && (
                        <a
                          href={c.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View credential for ${c.title}`}
                          className="text-slate-400 transition hover:text-accent-500"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
