"use client";

import { useEffect, useState } from "react";

const cells = Array.from({ length: 9 }).map((_, index) => index);

export function HeroMatrix() {
  const [activeCells, setActiveCells] = useState<Set<number>>(new Set([0, 4, 8]));

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCells = new Set<number>();
      while (randomCells.size < 4) {
        randomCells.add(Math.floor(Math.random() * cells.length));
      }
      setActiveCells(randomCells);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 grid grid-cols-3 gap-3">
      {cells.map((cell) => (
        <span
          key={cell}
          className={`h-14 rounded-2xl transition-all ${
            activeCells.has(cell)
              ? "bg-gradient-to-r from-brand to-brand-strong shadow-glow-brand"
              : "bg-slate-200/60 dark:bg-slate-800"
          }`}
        />
      ))}
    </div>
  );
}
