"use client";

import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { OrbitTechIcon } from "@/components/hero/OrbitTechIcon";
import { cn } from "@/lib/utils";

type ProfileOrbitProps = {
  className?: string;
};

export function ProfileOrbit({ className }: ProfileOrbitProps) {
  const reduceMotion = useReducedMotion();
  const orbitTechs = siteConfig.heroStack;

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
          stroke="rgba(249,115,22,0.35)"
          strokeWidth="0.4"
          strokeDasharray="1.2 2.4"
          className={reduceMotion ? undefined : "arch-line-flow"}
        />
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.35"
          strokeDasharray="1 2.2"
        />
      </svg>

      {orbitTechs.map((tech, index) => {
        const angle = (index / orbitTechs.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 44;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;

        return (
          <div
            key={tech}
            className="absolute z-[2] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div
              className={cn(
                "flex size-12 items-center justify-center rounded-xl border border-white/10 bg-[#141418] p-2 shadow-[0_4px_20px_rgba(0,0,0,0.45)] sm:size-14 sm:p-2.5",
                !reduceMotion && "float-soft",
              )}
              style={{ animationDelay: `${index * 0.35}s` }}
            >
              <OrbitTechIcon name={tech} className="size-7 sm:size-8" />
              <span className="sr-only">{tech}</span>
            </div>
          </div>
        );
      })}

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
