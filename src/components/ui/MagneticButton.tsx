"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary: "text-[#0a0a0a]",
  outline: "border border-line-strong text-ink hover:border-accent/60",
  ghost: "text-ink-soft hover:text-ink",
};

/**
 * Button/link with a magnetic pull toward the cursor. Primary variant carries
 * an animated copper gradient fill.
 */
export function MagneticButton({
  href,
  variant = "primary",
  className,
  children,
  strength = 0.4,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const isAnchor = href.startsWith("#");
  const inner = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 -z-10 rounded-full accent-gradient shadow-[0_0_30px_-4px_var(--glow)] transition-transform duration-300 group-hover:scale-105" />
      )}
      {children}
    </>
  );

  const content = (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(base, variants[variant], className)}
      data-cursor="hover"
    >
      {inner}
    </motion.span>
  );

  // motion.span can't host a ref-forwarding anchor cleanly; wrap with the link.
  if (isAnchor) {
    return <a href={href}>{content}</a>;
  }
  return <Link href={href}>{content}</Link>;
}
