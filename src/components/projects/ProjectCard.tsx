"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  primary?: boolean;
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
        backgroundImage: `radial-gradient(ellipse at 20% 0%, ${accent}22, transparent 50%), linear-gradient(160deg, #0b101c, #111827 55%, #0a0f1a)`,
      }}
      role="img"
      aria-label={`Screenshot placeholder: ${label}`}
    >
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />
      <div
        className="pointer-events-none absolute inset-x-8 top-8 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
        aria-hidden="true"
      />
      <div className="relative m-4 rounded-lg border border-border/80 bg-background/80 px-3 py-2 text-xs font-medium text-muted backdrop-blur-sm sm:m-5 sm:text-sm">
        {label}
        <span className="mt-1 block text-[11px] font-normal text-muted-soft">
          Screenshot placeholder
        </span>
      </div>
    </div>
  );
}

const msjHighlights = [
  "Multi-branch architecture",
  "Inventory",
  "Sales",
  "Installments",
  "Payments",
  "Recovery",
  "RBAC",
  "Branch-level isolation",
];

export function ProjectCard({
  project,
  featured = false,
  primary = false,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  if (primary) {
    return (
      <motion.article
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.3 }}
        className="group overflow-hidden rounded-2xl border border-accent/25 bg-surface shadow-lg"
      >
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <ProjectPlaceholder
            label={project.placeholderLabel}
            accent={project.accent}
            className="aspect-[16/11] rounded-none border-0 border-b lg:aspect-auto lg:min-h-[28rem] lg:border-b-0 lg:border-r"
          />

          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                Featured
              </span>
              <span className="font-mono text-xs font-medium text-accent">
                {project.number}
              </span>
              <span className="text-xs text-muted-soft">{project.category}</span>
            </div>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {project.shortDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {msjHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-[11px] text-muted"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} className="border-accent/20 text-cyan">
                  {tech}
                </Badge>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted">
              <span className="font-medium text-foreground">Role: </span>
              {project.role}
            </p>

            <div className="mt-auto pt-8">
              <Button href={`/projects/${project.slug}`} variant="primary" size="lg">
                View Case Study
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-surface/80 transition-colors duration-300 hover:border-border-strong",
        featured && "lg:grid lg:grid-cols-2",
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
          <span className="font-mono text-xs font-medium text-accent">
            {project.number}
          </span>
          <span className="text-xs text-muted-soft">{project.category}</span>
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
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

        <p className="mt-5 text-sm text-muted">
          <span className="font-medium text-foreground">Role: </span>
          {project.role}
        </p>

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
    </motion.article>
  );
}
