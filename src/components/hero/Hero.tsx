"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ArchitectureVisual } from "@/components/hero/ArchitectureVisual";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 ambient-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" aria-hidden="true" />
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <Container className="relative z-[1]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 backdrop-blur-sm">
              <span
                className="relative flex size-2"
                aria-hidden="true"
              >
                <span className="absolute inset-0 animate-ping rounded-full bg-cyan/60 opacity-60" />
                <span className="relative size-2 rounded-full bg-cyan" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {siteConfig.availability}
              </span>
            </div>

            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {siteConfig.name}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-soft sm:text-xs">
              {siteConfig.heroLabel}
            </p>

            <h1
              id="hero-heading"
              className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]"
            >
              {siteConfig.tagline}
            </h1>

            <p className="mt-4 font-mono text-sm tracking-wide text-cyan sm:text-base">
              {siteConfig.taglineSupport}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.heroSupporting}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/#projects" variant="primary" size="lg">
                View My Work
              </Button>
              <Button
                href={siteConfig.cvPath}
                download
                variant="secondary"
                size="lg"
              >
                Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
            <ArchitectureVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
