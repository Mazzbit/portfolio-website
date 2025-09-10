"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Circle = {
  el: HTMLDivElement | null;
  x: number; y: number; vx: number; vy: number;
  size: number; hue: number; lightness: number; opacity: number;
  tvx: number; tvy: number; lerp: number;
};

const COUNT = 30;
let PERSISTED: Omit<Circle, "el">[] | null = null;

export default function BokehBackground() {
  const circlesRef = useRef<Circle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 }); // << Mauspos
  const rafRef = useRef<number | null>(null); 
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  const makeCircle = (): Circle => {
    const size = 150 + Math.random() * 100;
    const hue = 240 + Math.random() * 20;
    const lightness = 60 + Math.random() * 10;
    const opacity = 0.08 + Math.random() * 0.1;
    const x = Math.random() * innerWidth;
    const y = Math.random() * innerHeight;
    const ang = Math.random() * Math.PI * 2;
    const speed = 0.3 + Math.random() * 0.5;
    return { el: null, x, y, vx: Math.cos(ang)*speed, vy: Math.sin(ang)*speed,
      size, hue, lightness, opacity, tvx: 0, tvy: 0, lerp: 1 };
  };

  // Init
  useEffect(() => {
    if (typeof window === "undefined") return;

    circlesRef.current =
      (PERSISTED
        ? PERSISTED.map(c => ({ el: null, ...c }))
        : Array.from({ length: COUNT }, makeCircle));

    setReady(true);

    // Maus-Events
    const onMove = (e: MouseEvent) => (mouseRef.current = { x: e.clientX, y: e.clientY });
    const onLeave = () => (mouseRef.current = { x: -9999, y: -9999 });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    // Animation
    const animate = () => {
      const m = mouseRef.current;

      for (const c of circlesRef.current) {
        // sanft zu Ziel-Velocities blenden
        if (c.lerp < 1) {
          const t = 0.06;
          c.vx += (c.tvx - c.vx) * t;
          c.vy += (c.tvy - c.vy) * t;
          c.lerp = Math.min(1, c.lerp + 0.06);
        }

        // Mausabstoßung
        const dx = m.x - c.x;
        const dy = m.y - c.y;
        const distSq = dx*dx + dy*dy;
        const R = 200;                    // Radius
        if (distSq > 0 && distSq < R*R) {
          const dist = Math.sqrt(distSq);
          const nx = dx / dist, ny = dy / dist;
          const force = Math.min(1000 / (distSq + 50), 1.5); // wie bei dir
          c.vx -= nx * force;
          c.vy -= ny * force;
        }

        // Bewegung + Dämpfung
        c.vx *= 0.99; c.vy *= 0.99;
        c.x += c.vx;   c.y += c.vy;

        // Bildschirmränder
        const B = 300;
        if (c.x < -B || c.x > innerWidth  + B) c.vx *= -1;
        if (c.y < -B || c.y > innerHeight + B) c.vy *= -1;

        if (c.el) c.el.style.transform = `translate(${c.x}px, ${c.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      PERSISTED = circlesRef.current.map(({ el, ...rest }) => rest);
    };
  }, []);

  // Bei Page-Wechsel: sanfter, zufälliger Boost
  useEffect(() => {
    for (const c of circlesRef.current) {
      // zufälliger Winkel
      const angle = Math.random() * Math.PI * 2;

      // kleine, zufällige Boost-Stärke
      const boost = 3 + Math.random() * 2; // ~3–5 px/frame

      // kurz in die Richtung stoßen
      c.vx += Math.cos(angle) * boost;
      c.vy += Math.sin(angle) * boost;

      // danach wie gewohnt neue Zielgeschwindigkeit setzen
      const speed = 0.3 + Math.random() * 0.5;
      const ang = Math.random() * Math.PI * 2;
      c.tvx = Math.cos(ang) * speed;
      c.tvy = Math.sin(ang) * speed;
      c.lerp = 0; // blendet sanft ein
    }
  }, [pathname]);




  if (!ready) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {circlesRef.current.map((c, i) => (
        <div
          key={i}
          ref={(el) => { circlesRef.current[i].el = el; }}
          className="absolute rounded-full"
          style={{
            width: c.size,
            height: c.size,
            backgroundColor: `hsla(${c.hue},100%,${c.lightness}%,${c.opacity})`,
            transform: `translate(${c.x}px, ${c.y}px)`,
            filter: "blur(10px)",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
