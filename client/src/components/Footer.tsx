import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <p className="container-x text-center font-mono text-xs text-slate-500">
        © {new Date().getFullYear()} {portfolio.profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
