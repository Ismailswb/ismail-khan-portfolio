"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  primary?: boolean;
  layout?: "grid" | "editorial";
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
        backgroundImage: `radial-gradient(ellipse at 20% 0%, ${accent}22, transparent 50%), linear-gradient(160deg, #121214, #18181b 55%, #0c0c0e)`,
      }}
      role="img"
      aria-label={`Screenshot placeholder: ${label}`}
    >
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" />
      <div
        className="pointer-events-none absolute inset-x-8 top-8 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
        aria-hidden="true"
      />
      <div className="relative m-3 rounded-lg border border-border/80 bg-background/80 px-2.5 py-1.5 text-[11px] font-medium text-muted backdrop-blur-sm sm:m-4 sm:text-xs">
        {label}
        <span className="mt-0.5 block text-[10px] font-normal text-muted-soft">
          Screenshot placeholder
        </span>
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  featured = false,
  primary = false,
  layout = "grid",
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  if (layout === "editorial") {
    return (
      <motion.article
        whileHover={reduceMotion ? undefined : { y: -3 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "group overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-accent/30",
          featured && "lg:grid lg:grid-cols-2",
          primary && "border-accent/25",
        )}
      >
        <ProjectPlaceholder
          label={project.placeholderLabel}
          accent={project.accent}
          className={cn(
            "rounded-none border-0 border-b",
            featured && "lg:aspect-auto lg:min-h-full lg:border-b-0 lg:border-r",
          )}
        />

        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-md bg-accent px-2 py-0.5 font-mono text-[11px] font-semibold text-white">
              {project.number}
            </span>
            <span className="text-xs text-muted-soft">{project.category}</span>
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
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
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-accent/30 hover:shadow-[0_0_28px_rgba(249,115,22,0.08)]",
        primary && "border-accent/25",
      )}
    >
      <div className="relative p-3 pb-0">
        <span className="absolute left-5 top-5 z-[2] inline-flex items-center rounded-md bg-accent px-2 py-0.5 font-mono text-[11px] font-semibold text-white shadow-md">
          {project.number}
        </span>
        <ProjectPlaceholder
          label={project.placeholderLabel}
          accent={project.accent}
          className="aspect-[16/11] rounded-lg border-border/80"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-muted-soft">{project.category}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} className="rounded-full text-[10px]">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-hover"
          >
            View Case Study
            <ArrowRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
