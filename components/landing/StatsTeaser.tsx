"use client";

import { useReveal } from "@/lib/hooks/useReveal";

/** 통계 띠 — 공개 근거가 확정된 설립연도만 우선 노출. */
export function StatsTeaser() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal
      className="border-t border-white/10 bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-screen-lg text-center">
        <div className="font-display text-[clamp(4rem,10vw,7rem)] leading-none text-white">
          1997
        </div>
        <div className="mt-4 text-sm uppercase tracking-[0.2em] text-white/50">
          설립연도
        </div>
      </div>
    </section>
  );
}
