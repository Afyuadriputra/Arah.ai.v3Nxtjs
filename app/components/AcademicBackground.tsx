"use client";

import { useEffect, useMemo, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function hash01(a: number, b: number) {
  // Deterministic pseudo-random in [0,1) from two ints.
  let x = (a * 374761393 + b * 668265263) ^ (a * 1274126177);
  x = (x ^ (x >>> 13)) * 1274126177;
  x = x ^ (x >>> 16);
  return (x >>> 0) / 4294967296;
}

export function AcademicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const seed = useMemo(() => {
    const now = Date.now();
    return now ^ (now >>> 16);
  }, []);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const ctx2d = canvasEl.getContext("2d");
    if (!ctx2d) return;

    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = ctx2d;

    const reducedMotion = prefersReducedMotion();

    const rand = mulberry32(seed);

    const NODE_COUNT = 140;
    const nodes: Node[] = Array.from({ length: NODE_COUNT }).map((_, i) => {
      const baseR = 1.1 + rand() * 1.6;
      return {
        x: rand(),
        y: rand(),
        vx: (rand() - 0.5) * 0.00045,
        vy: (rand() - 0.5) * 0.00045,
        r: i % 9 === 0 ? baseR + 0.8 : baseR,
        phase: rand() * Math.PI * 2
      };
    });

    const DUST_COUNT = 140;
    const dust: Particle[] = Array.from({ length: DUST_COUNT }).map(() => {
      const r = 0.55 + rand() * 0.9;
      return {
        x: rand(),
        y: rand(),
        vx: (rand() - 0.5) * 0.00035,
        vy: (rand() - 0.5) * 0.00035,
        r,
        phase: rand() * Math.PI * 2
      };
    });

    const glyphs = ["∑", "∂", "∫", "λ", "⊕", "→", "≈", "∞", "Δ", "μ"];
    const notes = Array.from({ length: 14 }).map(() => ({
      x: rand(),
      y: rand(),
      g: glyphs[Math.floor(rand() * glyphs.length)]
    }));

    let w = 0;
    let h = 0;
    let dpr = 1;

    const pointer = {
      x: 0.5,
      y: 0.35,
      lastMoveMs: 0,
      inViewport: false
    };

    let lastTimeMs = 0;
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let scrollVelocity = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const onMove = (e: PointerEvent) => {
      if (reducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / Math.max(1, rect.width);
      const ny = (e.clientY - rect.top) / Math.max(1, rect.height);
      pointer.x = clamp(nx, 0, 1);
      pointer.y = clamp(ny, 0, 1);
      pointer.inViewport = true;
      pointer.lastMoveMs = performance.now();
    };

    const onLeave = () => {
      pointer.inViewport = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    function drawFrame(timeMs: number) {
      const t = timeMs * 0.001;
      const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
      const scrollPhase = scrollY * 0.00035;
      const scrollOffsetX = -scrollY * 0.02;
      const scrollOffsetY = -scrollY * 0.06;
      ctx.clearRect(0, 0, w, h);

      const snap = (v: number, step: number) => Math.round(v / step) * step;

      const pickInk = (y01: number) => {
        // Our page background transitions to near-black at the bottom.
        // Switch ink color so the graph stays visible across the gradient.
        return y01 > 0.62 ? "255,255,255" : "0,0,0";
      };

      // Very subtle paper-like wash.
      const wash = ctx.createRadialGradient(
        w * 0.55,
        h * 0.15,
        0,
        w * 0.55,
        h * 0.15,
        Math.max(w, h) * 0.8
      );
      wash.addColorStop(0, "rgba(0,0,0,0.02)");
      wash.addColorStop(1, "rgba(0,0,0,0.00)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, w, h);

      // Draw edges.
      const linkDist = 0.165;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > linkDist) continue;

          const alpha = (1 - dist / linkDist) * 0.22;
          const ink = pickInk((a.y + b.y) * 0.5);
          ctx.strokeStyle = `rgba(${ink},${alpha.toFixed(3)})`;
          ctx.lineWidth = dist < linkDist * 0.45 ? 1.05 : 0.85;
          ctx.beginPath();
          let ax = a.x * w + scrollOffsetX;
          let ay = a.y * h + scrollOffsetY;
          let bx = b.x * w + scrollOffsetX;
          let by = b.y * h + scrollOffsetY;

          // Robotic/circuit feel: occasional orthogonal "trace" routing.
          const trace = hash01(i + 91, j + 17);
          if (trace < 0.33) {
            const mid = trace < 0.165 ? "x" : "y";
            const k = 0.22 + 0.56 * hash01(i + 7, j + 33);
            if (mid === "x") {
              const mx = snap(ax + (bx - ax) * k, 6);
              ctx.moveTo(ax, ay);
              ctx.lineTo(mx, ay);
              ctx.lineTo(mx, by);
              ctx.lineTo(bx, by);
            } else {
              const my = snap(ay + (by - ay) * k, 6);
              ctx.moveTo(ax, ay);
              ctx.lineTo(ax, my);
              ctx.lineTo(bx, my);
              ctx.lineTo(bx, by);
            }
          } else {
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
          }
          ctx.stroke();

          // Futuristic signal pulses on a sparse subset of edges.
          const r = hash01(i, j);
          if (r < 0.045) {
            const speed = 0.12 + Math.min(0.28, Math.abs(scrollVelocity) * 0.07);
            const p = (t * speed + r * 7.3 + scrollPhase) % 1;
            const px = ax + (bx - ax) * p;
            const py = ay + (by - ay) * p;
            const halo = dist < linkDist * 0.45 ? 3.2 : 2.6;
            ctx.fillStyle = `rgba(${ink},0.75)`;
            ctx.beginPath();
            ctx.arc(px, py, 1.35, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(${ink},0.10)`;
            ctx.beginPath();
            ctx.arc(px, py, halo, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw nodes.
      for (const n of nodes) {
        const pulse = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 1.35 + n.phase));
        const r = n.r * (0.85 + pulse * 0.35);

        const ink = pickInk(n.y);

        const nx = n.x * w + scrollOffsetX;
        const ny = n.y * h + scrollOffsetY;

        // Robotic nodes: subtle squares/diamonds instead of circles.
        ctx.fillStyle = `rgba(${ink},0.46)`;
        const s = r * 1.15;
        const rot = (0.25 + 0.25 * Math.sin(n.phase + scrollPhase * 0.5)) * Math.PI;
        ctx.save();
        ctx.translate(nx, ny);
        ctx.rotate(rot);
        ctx.beginPath();
        ctx.rect(-s, -s, s * 2, s * 2);
        ctx.fill();
        ctx.restore();

        ctx.fillStyle = `rgba(${ink},0.08)`;
        ctx.beginPath();
        ctx.arc(nx, ny, r * 3.0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Dust particles for denser, more even coverage.
      for (const p of dust) {
        const ink = pickInk(p.y);
        const x = p.x * w + scrollOffsetX;
        const y = p.y * h + scrollOffsetY;
        const flicker = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(t * 1.8 + p.phase + scrollPhase * 0.7));
        ctx.fillStyle = `rgba(${ink},${(0.12 * flicker).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Academic glyphs.
      ctx.fillStyle = "rgba(0,0,0,0.10)";
      ctx.font =
        "12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
      for (const note of notes) {
        const driftX = Math.sin(t * 0.25 + note.x * 8) * 8;
        const driftY = Math.cos(t * 0.22 + note.y * 7) * 6;
        ctx.fillText(note.g, note.x * w + driftX, note.y * h + driftY);
      }
    }

    function step(timeMs: number) {
      if (!reducedMotion) {
        const dtMs = lastTimeMs ? Math.max(8, timeMs - lastTimeMs) : 16;
        lastTimeMs = timeMs;

        const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
        scrollVelocity = (scrollY - lastScrollY) / dtMs;
        lastScrollY = scrollY;

        const friction = 0.989;
        const t = timeMs * 0.001;
        const scrollPhase = scrollY * 0.00035;

        const pointerActive =
          pointer.inViewport && performance.now() - pointer.lastMoveMs < 180;
        const influenceRadius = 0.13;

        // Wider motion + less "crash into each other": soft separation.
        const minSeparation = 0.034;
        const separationStrength = 0.00125;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0.0001 && d < minSeparation) {
              const k = (minSeparation - d) / minSeparation;
              const fx = (dx / d) * separationStrength * (k * k);
              const fy = (dy / d) * separationStrength * (k * k);
              a.vx += fx;
              a.vy += fy;
              b.vx -= fx;
              b.vy -= fy;
            }
          }
        }

        const boundsPad = 0.060;
        const boundsStrength = 0.00062;
        const vMax = 0.00145;

        // Very subtle direction quantization for a "robotic" motion profile.
        const quantizeStrength = 0.12;
        const angleSteps = 12;

        for (const n of nodes) {
          // Smooth flow field + micro-jitter (futuristic "semantic drift").
          const fx =
            Math.sin(n.y * 11 + t * 0.35 + scrollPhase) * 0.000030 +
            Math.cos(n.x * 13 - t * 0.22 - scrollPhase) * 0.000022;
          const fy =
            Math.cos(n.x * 12 + t * 0.32 + scrollPhase) * 0.000030 +
            Math.sin(n.y * 10 - t * 0.20 - scrollPhase) * 0.000022;
          n.vx += fx + (rand() - 0.5) * 0.000004;
          n.vy += fy + (rand() - 0.5) * 0.000004;

          // Hover disturbance: does NOT follow cursor; it reacts when the pointer passes.
          if (pointerActive) {
            const dx = n.x - pointer.x;
            const dy = n.y - pointer.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0.0001 && d < influenceRadius) {
              const k = (1 - d / influenceRadius) ** 2;
              // Repel + slight swirl.
              const repel = 0.00065 * k;
              n.vx += (dx / d) * repel;
              n.vy += (dy / d) * repel;

              const swirl = 0.00035 * k;
              n.vx += (-dy / d) * swirl;
              n.vy += (dx / d) * swirl;
            }
          }

          n.vx *= friction;
          n.vy *= friction;

          // Direction quantization (blend toward nearest angle, not hard snap).
          const v0 = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
          if (v0 > 0.00001) {
            const a0 = Math.atan2(n.vy, n.vx);
            const step = (Math.PI * 2) / angleSteps;
            const aq = Math.round(a0 / step) * step;
            const vxq = Math.cos(aq) * v0;
            const vyq = Math.sin(aq) * v0;
            n.vx = n.vx * (1 - quantizeStrength) + vxq * quantizeStrength;
            n.vy = n.vy * (1 - quantizeStrength) + vyq * quantizeStrength;
          }

          // Soft bounds (avoid hard bounces that cause crowding).
          if (n.x < boundsPad) n.vx += (boundsPad - n.x) * boundsStrength;
          else if (n.x > 1 - boundsPad) n.vx -= (n.x - (1 - boundsPad)) * boundsStrength;
          if (n.y < boundsPad) n.vy += (boundsPad - n.y) * boundsStrength;
          else if (n.y > 1 - boundsPad) n.vy -= (n.y - (1 - boundsPad)) * boundsStrength;

          const v = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
          if (v > vMax) {
            const s = vMax / v;
            n.vx *= s;
            n.vy *= s;
          }

          n.x += n.vx;
          n.y += n.vy;

          // Clamp safety net (rare).
          n.x = clamp(n.x, 0, 1);
          n.y = clamp(n.y, 0, 1);
        }

        // Dust drift (lighter, more uniform).
        for (const p of dust) {
          const fx =
            Math.sin(p.y * 10 + t * 0.4 + scrollPhase * 0.8) * 0.00003 +
            Math.cos(p.x * 12 - t * 0.28 - scrollPhase * 0.6) * 0.00002;
          const fy =
            Math.cos(p.x * 9 + t * 0.36 + scrollPhase * 0.7) * 0.00003 +
            Math.sin(p.y * 11 - t * 0.22 - scrollPhase * 0.5) * 0.00002;

          p.vx += fx;
          p.vy += fy;

          if (pointerActive) {
            const dx = p.x - pointer.x;
            const dy = p.y - pointer.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0.0001 && d < 0.11) {
              const k = (1 - d / 0.11) ** 2;
              const repel = 0.00035 * k;
              p.vx += (dx / d) * repel;
              p.vy += (dy / d) * repel;
            }
          }

          p.vx *= 0.992;
          p.vy *= 0.992;
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) {
            p.x = 0;
            p.vx *= -0.6;
          } else if (p.x > 1) {
            p.x = 1;
            p.vx *= -0.6;
          }
          if (p.y < 0) {
            p.y = 0;
            p.vy *= -0.6;
          } else if (p.y > 1) {
            p.y = 1;
            p.vy *= -0.6;
          }
        }
      }

      drawFrame(timeMs);
      rafRef.current = window.requestAnimationFrame(step);
    }

    if (reducedMotion) {
      drawFrame(0);
    } else {
      rafRef.current = window.requestAnimationFrame(step);
    }

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [seed]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {/* Subtle academic grid */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at 50% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.80) 35%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)"
        }}
      />

      {/* Semantic graph layer */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-95" />

      {/* Soft vignette so text remains crisp */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_45%),radial-gradient(circle_at_50%_85%,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0)_55%)] opacity-60" />
    </div>
  );
}
