import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectNavProps = {
  previous: Project | null;
  next: Project | null;
};

export function ProjectNav({ previous, next }: ProjectNavProps) {
  return (
    <nav
      aria-label="Adjacent projects"
      className="grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          href={`/projects/${previous.slug}`}
          className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:border-border-strong hover:shadow-sm"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted">
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Previous
          </span>
          <span className="mt-2 block text-base font-semibold text-navy group-hover:text-accent">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group rounded-2xl border border-border bg-surface p-5 text-right transition-all hover:border-border-strong hover:shadow-sm sm:justify-self-end sm:text-right"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted sm:ml-auto">
            Next
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </span>
          <span className="mt-2 block text-base font-semibold text-navy group-hover:text-accent">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
