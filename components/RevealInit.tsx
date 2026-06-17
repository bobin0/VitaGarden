"use client";
import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vg-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "-40px" }
    );
    document.querySelectorAll(".vg-reveal,.vg-reveal-l,.vg-reveal-r").forEach((el) =>
      obs.observe(el)
    );
    return () => obs.disconnect();
  }, []);
  return null;
}
