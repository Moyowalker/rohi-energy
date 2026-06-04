import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  className,
}: {
  eyebrow?: string;
  heading: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
          <span className="h-px w-6 bg-accent/60" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
        {heading}
      </h2>
    </div>
  );
}
