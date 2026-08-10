import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  const [primary, ...rest] = projects;

  return (
    <Section id="projects" ariaLabelledby="projects-heading" className="relative">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-30" aria-hidden="true" />

      <div className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Featured projects"
              title="Selected systems built for production."
              description="Editorial case studies spanning ERP platforms, service products, delivery systems, and e-commerce."
              titleId="projects-heading"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              All projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <ProjectCard project={primary} primary />
        </Reveal>

        <Stagger className="mt-6 space-y-6" stagger={0.1}>
          {rest.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} featured />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
