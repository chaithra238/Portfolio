import { MapPin } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { portfolio } from "../data/portfolio";

export default function About() {
  const { about, profile } = portfolio;

  return (
    <Section id="about" eyebrow="01. About me" title="Who I am">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 font-mono text-sm text-slate-500">
            <MapPin size={16} className="text-accent-500" /> {profile.location}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label} className="card !p-4 text-center">
                <p className="text-2xl font-extrabold text-accent-500">{s.value}</p>
                <p className="mt-1 text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="mb-5 font-mono text-sm text-accent-500">// skills</h3>
          <div className="space-y-6">
            {about.skills.map((group) => (
              <div key={group.category}>
                <p className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
