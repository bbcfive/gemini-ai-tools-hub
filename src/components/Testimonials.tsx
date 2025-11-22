const testimonials = [
  {
    quote: "Gemini3 Pro unifies multimodal cognition on a single semantic base; the Hub is now our central nervous system for AI orchestration.",
    author: "Product Director · Nexus Tech"
  },
  {
    quote: "We reused the Hub toolchain without rebuilding a stack from scratch and shipped our industry solution in two weeks.",
    author: "Innovation Architect · LinkAge Labs"
  }
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((item) => (
        <article
          key={item.author}
          className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
        >
          <p className="text-lg font-medium text-slate-900 dark:text-white">&ldquo;{item.quote}&rdquo;</p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">—— {item.author}</p>
        </article>
      ))}
    </div>
  );
}
