const testimonials = [
  {
    quote: "Gemini3 Pro 将多模态认知聚合到单一语义底座，AI Hub 成为了我们编排 AI 应用的中枢神经。",
    author: "智能产品总监 · 枢纽科技"
  },
  {
    quote: "无需从零搭建推理栈，直接在 Hub 内复用工具链，2 周上线行业方案。",
    author: "创新架构师 · LinkAge Labs"
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
