"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Card with a cursor-following radial spotlight and subtle 3D tilt.
 */
export function SpotlightCard({
  className,
  children,
  tilt = 6,
}: {
  className?: string;
  children: React.ReactNode;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setPos({ x: px * 100, y: py * 100 });
    ry.set((px - 0.5) * tilt * 2);
    rx.set(-(py - 0.5) * tilt * 2);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-bg-elev/70 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${pos.x}% ${pos.y}%, rgba(232,132,60,0.16), transparent 70%)`,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
