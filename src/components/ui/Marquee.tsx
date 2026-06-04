import { cn } from "@/lib/cn";

/**
 * Infinite horizontal marquee. Renders the items twice so the CSS translate
 * loop is seamless. Pauses on hover.
 */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <div className="marquee-track flex shrink-0 items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-serif text-2xl text-ink-soft sm:text-3xl">
              {item}
            </span>
            <span aria-hidden className="text-accent">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
