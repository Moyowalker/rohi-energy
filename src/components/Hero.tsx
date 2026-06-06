"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleField } from "@/components/ui/ParticleField";
import { hero } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const word = {
  hidden: { opacity: 0, y: "1em", rotateZ: 5, scale: 0.9 },
  show: {
    opacity: 1,
    y: "0em",
    rotateZ: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  
  const yContent = useTransform(smoothProgress, [0, 1], [0, 200]);
  const opacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const scaleContent = useTransform(smoothProgress, [0, 1], [1, 0.85]);
  const glowY = useTransform(smoothProgress, [0, 1], [0, -150]);

  // Decorative right-side animations
  const rotateOrb = useTransform(smoothProgress, [0, 1], [0, 180]);
  const yOrb = useTransform(smoothProgress, [0, 1], [0, 300]);

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
        <div className="absolute left-[30%] top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2/15 blur-[120px] [animation:pulse-glow_7s_ease-in-out_infinite]" />
      </motion.div>
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <Container className="w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div style={{ y: yContent, opacity, scale: scaleContent }} className="max-w-3xl transform-origin-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-line-strong bg-black/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-2 backdrop-blur shadow-sm"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              {hero.headline.split(" ").map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] pr-2">
                  <motion.span
                    variants={word}
                    className="inline-block text-gradient transform-origin-bottom-left"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              {hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="mt-12 flex flex-wrap items-center gap-6"
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
          
          <motion.div 
            style={{ y: yOrb, opacity, rotate: rotateOrb }} 
            className="hidden lg:flex relative justify-center items-center h-full w-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          >
             <div className="relative w-96 h-96">
                <div className="absolute inset-0 rounded-full border border-accent/30 rounded-bl-[100px] border-dashed border-2 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-6 rounded-full border border-accent-2/40 border-dotted border-4 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-accent to-accent-2 opacity-20 blur-2xl animate-pulse" />
                <div className="absolute inset-24 rounded-full border border-line-strong backdrop-blur-md bg-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
                    <span className="font-serif text-5xl font-semibold opacity-30 text-accent-deep transform -rotate-12">Rohi</span>
                </div>
             </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-dim"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line-strong p-1.5 bg-background/50 backdrop-blur">
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
