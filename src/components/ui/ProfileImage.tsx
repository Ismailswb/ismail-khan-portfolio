"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type ProfileImageProps = {
  className?: string;
  size?: "md" | "lg" | "xl";
  variant?: "rounded" | "circle";
  priority?: boolean;
};

const sizeMap = {
  md: 160,
  lg: 240,
  xl: 300,
} as const;

export function ProfileImage({
  className,
  size = "lg",
  variant = "rounded",
  priority = false,
}: ProfileImageProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");
  const dimensions = sizeMap[size];
  const isCircle = variant === "circle";

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
        "relative overflow-hidden border border-border bg-surface",
        isCircle
          ? "aspect-square rounded-full"
          : "aspect-[4/5] rounded-2xl",
        !isCircle && size === "lg" && "w-full max-w-[280px]",
        isCircle && "w-full",
        className,
      )}
      style={isCircle ? { maxWidth: dimensions } : undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(249,115,22,0.16),transparent_55%)]"
        aria-hidden="true"
      />

      {status === "ready" ? (
        <Image
          src={siteConfig.profileImage}
          alt={`${siteConfig.name} — professional portrait`}
          width={dimensions}
          height={isCircle ? dimensions : Math.round(dimensions * 1.25)}
          className="relative z-[1] h-full w-full object-cover"
          priority={priority || size === "lg" || size === "xl"}
        />
      ) : (
        <div
          className="relative z-[1] flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center"
          role="img"
          aria-label={`${siteConfig.name} profile image placeholder`}
        >
          <div className="flex size-16 items-center justify-center rounded-full border border-border bg-surface-muted font-mono text-xl font-semibold tracking-tight text-accent sm:size-20 sm:text-2xl">
            IK
          </div>
          {!isCircle ? (
            <div>
              <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
              <p className="mt-1 text-xs text-muted-soft">
                {status === "loading" ? "Loading portrait…" : "Add /images/profile.jpg"}
              </p>
            </div>
          ) : null}
        </div>
      )}

      {!isCircle ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-background/80 to-transparent"
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
