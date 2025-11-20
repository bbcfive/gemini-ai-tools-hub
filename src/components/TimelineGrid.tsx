import { timelineSteps } from "@/data/timeline";

export function TimelineGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {timelineSteps.map((step, index) => (
        <article
          key={step.title}
          className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Step {index + 1}</p>
          <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.detail}</p>
          <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">{step.result}</p>
        </article>
      ))}
    </div>
  );
}
