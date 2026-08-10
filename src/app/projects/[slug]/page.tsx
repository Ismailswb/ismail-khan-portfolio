import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projectSlugs,
  type ProjectSlug,
} from "@/data/projects";
import { Container } from "@/components/layout/Container";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { ProjectNav } from "@/components/projects/ProjectNav";
import { ProjectPlaceholder } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Ismail Khan`,
      description: project.shortDescription,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug as ProjectSlug);

  return (
    <article className="relative overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="pointer-events-none absolute inset-0 ambient-glow opacity-40" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>

          <header className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-medium text-accent">
                PROJECT {project.number}
              </span>
              <span className="text-sm text-muted">{project.category}</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {project.shortDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10">
            <ProjectPlaceholder
              label={project.placeholderLabel}
              accent={project.accent}
              className="aspect-[21/9] rounded-2xl"
            />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="space-y-12">
            <Reveal>
              <section aria-labelledby="overview-heading">
                <h2
                  id="overview-heading"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  Overview
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.overview}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="role-heading">
                <h2
                  id="role-heading"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  My Role
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.role}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="stack-heading">
                <h2
                  id="stack-heading"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  Technology Stack
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="px-3 py-1.5 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="features-heading">
                <h2
                  id="features-heading"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  Key Features
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative rounded-xl border border-border bg-surface/70 px-4 py-3 pl-10 text-sm leading-relaxed text-muted before:absolute before:left-4 before:top-1/2 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-accent"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="details-heading">
                <h2
                  id="details-heading"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  Technical Details
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.technicalDetails.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm leading-relaxed text-muted sm:text-base"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.08}>
              <ArchitectureDiagram layers={project.architecture} />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-surface/70 p-6">
                <p className="eyebrow mb-4">Engineering focus</p>
                <ul className="space-y-2.5">
                  {project.engineeringPoints.map((point) => (
                    <li
                      key={point}
                      className="relative pl-4 text-sm text-muted before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-border-strong"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <section aria-labelledby="screenshots-heading" className="mt-16">
            <h2
              id="screenshots-heading"
              className="text-2xl font-semibold tracking-tight text-foreground"
            >
              Screenshots
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Visual placeholders reserved for product screenshots and interface
              captures from the live system.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ProjectPlaceholder
                label={`${project.title} — view 01`}
                accent={project.accent}
              />
              <ProjectPlaceholder
                label={`${project.title} — view 02`}
                accent={project.accent}
              />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="outcome-heading" className="mt-16">
            <h2
              id="outcome-heading"
              className="text-2xl font-semibold tracking-tight text-foreground"
            >
              Outcome
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {project.outcome}
            </p>
          </section>
        </Reveal>

        <div className="mt-16">
          <ProjectNav previous={previous} next={next} />
        </div>
      </Container>
    </article>
  );
}
