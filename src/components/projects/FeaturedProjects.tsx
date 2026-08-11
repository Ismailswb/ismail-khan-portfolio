import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function FeaturedProjects() {
  return (
    <Section id="projects" ariaLabelledby="projects-heading" className="relative">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-20" aria-hidden="true" />

      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Reveal className="flex min-w-0 flex-1 items-center gap-4">
            <h2
              id="projects-heading"
              className="shrink-0 text-2xl font-semibold tracking-tight text-accent sm:text-3xl"
            >
              Featured Projects
            </h2>
            <span className="section-line hidden sm:block" aria-hidden="true" />
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              View All Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <Stagger
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          stagger={0.06}
        >
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} featured />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
