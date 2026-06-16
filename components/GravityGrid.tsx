"use client";

import { useEffect, useRef } from "react";

/**
 * Particle field — a full-bleed lattice of small circle particles. The cursor
 * lifts the whole lattice as one connected sheet (a Gaussian "dome" underneath
 * the pointer), and points slide outward along the dome's slope, then ease back
 * to their home positions. Themed in the brand's warm hues with the odd white
 * spark. Crisp and cheap (no glow); sits behind the glass content.
 */
export default function GravityGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const SP = 34;
    const SIGMA = 155;
    const LIFT = 15;
    const EASE = 0.1; // cohesive lattice "lift"

    type Particle = {
      hx: number;
      hy: number;
      x: number;
      y: number;
      col: string;
      rad: number;
    };

    let W = 0;
    let H = 0;
    let DPR = 1;
    let parts: Particle[] = [];
    const m = { x: -9999, y: -9999 };
    let raf = 0;

    function build() {
      parts = [];
      const cols = Math.ceil(W / SP) + 1;
      const rows = Math.ceil(H / SP) + 1;
      const ox = (W - (cols - 1) * SP) / 2;
      const oy = (H - (rows - 1) * SP) / 2;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const hx = ox + i * SP;
          const hy = oy + j * SP;
          const r = Math.random();
          parts.push({
            hx,
            hy,
            x: hx,
            y: hy,
            col: r < 0.05 ? "255,255,255" : r < 0.2 ? "236,44,43" : "250,204,21",
            rad: 1 + Math.random() * 1.2,
          });
        }
      }
    }

    function draw(stat: boolean) {
      if (!ctx) {
        return;
      }
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        let near = 0;
        if (!stat) {
          // The lattice behaves like one connected sheet: the cursor lifts a
          // smooth dome underneath it (a Gaussian bump), and points slide
          // outward along the dome's slope — peaking partway out and easing to
          // nothing at the edges.
          const dx = p.hx - m.x;
          const dy = p.hy - m.y;
          const d = Math.hypot(dx, dy) || 0.0001;
          const x = d / SIGMA;
          const g = Math.exp((-x * x) / 2);
          near = g;
          const disp = (LIFT * x * g) / 0.60653; // normalized so the peak == LIFT
          const tx = p.hx + (dx / d) * disp;
          const ty = p.hy + (dy / d) * disp;
          p.x += (tx - p.x) * EASE;
          p.y += (ty - p.y) * EASE;
        }
        const a = 0.18 + near * 0.45;
        ctx.fillStyle = "rgba(" + p.col + "," + a.toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rad + near * 0.9, 0, 6.2832);
        ctx.fill();
      }
    }

    function resize() {
      if (!canvas || !ctx) {
        return;
      }
      DPR = Math.min(window.devicePixelRatio || 1, 1.5);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      build();
      draw(true);
    }

    function frame() {
      draw(false);
      raf = requestAnimationFrame(frame);
    }

    const onMove = (e: MouseEvent) => {
      m.x = e.clientX;
      m.y = e.clientY;
    };
    const onOut = () => {
      m.x = -9999;
      m.y = -9999;
    };

    window.addEventListener("resize", resize);
    if (!reduce) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onOut);
    }
    resize();
    if (!reduce) {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
