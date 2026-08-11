import { siteConfig } from "@/data/site";
import { TechMark } from "@/components/ui/BrandIcons";
import { Container } from "@/components/layout/Container";

export function TechStrip() {
  return (
    <div className="border-y border-border bg-surface/40 py-5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {siteConfig.techStrip.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-muted"
            >
              <TechMark name={tech} className="size-4" />
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
