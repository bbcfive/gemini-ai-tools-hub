"use client";

import { useMemo, useState } from "react";
import { TOOL_CATEGORIES, ToolCategory, tools } from "@/data/tools";

interface ToolGalleryProps {
  searchTerm: string;
}

const colorMap = ["bg-gradient-to-br from-indigo-500/90 to-purple-500/80", "bg-gradient-to-br from-emerald-500/90 to-cyan-500/80", "bg-gradient-to-br from-orange-500/90 to-pink-500/80"];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ToolGallery({ searchTerm }: ToolGalleryProps) {
  const [filter, setFilter] = useState<ToolCategory>("all");

  const filteredTools = useMemo(() => {
    if (filter === "all") return tools;
    return tools.filter((tool) => tool.type === filter);
  }, [filter]);

  const displayedTools = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();
    if (!keyword) return filteredTools;
    return filteredTools.filter((tool) => {
      return (
        tool.name.toLowerCase().includes(keyword) ||
        tool.description.toLowerCase().includes(keyword) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(keyword))
      );
    });
  }, [filteredTools, searchTerm]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-3">
        {TOOL_CATEGORIES.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setFilter(category.value)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              filter === category.value
                ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white/10"
                : "border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {displayedTools.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900/50">
          No matching tools yet. Try another keyword or switch the category filter.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayedTools.map((tool, index) => (
            <article
              key={tool.name}
              className="group flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/40"
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-base font-semibold text-white ${colorMap[index % colorMap.length]}`}>
                  {getInitials(tool.name)}
                </div>
                <div className="text-right text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{tool.type}</div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{tool.name}</h3>
                  {tool.badge && <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">{tool.badge}</span>}
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
              </div>
              <div className="mt-auto space-y-3">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{tool.spec}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
