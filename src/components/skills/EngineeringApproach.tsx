"use client";

import { motion, useReducedMotion } from "framer-motion";
import { engineeringApproach } from "@/data/experience";
import { Section } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function EngineeringApproach() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="approach"
      ariaLabelledby="approach-heading"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 ambient-glow opacity-60" aria-hidden="true" />
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Engineering approach</p>
            <h2
              id="approach-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              From architecture to production.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              I work across the complete software lifecycle — designing systems,
              building clients and APIs, shaping data models, and shipping to
              production environments.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-accent/50 via-cyan/30 to-accent/20 sm:left-1/2 sm:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-6 sm:space-y-8">
            {engineeringApproach.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.li
                  key={item.step}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid sm:grid-cols-2 sm:gap-10"
                >
                  <div
                    className={`pl-12 sm:pl-0 ${isLeft ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"}`}
                  >
                    <article className="rounded-xl border border-border bg-surface/70 p-5 transition-colors hover:border-accent/30 sm:p-6">
                      <div
                        className={`flex items-center gap-3 ${isLeft ? "sm:justify-end" : ""}`}
                      >
                        <span className="font-mono text-xs text-accent">{item.step}</span>
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </article>
                  </div>

                  <span
                    className="absolute left-[0.85rem] top-6 size-2.5 rounded-full border-2 border-accent bg-background sm:left-1/2 sm:-translate-x-1/2"
                    aria-hidden="true"
                  />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
