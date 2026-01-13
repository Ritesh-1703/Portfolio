"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState<"minimal" | "flashy">("flashy");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-minimal", "theme-flashy");
    root.classList.add(mode === "minimal" ? "theme-minimal" : "theme-flashy");
  }, [mode]);

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => setMode("minimal")}
        className={`px-3 py-1 rounded ${
          mode === "minimal"
            ? "bg-cyan-400 text-black"
            : "border border-slate-600"
        }`}
      >
        Minimal
      </button>
      <button
        onClick={() => setMode("flashy")}
        className={`px-3 py-1 rounded ${
          mode === "flashy"
            ? "bg-cyan-400 text-black"
            : "border border-slate-600"
        }`}
      >
        Flashy
      </button>
    </div>
  );
}
