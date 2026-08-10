"use client";

import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const layers = [
  { id: "mobile", label: "Mobile", tech: "React Native", x: 18, y: 18 },
  { id: "web", label: "Web", tech: "Next.js", x: 82, y: 18 },
  { id: "backend", label: "Backend", tech: "NestJS", x: 50, y: 42 },
  { id: "database", label: "Database", tech: "PostgreSQL", x: 50, y: 62 },
  { id: "cloud", label: "Cloud", tech: "GCP · Docker", x: 28, y: 84 },
  { id: "production", label: "Production", tech: "CI/CD", x: 72, y: 84 },
] as const;

const connections: Array<[number, number]> = [
  [0, 2],
  [1, 2],
  [2, 3],
  [3, 4],
  [3, 5],
];

const stack = [
  "React Native",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "GCP",
  "Docker",
  "CI/CD",
] as const;

export function ArchitectureVisual({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-surface/80 p-4 shadow-lg sm:p-6",
        className,
      )}
      aria-label="Software architecture visualization across mobile, web, backend, database, cloud, and production"
    >
      <div className="pointer-events-none absolute inset-0 ambient-glow opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-80" aria-hidden="true" />
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-[1] mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            System map
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            Full-stack delivery architecture
          </p>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          {siteConfig.heroStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-background/60 px-2 py-1 font-mono text-[10px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile / tablet compact flow */}
      <div className="relative z-[1] space-y-3 md:hidden">
        {siteConfig.productFlow.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background font-mono text-[10px] text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 rounded-lg border border-border bg-background/70 px-3 py-2.5">
              <p className="text-sm font-semibold text-foreground">{item}</p>
              <p className="mt-0.5 font-mono text-[10px] text-cyan">
                {layers[index]?.tech}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop architecture diagram */}
      <div className="relative z-[1] hidden aspect-[5/4] w-full md:block">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="arch-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
            </linearGradient>
            <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {connections.map(([from, to], index) => {
            const a = layers[from];
            const b = layers[to];
            return (
              <line
                key={`${a.id}-${b.id}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#arch-line)"
                strokeWidth="0.45"
                className={reduceMotion ? undefined : "arch-line-flow"}
                style={
                  reduceMotion
                    ? undefined
                    : { animationDelay: `${index * 0.35}s` }
                }
              />
            );
          })}

          {layers.map((layer, index) => (
            <g key={layer.id} filter="url(#node-glow)">
              <circle
                cx={layer.x}
                cy={layer.y}
                r="2.2"
                fill="#3b82f6"
                fillOpacity="0.25"
                className={reduceMotion ? undefined : "arch-node-pulse"}
                style={
                  reduceMotion
                    ? undefined
                    : {
                        transformOrigin: `${layer.x}px ${layer.y}px`,
                        animationDelay: `${index * 0.28}s`,
                      }
                }
              />
              <circle cx={layer.x} cy={layer.y} r="1.05" fill="#60a5fa" />
            </g>
          ))}
        </svg>

        {layers.map((layer) => (
          <div
            key={layer.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${layer.x}%`, top: `${layer.y}%` }}
          >
            <div className="min-w-[8.25rem] rounded-lg border border-border bg-background/85 px-3 py-2 shadow-md backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-wide text-foreground">
                {layer.label}
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-cyan">{layer.tech}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-[1] mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border/80 bg-surface-muted/50 px-2.5 py-1 text-[11px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
