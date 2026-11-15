import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <p className="font-mono text-sm text-accent-500">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
