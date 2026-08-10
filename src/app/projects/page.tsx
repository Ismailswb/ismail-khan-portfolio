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
  const [primary, ...rest] = projects;

  return (
    <div className="relative overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="pointer-events-none absolute inset-0 ambient-glow opacity-40" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
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

        <Reveal className="mt-12">
          <ProjectCard project={primary} primary />
        </Reveal>

        <Stagger className="mt-6 space-y-6">
          {rest.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} featured />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </div>
  );
}
