import { Cloud, Database, Smartphone, Globe } from "lucide-react";
import { whatIBuild } from "@/data/experience";
import { Section } from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Smartphone, Globe, Database, Cloud];

export function WhatIBuild() {
  return (
    <Section id="services" ariaLabelledby="services-heading" className="bg-surface/60">
      <Reveal>
        <SectionHeading
          eyebrow="What I build"
          title="Complete products across the stack."
          description="From mobile and web clients to APIs, databases, and production infrastructure."
          titleId="services-heading"
        />
      </Reveal>

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
        {whatIBuild.map((item, index) => {
          const Icon = icons[index];
          return (
            <StaggerItem key={item.title}>
              <article className="h-full rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7">
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
