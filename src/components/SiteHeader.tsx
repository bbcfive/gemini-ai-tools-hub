import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#vision", label: "愿景" },
  { href: "#toolset", label: "工具集" },
  { href: "#workflow", label: "工作流" },
  { href: "#cta", label: "立即体验" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-900 dark:text-white">
          gemini3 <span className="text-brand">pro</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex dark:text-slate-200">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brand">
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
