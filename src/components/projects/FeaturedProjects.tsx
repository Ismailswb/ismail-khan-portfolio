import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  return (
    <Section id="projects" ariaLabelledby="projects-heading">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="Featured projects"
            title="Production systems across mobile, web, and backend."
            description="Selected work spanning ERP platforms, service products, delivery systems, and e-commerce."
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

      <Stagger className="mt-12 space-y-6">
        {projects.map((project, index) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} featured={index < 2} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
