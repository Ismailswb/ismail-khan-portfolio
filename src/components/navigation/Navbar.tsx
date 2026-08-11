"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button, NativeButton } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative block shrink-0 overflow-hidden", className)}>
      <Image
        src={siteConfig.logo}
        alt=""
        fill
        sizes="96px"
        className="object-contain object-left"
        priority
      />
    </span>
  );
}

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="group flex min-w-0 items-center gap-0.5 sm:gap-2">
      <BrandMark
        className={cn(
          compact ? "h-9 w-[3.25rem] -mr-0.5" : "h-10 w-[3.5rem] -mr-1 sm:h-11 sm:w-[4.25rem] sm:mr-0",
        )}
      />
      <span className="flex min-w-0 flex-col justify-center leading-none">
        <span
          className={cn(
            "block truncate font-semibold uppercase tracking-wide text-foreground",
            compact ? "text-xs" : "text-xs sm:text-[13px]",
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "mt-0.5 block truncate text-muted",
            compact ? "text-[9px] leading-snug" : "text-[9px] leading-snug sm:text-[10px]",
          )}
        >
          {siteConfig.title}
        </span>
      </span>
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const reduceMotion = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = siteConfig.nav.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
          scrolled || open
            ? "border-border/80 bg-background/85 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-background/55 backdrop-blur-md",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
          <Link
            href="/#home"
            className="min-w-0"
            onClick={closeMenu}
            aria-label={`${siteConfig.name} — ${siteConfig.title}`}
          >
            <BrandLockup />
          </Link>

          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex"
          >
            {siteConfig.nav.map((item) => {
              const active = activeId === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Button
                href={siteConfig.cvPath}
                download
                variant="outline"
                size="sm"
                aria-label="Download CV"
              >
                <Download className="size-3.5" aria-hidden="true" />
                Download CV
              </Button>
            </div>

            <NativeButton
              variant="ghost"
              size="sm"
              className="px-2.5 lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </NativeButton>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.aside
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-y-0 left-0 z-[70] flex w-[min(100%,20rem)] flex-col border-r border-border bg-background lg:hidden"
              initial={reduceMotion ? false : { x: "-100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: "-100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <Link
                  href="/#home"
                  onClick={closeMenu}
                  className="min-w-0"
                  aria-label={`${siteConfig.name} — ${siteConfig.title}`}
                >
                  <BrandLockup compact />
                </Link>
                <NativeButton
                  variant="ghost"
                  size="sm"
                  className="px-2.5"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <X className="size-5" aria-hidden="true" />
                </NativeButton>
              </div>

              <nav
                aria-label="Mobile"
                className="flex flex-1 flex-col gap-1 px-4 py-5"
              >
                {siteConfig.nav.map((item) => {
                  const active = activeId === item.id;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-accent-soft text-accent"
                          : "text-foreground hover:bg-surface-muted",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Button
                  href={siteConfig.cvPath}
                  download
                  variant="outline"
                  className="mt-4 w-full"
                  onClick={closeMenu}
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download CV
                </Button>
              </nav>

              <div className="space-y-4 border-t border-border px-5 py-5">
                <SocialLinks onNavigate={closeMenu} />
                <div className="flex items-center gap-2.5 text-sm text-muted">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inset-0 rounded-full bg-success/50 pulse-dot" />
                    <span className="relative size-2 rounded-full bg-success" />
                  </span>
                  {siteConfig.availability}
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
