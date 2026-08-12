import { cn } from "@/lib/utils";

type OrbitTechIconProps = {
  name: string;
  className?: string;
};

export function OrbitTechIcon({ name, className }: OrbitTechIconProps) {
  const label = name.toLowerCase();

  if (label.includes("react native")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="2.4" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (label.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#000" />
        <path d="M7.5 7.5h2l5.8 8.8V7.5H17v9h-2L9.2 7.6V16.5H7.5V7.5Z" fill="#fff" />
      </svg>
    );
  }

  if (label.includes("typescript")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M13.1 17.8v-1.5c.6.3 1.2.5 2 .5.8 0 1.2-.3 1.2-.8 0-.5-.4-.7-1.3-1l-.6-.2c-1.4-.5-2.2-1.2-2.2-2.4 0-1.4 1.2-2.4 3-2.4.9 0 1.7.2 2.4.6v1.5c-.6-.3-1.2-.5-2-.5-.7 0-1.1.3-1.1.8 0 .4.3.7 1.3 1l.6.2c1.6.5 2.3 1.3 2.3 2.5 0 1.5-1.2 2.5-3.1 2.5-.9 0-1.8-.2-2.5-.7ZM6.8 17.9H5V8.8h6.4v1.7H6.8v7.4Z" fill="#fff" />
      </svg>
    );
  }

  if (label.includes("nest")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 2.5c2.3 1.4 4 2.2 5.9 2.2.4 1.8.6 4.2.1 7-.6 3.2-2.5 5.7-6 8.8-3.5-3.1-5.4-5.6-6-8.8-.5-2.8-.3-5.2.1-7 1.9 0 3.6-.8 5.9-2.2Z" fill="#E0234E" />
        <path d="M12 6.5c1.4.8 2.5 1.2 3.6 1.2.2 1.1.4 2.6 0 4.3-.4 1.9-1.4 3.3-3.6 5.2-2.2-1.9-3.2-3.3-3.6-5.2-.4-1.7-.2-3.2 0-4.3 1.1 0 2.2-.4 3.6-1.2Z" fill="#fff" />
      </svg>
    );
  }

  if (label.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M17.5 8.5c-.3-2.2-2-3.8-4.2-4.1-.4-.1-.8-.1-1.3-.1-1.2 0-2.3.3-3.2.9-.9.6-1.6 1.5-2 2.6-.5 1.2-.5 2.5-.1 3.7.4 1.1 1.2 2 2.2 2.6 1 .6 2.2.9 3.4.8 1.2-.1 2.3-.6 3.1-1.4.8-.8 1.3-1.9 1.4-3.1.1-.4.1-.8 0-1.2-.1-.3-.3-.6-.5-.9Z"
          fill="#336791"
        />
        <ellipse cx="12" cy="14.5" rx="7" ry="5.5" fill="#336791" />
        <path d="M8.5 10.5c.2-.8.7-1.5 1.4-2 .7-.5 1.6-.8 2.5-.8.9 0 1.8.3 2.5.8" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
        <circle cx="9.5" cy="13" r="1" fill="#fff" />
        <circle cx="14.5" cy="13" r="1" fill="#fff" />
        <path d="M10 16.5c.8.5 1.8.8 2.8.8 1 0 2-.3 2.8-.8" fill="none" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (label.includes("prisma")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 3 4 20.5l8-3.8 8-3.7L12 3Z" fill="#2D3748" />
        <path d="M12 3v13.7L20 13 12 3Z" fill="#fff" opacity="0.95" />
        <path d="M12 16.7 4 20.5 12 3v13.7Z" fill="#718096" />
      </svg>
    );
  }

  if (label.includes("gcp")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 4.5 16.5 12 12 19.5 7.5 12 12 4.5Z" fill="#EA4335" />
        <path d="M7.5 12 12 19.5 3.5 16 7.5 12Z" fill="#FBBC05" />
        <path d="M16.5 12 20.5 16 12 19.5 16.5 12Z" fill="#34A853" />
        <path d="M7.5 12 12 4.5 3.5 8 7.5 12Z" fill="#4285F4" />
      </svg>
    );
  }

  if (label.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M3.5 13.2h2v2h-2v-2Zm2.5 0h2v2h-2v-2Zm2.5 0h2v2h-2v-2Zm2.5 0h2v2h-2v-2Zm-5-2.5h2v2h-2v-2Zm2.5 0h2v2h-2v-2Zm2.5 0h2v2h-2v-2Zm2.5 0h2v2h-2v-2Zm0-2.5h2v2h-2v-2Zm4.5 4.5c.8 0 1.6.2 2.3.6.5-2-.3-3.5-2-4.6l-.4.7c1.2.7 1.8 1.7 1.6 3.2H3.8c0 2.8 2.2 4.8 5.2 4.8 2.3 0 4-.8 5.1-2.3.6.4 1.3.5 2 .5 2 0 3.4-1 4-2.7H16.8Z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-surface-muted font-mono text-[11px] font-bold text-accent",
        className,
      )}
      aria-hidden="true"
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}
