interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{title}</h2>
      {description && <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  );
}
