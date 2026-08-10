"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

function StackVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-md sm:p-8"
      aria-label="Product delivery stack from mobile to production"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
      <div className="relative space-y-0">
        {siteConfig.productFlow.map((item, index) => (
          <div key={item} className="flex flex-col items-center">
            <div className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-background/90 px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold text-navy sm:text-base">
                {item}
              </span>
              <span className="size-2 rounded-full bg-accent/80" aria-hidden="true" />
            </div>
            {index < siteConfig.productFlow.length - 1 ? (
              <div className="flex h-7 items-center justify-center text-muted-soft" aria-hidden="true">
                <ArrowDown className="size-4" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_60%)]" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-5">{siteConfig.heroLabel}</p>
            <h1
              id="hero-heading"
              className="max-w-2xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
            >
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.heroSupporting}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Let&apos;s Talk
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
              {siteConfig.heroStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <StackVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
