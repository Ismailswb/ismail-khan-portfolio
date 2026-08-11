"use client";

import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { TechMark } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

const outerOrbit = [
  "React Native",
  "Next.js",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Docker",
] as const;

const innerOrbit = ["GCP", "Prisma"] as const;

type ProfileOrbitProps = {
  className?: string;
};

export function ProfileOrbit({ className }: ProfileOrbitProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[30rem]",
        className,
      )}
      aria-label="Professional profile with surrounding technology stack"
    >
      <div
        className="pointer-events-none absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.22),transparent_62%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.14),transparent_70%)]"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="rgba(249,115,22,0.28)"
          strokeWidth="0.35"
          strokeDasharray="1.2 2.4"
          className={reduceMotion ? undefined : "arch-line-flow"}
        />
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.3"
          strokeDasharray="1 2.2"
        />
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke="rgba(249,115,22,0.18)"
          strokeWidth="0.28"
          strokeDasharray="0.8 2"
        />
      </svg>

      <div
        className={cn(
          "absolute inset-0",
          !reduceMotion && "orbit-spin",
        )}
        aria-hidden="true"
      >
        {outerOrbit.map((tech, index) => {
          const angle = (index / outerOrbit.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 44;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;

          return (
            <div
              key={tech}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-xl border border-border bg-surface/95 shadow-md backdrop-blur-sm sm:size-11",
                  !reduceMotion && "orbit-spin-reverse",
                )}
              >
                <TechMark name={tech} className="size-5 sm:size-6" />
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={cn(
          "absolute inset-0",
          !reduceMotion && "orbit-spin-reverse",
        )}
        aria-hidden="true"
      >
        {innerOrbit.map((tech, index) => {
          const angle =
            (index / innerOrbit.length) * Math.PI * 2 - Math.PI / 2 + 0.6;
          const radius = 32;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;

          return (
            <div
              key={tech}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className={cn(
                  "flex size-9 items-center justify-center rounded-lg border border-border bg-surface/95 shadow-md backdrop-blur-sm sm:size-10",
                  !reduceMotion && "orbit-spin",
                )}
              >
                <TechMark name={tech} className="size-4.5 sm:size-5" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-[24%] flex items-center justify-center">
        <div className="relative w-full max-w-[16rem]">
          <div
            className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.35),transparent_70%)] blur-md"
            aria-hidden="true"
          />
          <div
            className="absolute -inset-1.5 rounded-full border border-accent/40 shadow-[0_0_28px_rgba(249,115,22,0.35)]"
            aria-hidden="true"
          />
          <ProfileImage
            variant="circle"
            size="xl"
            priority
            className="relative z-[1] mx-auto border-accent/30 shadow-lg"
          />
        </div>
      </div>

      <p className="sr-only">
        Technologies: {siteConfig.heroStack.join(", ")}
      </p>
    </div>
  );
}
