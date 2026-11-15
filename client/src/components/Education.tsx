import { GraduationCap } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { portfolio } from "../data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="02. Education" title="Educational details">
      <div className="relative ml-3 border-l-2 border-slate-200 dark:border-slate-800">
        {portfolio.education.map((e, i) => (
          <Reveal key={e.institution} delay={i * 100} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent-600 text-white ring-4 ring-white dark:ring-slate-950">
              <GraduationCap size={16} />
            </span>
            <div className="card">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{e.institution}</h3>
                  <p className="text-accent-600 dark:text-accent-400">{e.degree}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-slate-500">{e.period}</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{e.grade}</p>
                </div>
              </div>
              {e.highlights.length > 0 && (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
