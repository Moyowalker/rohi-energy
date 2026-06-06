import { cn } from "@/lib/cn";

/**
 * Brand lockup: a copper flame mark + typed wordmark using the brand fonts.
 * Typed (not baked into an SVG) so it never clips and stays crisp at any size.
 */
export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-ink", className)}>
      <LogoMark className="h-8 w-8 flex-none" />
      {showText && (
        <span className="flex items-baseline gap-1.5 leading-none">
          <span className="font-serif text-xl font-semibold tracking-tight">
            Rohi
          </span>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-ink-soft">
            Energy
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Rohi Energy"
    >
      <defs>
        <linearGradient id="rohi-flame" x1="20" y1="6" x2="20" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="0.55" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" className="fill-bg-elev" stroke="currentColor" strokeOpacity="0.16" />
      <path
        d="M20 8c4.8 4.2 7.4 8.4 7.4 12.6C27.4 26 24.2 29.5 20 29.5S12.6 26 12.6 20.6C12.6 16.4 15.2 12.2 20 8Z"
        fill="url(#rohi-flame)"
      />
      <path
        d="M20 18.5c1.9 1.7 2.9 3.4 2.9 5.1 0 1.9-1.3 3.4-2.9 3.4s-2.9-1.5-2.9-3.4c0-1.7 1-3.4 2.9-5.1Z"
        fill="#fff"
        fillOpacity="0.55"
      />
    </svg>
  );
}
