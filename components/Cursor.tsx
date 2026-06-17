"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const cur  = curRef.current!;
    const ring = ringRef.current!;
    let mx = 0, my = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      rx.current += (mx - rx.current) * 0.1;
      ry.current += (my - ry.current) * 0.1;
      cur.style.left  = mx + "px";
      cur.style.top   = my + "px";
      ring.style.left = rx.current + "px";
      ring.style.top  = ry.current + "px";
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => {
      cur.style.width  = "20px";
      cur.style.height = "20px";
      cur.style.background = "#86c99a";
      ring.style.width  = "52px";
      ring.style.height = "52px";
    };
    const onLeave = () => {
      cur.style.width  = "10px";
      cur.style.height = "10px";
      cur.style.background = "#4a9e70";
      ring.style.width  = "36px";
      ring.style.height = "36px";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.querySelectorAll("a,button,[data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="vg-cursor"      ref={curRef}  />
      <div id="vg-cursor-ring" ref={ringRef} />
    </>
  );
}
