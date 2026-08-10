import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack projects by Ismail Khan spanning ERP platforms, service products, delivery systems, communication apps, and e-commerce.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pb-20 pt-10 sm:pb-24 sm:pt-14">
      <Container>
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-navy"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
          <SectionHeading
            className="mt-6"
            eyebrow="Projects"
            title="Selected engineering work."
            description="Case studies covering multi-branch ERP, service platforms, delivery backends, communication products, and e-commerce systems."
          />
        </Reveal>

        <Stagger className="mt-12 space-y-6">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} featured />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </div>
  );
}
