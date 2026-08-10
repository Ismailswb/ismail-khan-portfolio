"use client";

import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";

export function TechStrip() {
  const reduceMotion = useReducedMotion();
  const items = [...siteConfig.techStrip, ...siteConfig.techStrip];

  return (
    <section
      aria-label="Technology stack"
      className="relative overflow-hidden border-y border-border bg-surface/40"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
        aria-hidden="true"
      />

      {reduceMotion ? (
        <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
          {siteConfig.techStrip.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted sm:text-[13px]"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex overflow-hidden py-5">
          <div className="tech-marquee gap-10 px-5">
            {items.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="inline-flex items-center gap-10 font-mono text-xs uppercase tracking-[0.14em] text-muted sm:text-[13px]"
              >
                {tech}
                <span className="text-accent/50" aria-hidden="true">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
