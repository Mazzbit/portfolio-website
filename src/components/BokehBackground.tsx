"use client";

import { useEffect, useRef, useState } from "react";

type Circle = {
  el: HTMLDivElement | null;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  lightness: number;
  opacity: number;
};

export default function BokehPhysicsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [circles, setCircles] = useState<Circle[]>([]);

  // Init after mount (window-safe)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const newCircles: Circle[] = Array.from({ length: 30 }).map(() => {
      const size = 150 + Math.random() * 100;
      const hue = 240 + Math.random() * 20;
      const lightness = 60 + Math.random() * 10;
      const opacity = 0.08 + Math.random() * 0.1;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.3 + Math.random() * 0.5;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      return { el: null, x, y, vx, vy, size, hue, lightness, opacity };
    });

    setCircles(newCircles);
  }, []);

  // Bewegung und Interaktion
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      setCircles((prev) =>
        prev.map((c) => {
          const dx = mouse.current.x - c.x;
          const dy = mouse.current.y - c.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Mausabstoßung
          if (dist < 200) {
            const angle = Math.atan2(dy, dx);
            const force = Math.min(1000 / (dist * dist + 50), 1.5);
            c.vx -= Math.cos(angle) * force;
            c.vy -= Math.sin(angle) * force;
          }

          // Bewegung
          c.vx *= 0.995;
          c.vy *= 0.995;
          c.x += c.vx;
          c.y += c.vy;

          // Bildschirmränder
          const buffer = 300;
          if (c.x < -buffer || c.x > window.innerWidth + buffer) c.vx *= -1;
          if (c.y < -buffer || c.y > window.innerHeight + buffer) c.vy *= -1;

          if (c.el) {
            c.el.style.transform = `translate(${c.x}px, ${c.y}px)`;
          }

          return c;
        })
      );

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {circles.map((circle, i) => (
        <div
          key={i}
          className="bokeh-circle absolute rounded-full"
          ref={(el) => (circles[i].el = el)}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor: `hsla(${circle.hue}, 100%, ${circle.lightness}%, ${circle.opacity})`,
            transform: `translate(${circle.x}px, ${circle.y}px)`,
            filter: "blur(10px)",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
