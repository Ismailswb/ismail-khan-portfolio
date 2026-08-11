type IconProps = {
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

export function GitHubIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
    >
      <path d="M12 2C6.477 2 2 6.584 2 12.217c0 4.506 2.865 8.329 6.839 9.675.5.093.682-.222.682-.49 0-.242-.009-.883-.014-1.733-2.782.616-3.369-1.368-3.369-1.368-.454-1.177-1.11-1.49-1.11-1.49-.908-.635.069-.622.069-.622 1.003.072 1.531 1.05 1.531 1.05.892 1.559 2.341 1.109 2.91.848.092-.66.35-1.11.636-1.365-2.22-.257-4.555-1.135-4.555-5.05 0-1.115.39-2.026 1.03-2.74-.103-.258-.447-1.296.098-2.7 0 0 .84-.274 2.75 1.045A9.35 9.35 0 0 1 12 6.844c.85.004 1.705.117 2.504.343 1.909-1.319 2.747-1.045 2.747-1.045.547 1.404.203 2.442.1 2.7.64.714 1.028 1.625 1.028 2.74 0 3.925-2.339 4.79-4.566 5.043.359.316.679.94.679 1.895 0 1.368-.012 2.471-.012 2.807 0 .27.18.588.688.488C19.138 20.543 22 16.72 22 12.217 22 6.584 17.523 2 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
    >
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={props["aria-hidden"] ?? true}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/** Compact brand marks used in tech strip / orbit visuals. */
export function TechMark({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const label = name.toLowerCase();

  if (label.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1.2"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1.2"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1.2"
          transform="rotate(120 12 12)"
        />
      </svg>
    );
  }

  if (label.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#fff" />
        <path
          d="M8.2 7.5h1.8l5.3 8.1V7.5H17v9h-1.8L9.9 8.4V16.5H8.2V7.5Z"
          fill="#0a0a0a"
        />
      </svg>
    );
  }

  if (label.includes("typescript") || label === "ts") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M12.9 17.6v-1.4c.5.3 1.1.5 1.8.5.7 0 1.1-.3 1.1-.7 0-.4-.3-.6-1.2-.9l-.5-.2c-1.3-.4-2.1-1.1-2.1-2.3 0-1.3 1.1-2.3 2.8-2.3.8 0 1.5.2 2.1.5v1.4c-.5-.3-1.1-.5-1.8-.5-.6 0-1 .3-1 .7 0 .4.3.6 1.2.9l.5.2c1.5.5 2.2 1.2 2.2 2.4 0 1.4-1.1 2.4-3 2.4-.9 0-1.7-.2-2.4-.7Zm-5.2.1H6.1V8.8h6.1v1.6H7.7v7.3Z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (label.includes("nest")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M12 2.2c2.4 1.5 4.2 2.3 6.2 2.3.4 1.9.7 4.4.1 7.3-.7 3.4-2.6 6-6.3 9.2-3.7-3.2-5.6-5.8-6.3-9.2-.6-2.9-.3-5.4.1-7.3 2 0 3.8-.8 6.2-2.3Z"
          fill="#E0234E"
        />
        <path
          d="M12 6.2c1.5.9 2.6 1.3 3.8 1.3.2 1.2.4 2.7 0 4.5-.4 2-1.5 3.5-3.8 5.5-2.3-2-3.4-3.5-3.8-5.5-.4-1.8-.2-3.3 0-4.5 1.2 0 2.3-.4 3.8-1.3Z"
          fill="#fff"
          opacity="0.9"
        />
      </svg>
    );
  }

  if (label.includes("postgres")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <ellipse cx="12" cy="12" rx="8.5" ry="9.5" fill="#336791" />
        <path
          d="M9.2 7.5c1.1-.4 2.3-.5 3.5-.2 1.4.3 2.3 1.1 2.6 2.4.2.9 0 1.8-.5 2.5l1.4 3.8h-1.7l-1.2-3.2h-.9l-.4 3.2H10l.7-5.2c-.8-.3-1.3-.9-1.4-1.7-.2-1 .2-2 1.9-1.6Z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (label.includes("prisma")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M5.5 17.8 12.2 3.5l6.3 13.8-6.8 3.2-6.2-2.7Z" fill="#fff" />
        <path d="M12.2 3.5 5.5 17.8l3.4 1.5L18.5 7.2 12.2 3.5Z" fill="#2D3748" />
      </svg>
    );
  }

  if (label.includes("gcp") || label.includes("google")) {
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
          d="M4 13.2h2.1v2.1H4v-2.1Zm2.6 0h2.1v2.1H6.6v-2.1Zm2.6 0h2.1v2.1H9.2v-2.1Zm2.6 0H14v2.1h-2.1v-2.1Zm-5.2-2.6h2.1v2.1H6.6v-2.1Zm2.6 0h2.1v2.1H9.2v-2.1Zm2.6 0H14v2.1h-2.1v-2.1Zm0-2.6H14v2.1h-2.1V7.9Zm4.5 4.5c.9 0 1.7.2 2.4.7.5-2.1-.3-3.7-2.1-4.8l-.4.8c1.3.7 1.9 1.8 1.7 3.3H4.2c0 3 2.3 5.1 5.5 5.1 2.4 0 4.2-.9 5.4-2.5.7.4 1.4.5 2.2.5 2.1 0 3.5-1.1 4.1-2.9H17.3Z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  if (label.includes("nginx")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z" fill="#009639" />
        <path d="M10.2 8.2h1.6v5.3l3.2-5.3H16.8v7.6h-1.6v-5.3l-3.2 5.3H10.2V8.2Z" fill="#fff" />
      </svg>
    );
  }

  if (label.includes("pm2")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#2B037A" />
        <path
          d="M6.2 16.5V7.5h3.1c1.8 0 2.9 1 2.9 2.5 0 1.5-1.1 2.5-2.9 2.5H8v4H6.2Zm1.8-5.5h1.2c.8 0 1.2-.4 1.2-1s-.4-1-1.2-1H8v2Zm6.2 5.5-2.2-9h1.9l1.3 6.1 1.3-6.1h1.9l-2.2 9h-2Z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (label.includes("ci/cd") || label.includes("git")) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M12 2.5a1.5 1.5 0 0 1 1.06.44l8 8a1.5 1.5 0 0 1 0 2.12l-8 8a1.5 1.5 0 0 1-2.12 0l-8-8a1.5 1.5 0 0 1 0-2.12l8-8A1.5 1.5 0 0 1 12 2.5Zm0 5.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm-4.3 5.7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm8.6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
          fill="#F05032"
        />
      </svg>
    );
  }

  return (
    <span
      className={cnFallback(className)}
      aria-hidden="true"
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function cnFallback(className?: string) {
  return [
    "inline-flex items-center justify-center rounded-md bg-surface-muted font-mono text-[10px] font-semibold text-accent",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}
