import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";

export function GitHubCTA() {
  return (
    <Section id="github" ariaLabelledby="github-heading" className="pt-0">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent">
                <GitHubIcon className="size-5" aria-hidden="true" />
              </div>
              <h2
                id="github-heading"
                className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
              >
                Explore My GitHub
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Browse repositories and ongoing engineering work on GitHub.
              </p>
            </div>
            <Button
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="shrink-0"
            >
              Visit GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
