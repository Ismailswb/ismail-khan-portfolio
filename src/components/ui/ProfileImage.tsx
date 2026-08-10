"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type ProfileImageProps = {
  className?: string;
  size?: "md" | "lg";
};

export function ProfileImage({ className, size = "lg" }: ProfileImageProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");
  const dimensions = size === "lg" ? 280 : 160;

  useEffect(() => {
    let active = true;
    const image = new window.Image();

    image.onload = () => {
      if (active) setStatus("ready");
    };
    image.onerror = () => {
      if (active) setStatus("missing");
    };
    image.src = siteConfig.profileImage;

    return () => {
      active = false;
    };
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-surface",
        size === "lg" ? "aspect-[4/5] w-full max-w-[280px]" : "size-40",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,130,246,0.18),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      {status === "ready" ? (
        <Image
          src={siteConfig.profileImage}
          alt={`${siteConfig.name} — professional portrait`}
          width={dimensions}
          height={Math.round(dimensions * 1.25)}
          className="relative z-[1] h-full w-full object-cover"
          priority={size === "lg"}
        />
      ) : (
        <div
          className="relative z-[1] flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center"
          role="img"
          aria-label={`${siteConfig.name} profile image placeholder`}
        >
          <div className="flex size-20 items-center justify-center rounded-full border border-border bg-surface-muted font-mono text-2xl font-semibold tracking-tight text-accent">
            IK
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
            <p className="mt-1 text-xs text-muted-soft">
              {status === "loading" ? "Loading portrait…" : "Add /images/profile.jpg"}
            </p>
          </div>
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-background/80 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
