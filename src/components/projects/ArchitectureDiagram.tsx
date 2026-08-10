import { ArrowDown } from "lucide-react";
import type { ArchitectureLayer } from "@/data/projects";
import { cn } from "@/lib/utils";

type ArchitectureDiagramProps = {
  layers: ArchitectureLayer[];
  className?: string;
};

export function ArchitectureDiagram({
  layers,
  className,
}: ArchitectureDiagramProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface/80 p-6 sm:p-8",
        className,
      )}
    >
      <p className="eyebrow mb-6">Architecture</p>
      <ol className="mx-auto max-w-md space-y-0">
        {layers.map((layer, index) => (
          <li key={`${layer.label}-${index}`} className="flex flex-col items-center">
            <div className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-background/70 px-4 py-3.5">
              <span className="text-sm font-semibold text-foreground">{layer.label}</span>
              {layer.detail ? (
                <span className="shrink-0 rounded-md border border-border bg-surface px-2 py-1 font-mono text-[11px] text-cyan">
                  {layer.detail}
                </span>
              ) : null}
            </div>
            {index < layers.length - 1 ? (
              <div className="flex h-7 items-center text-muted-soft" aria-hidden="true">
                <ArrowDown className="size-4" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
