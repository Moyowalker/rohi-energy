"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleField } from "@/components/ui/ParticleField";
import { hero } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const word = {
  hidden: { opacity: 0, y: "0.5em", rotateX: -40 },
  show: {
    opacity: 1,
    y: "0em",
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Animated background layers */}
      <ParticleField className="absolute inset-0 -z-20 h-full w-full" />
      <motion.div
        style={{ y: glowY }}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] [animation:pulse-glow_7s_ease-in-out_infinite]" />
        <div className="absolute right-[12%] top-[18%] h-72 w-72 rounded-full bg-accent-2/10 blur-[90px]" />
      </motion.div>
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <Container>
        <motion.div style={{ y: yContent, opacity }} className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-2 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ perspective: 800 }}
          >
            {hero.headline.split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em]">
                <motion.span
                  variants={word}
                  className="inline-block text-gradient"
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </MagneticButton>
            <MagneticButton href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-dim"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line-strong p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-accent"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
