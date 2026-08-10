import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectPlaceholder({
  label,
  accent,
  className,
}: {
  label: string;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] items-end overflow-hidden rounded-xl border border-border bg-surface-muted",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${accent}14, transparent 55%), linear-gradient(180deg, #f8fafc, #eef2f7)`,
      }}
      role="img"
      aria-label={`Screenshot placeholder: ${label}`}
    >
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" />
      <div className="relative m-4 rounded-lg border border-border/80 bg-surface/90 px-3 py-2 text-xs font-medium text-muted backdrop-blur-sm sm:m-5 sm:text-sm">
        {label}
        <span className="mt-1 block text-[11px] font-normal text-muted-soft">
          Screenshot placeholder
        </span>
      </div>
    </div>
  );
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
        featured && "lg:grid lg:grid-cols-2",
      )}
    >
      <ProjectPlaceholder
        label={project.placeholderLabel}
        accent={project.accent}
        className={cn(
          "rounded-none border-0 border-b",
          featured && "lg:border-b-0 lg:border-r",
        )}
      />

      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium text-accent">
            PROJECT {project.number}
          </span>
          <span className="text-xs text-muted-soft">{project.category}</span>
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-hover"
          >
            View Case Study
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
