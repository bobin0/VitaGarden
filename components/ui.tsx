"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ── Fade-in wrapper ── */
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const offsets: Record<string, { x: number; y: number }> = {
    up:    { x: 0,   y: 28 },
    down:  { x: 0,   y: -28 },
    left:  { x: -28, y: 0 },
    right: { x: 28,  y: 0 },
    none:  { x: 0,   y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section label ── */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-4">
      <span className="w-5 h-px bg-leaf-500" />
      <span className="text-leaf-600 text-xs font-semibold tracking-[0.18em] uppercase font-body">
        {children}
      </span>
      <span className="w-5 h-px bg-leaf-500" />
    </div>
  );
}

/* ── Section heading ── */
export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display font-bold text-forest-800 leading-[1.1] tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}
