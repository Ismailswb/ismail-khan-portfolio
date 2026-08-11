"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ProfileOrbit } from "@/components/hero/ProfileOrbit";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 ambient-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-35" aria-hidden="true" />
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <Container className="relative z-[1]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 mx-auto w-full max-w-sm sm:max-w-md lg:order-2 lg:mx-0 lg:max-w-none"
          >
            <ProfileOrbit />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Hello, I&apos;m
            </p>

            <h1
              id="hero-heading"
              className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[4.25rem] lg:leading-[1.05]"
            >
              {siteConfig.name}
            </h1>

            <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">
              {siteConfig.title}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.heroSupporting}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/#projects" variant="primary" size="lg">
                View My Work
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                href={siteConfig.cvPath}
                download
                variant="secondary"
                size="lg"
              >
                <Download className="size-4" aria-hidden="true" />
                Download CV
              </Button>
            </div>

            <div className="mt-7 flex items-center gap-2.5 text-sm text-muted">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-success/50 pulse-dot" />
                <span className="relative size-2.5 rounded-full bg-success" />
              </span>
              {siteConfig.availability}
            </div>

            <SocialLinks className="mt-7" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
