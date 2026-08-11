import { Cloud, Database, Globe, Smartphone } from "lucide-react";
import { whatIBuild } from "@/data/experience";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const serviceMeta = {
  Mobile: {
    title: "Mobile Development",
    icon: Smartphone,
  },
  Web: {
    title: "Web Development",
    icon: Globe,
  },
  Backend: {
    title: "Backend Development",
    icon: Database,
  },
  Cloud: {
    title: "Cloud & DevOps",
    icon: Cloud,
  },
} as const;

export function WhatIDo() {
  return (
    <Section
      id="services"
      ariaLabelledby="services-heading"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 ambient-glow opacity-40" aria-hidden="true" />

      <div className="relative">
        <Reveal>
          <h2
            id="services-heading"
            className="text-2xl font-semibold tracking-tight text-accent sm:text-3xl"
          >
            What I Do
          </h2>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {whatIBuild.map((item) => {
            const meta =
              serviceMeta[item.title as keyof typeof serviceMeta] ??
              serviceMeta.Web;
            const Icon = meta.icon;

            return (
              <StaggerItem key={item.number}>
                <article className="group h-full rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_0_28px_rgba(249,115,22,0.08)] sm:p-6">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-lg border border-accent/30 bg-accent-soft text-accent transition-colors group-hover:border-accent/50">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {meta.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}
