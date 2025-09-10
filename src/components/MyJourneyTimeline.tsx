"use client";

import React, { useEffect, useRef, useState } from "react";

type Item = {
  icon: string;
  title: string;
  org?: string;
  time: string;
  bullets?: string[];
};

const ITEMS: Item[] = [
  { icon: "🎓", title: "Master in Computer Science", org: "TU Graz", time: "2023 – present" },
  {
    icon: "💼", title: "Internships at ams-OSRAM", time: "2015 – 2022",
    bullets: ["Interface Development (2020)", "Laboratory Equipment Tracking System (2021)", "TestStand Workshop (2022)"],
  },
  { icon: "🎓", title: "Bachelor in Computer Science", org: "TU Graz", time: "2018 – 2023" },
  { icon: "🚑", title: "Civil Service", org: "Red Cross Graz", time: "2017 – 2018" },
  { icon: "📚", title: "HTL Wolfsberg", org: "Automation Engineering", time: "2012 – 2017" },
];

export default function MyJourneyTimeline() {
  /* Layout-Parameter */
  const MOBILE = { railLeft: 14, railW: 64, rowH: 190 }; // rowH = minHeight je Row (Cards dürfen höher sein)
  const DESKTOP = { railW: 96, rowH: 170 };

  /* Reveal-on-scroll (für beide Layouts) */
  const [seen, setSeen] = useState<boolean[]>(() => Array(ITEMS.length).fill(false));
  const rowRefsMobile = useRef<Array<HTMLDivElement | null>>([]);
  const rowRefsDesktop = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        setSeen((prev) => {
          const next = [...prev];
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const idx = Number((e.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) next[idx] = true;
          }
          return next;
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    rowRefsMobile.current.forEach((el) => el && io.observe(el));
    rowRefsDesktop.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ---------- Mobile: Rail exakt zwischen erster & letzter Icon-Mitte messen ---------- */
  const mobileContainerRef = useRef<HTMLDivElement | null>(null);
  const [mobileRail, setMobileRail] = useState<{ top: number; height: number; centers: number[] }>({
    top: 0, height: 0, centers: [],
  });

  useEffect(() => {
    const measure = () => {
      const cont = mobileContainerRef.current;
      if (!cont) return;
      const contTop = cont.getBoundingClientRect().top + window.scrollY;

      const centers: number[] = [];
      rowRefsMobile.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        centers.push(top - contTop + el.offsetHeight / 2); // echte Zeilenmitte relativ zum Container
      });

      if (!centers.length) return;

      const top = centers[0];
      const height = Math.max(0, centers[centers.length - 1] - centers[0]);
      setMobileRail({ top, height, centers });
    };

    // initial + nach Layout-Änderungen messen
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);

    // reagiert auf Card-Höhenänderungen (Bullets etc.)
    const ro = "ResizeObserver" in window ? new ResizeObserver(measure) : null;
    rowRefsMobile.current.forEach((el) => el && ro?.observe(el));

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      ro?.disconnect();
    };
  }, [seen]); // neu messen, wenn Elemente einblenden

  const lastSeen = seen.lastIndexOf(true);

  // Mobile-Progress von 1. bis n-te Mitte
  const progressMobile = mobileRail.centers.length
    ? Math.min(
        lastSeen < 0 ? 0 : mobileRail.centers[lastSeen] - mobileRail.centers[0],
        mobileRail.height
      )
    : 0;

  /* ---------- Desktop: Rail klassisch mit fixer Geometrie ---------- */
  const totalHDesktop = ITEMS.length * DESKTOP.rowH;
  const railTopOffsetDesktop = DESKTOP.rowH / 2;
  const railHeightDesktop = totalHDesktop - DESKTOP.rowH;
  const progressDesktop =
    lastSeen < 0 ? 0 : Math.min((lastSeen + 1) * DESKTOP.rowH - railTopOffsetDesktop, railHeightDesktop);

  const Card = (it: Item, tight = false) => (
    <div className={`relative rounded-2xl ${tight ? "p-3 sm:p-4" : "p-4 md:p-5"} w-full
                     bg-white/5 backdrop-blur-md ring-1 ring-white/10
                     hover:bg-white/[.07] hover:ring-white/20 transition
                     shadow-sm hover:shadow-purple-900/30`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className={`${tight ? "text-base sm:text-lg" : "text-lg md:text-xl"} font-semibold text-purple-100`}>{it.title}</h3>
        <span className={`${tight ? "text-xs sm:text-sm" : "text-sm"} text-purple-300/80 whitespace-nowrap`}>{it.time}</span>
      </div>
      {(it.org || it.bullets?.length) && (
        <div className="mt-1 text-sm text-purple-300/85">
          {it.org && <p className="mb-1">{it.org}</p>}
          {!!it.bullets?.length && (
            <ul className="ml-4 list-disc space-y-1">
              {it.bullets!.map((b, k) => <li key={k}>{b}</li>)}
            </ul>
          )}
        </div>
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent
                   [background:linear-gradient(120deg,rgba(196,161,255,.22),rgba(124,77,255,.22))_border-box]
                   [mask:linear-gradient(#000_0_0)_padding-box,linear-gradient(#000_0_0)] [mask-composite:exclude]" />
    </div>
  );

  return (
    <section className="mt-16 sm:mt-20 w-full max-w-5xl mx-auto px-4 pb-24 sm:pb-28">
      <h2 className="text-3xl sm:text-4xl font-extrabold font-mono mb-6 sm:mb-10
                     bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent">
        my journey
      </h2>

      {/* ================= MOBILE (Rail links, Cards rechts) ================= */}
      <div ref={mobileContainerRef} className="relative block md:hidden">
        {/* Rail (global, exakt zwischen erster & letzter Mitte) */}
        <div
          aria-hidden
          className="pointer-events-none absolute z-0"
          style={{ left: MOBILE.railLeft, width: MOBILE.railW, top: mobileRail.top, height: mobileRail.height }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full rounded-full
                          bg-gradient-to-b from-purple-500/25 via-purple-400/20 to-purple-500/25" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] rounded-full
                          bg-gradient-to-b from-purple-300 to-purple-500
                          shadow-[0_0_18px_rgba(124,77,255,0.6)]
                          transition-[height] duration-700 ease-out"
               style={{ height: progressMobile }} />
          {/* Endkappen bündig */}
          <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 h-[12px] w-[12px] rounded-full bg-purple-400/50" />
          <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 h-[12px] w-[12px] rounded-full bg-purple-400/50" />
        </div>

        {ITEMS.map((it, i) => {
          const isSeen = seen[i];
          const delay = 0.12 + i * 0.08;

          return (
            <div
              key={i}
              data-index={i}
              ref={(el) => { rowRefsMobile.current[i] = el; }}
              className="flex items-center gap-4 mb-9"
              style={{ minHeight: MOBILE.rowH }}
            >
              {/* Linke Spalte: Rail + Icon (Icon exakt auf Row-Mitte) */}
              <div className="relative" style={{ width: MOBILE.railLeft + MOBILE.railW }}>
                <div
                  className="absolute z-10"
                  style={{
                    left: MOBILE.railLeft + MOBILE.railW / 2,
                    top: "50%",
                    transform: isSeen ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(.86)",
                    opacity: isSeen ? 1 : 0,
                    transition: `opacity .5s ${Math.max(0, delay - 0.05)}s ease, transform .5s ${Math.max(0, delay - 0.05)}s ease`,
                  }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full
                                  bg-gradient-to-br from-purple-500 to-purple-700 text-white
                                  ring-2 ring-purple-300/60 shadow-[0_0_18px_rgba(124,77,255,0.45)]">
                    <span className="block text-base leading-none select-none">{it.icon}</span>
                  </div>
                </div>

                {/* kurze, bündige Linie Richtung Card */}
                <div
                  aria-hidden
                  className="absolute z-[1] h-[2px] w-7 rounded-full
                             bg-[linear-gradient(90deg,rgba(196,161,255,0.9),rgba(196,161,255,0.45),rgba(196,161,255,0))]"
                  style={{
                    left: MOBILE.railLeft + MOBILE.railW / 2,
                    top: "50%",
                    transform: "translate(calc(50% + 8px), -50%)",
                    opacity: isSeen ? 1 : 0,
                    transition: `opacity .4s ${delay}s ease`,
                  }}
                />
              </div>

              {/* Rechte Spalte: Card */}
              <div
                className="flex-1 z-[1]"
                style={{
                  opacity: isSeen ? 1 : 0,
                  transform: isSeen ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
                }}
              >
                {Card(it, true)}
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= DESKTOP (Rail mittig, alternierend) ================= */}
      <div className="relative hidden md:block">
        {/* Rail */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0"
          style={{
            width: DESKTOP.railW,
            top: DESKTOP.rowH / 2,
            height: railHeightDesktop,
          }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full rounded-full
                          bg-gradient-to-b from-purple-500/25 via-purple-400/20 to-purple-500/25" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[4px] rounded-full
                          bg-gradient-to-b from-purple-300 to-purple-500
                          shadow-[0_0_18px_rgba(124,77,255,0.6)]
                          transition-[height] duration-700 ease-out"
               style={{ height: progressDesktop }} />
          <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 h-[12px] w-[12px] rounded-full bg-purple-400/50" />
          <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 h-[12px] w-[12px] rounded-full bg-purple-400/50" />
        </div>

        {ITEMS.map((it, i) => {
          const isSeen = seen[i];
          const delay = 0.12 + i * 0.08;
          const leftSide = i % 2 === 0;

          return (
            <div
              key={i}
              data-index={i}
              ref={(el) => { rowRefsDesktop.current[i] = el; }}
              className="grid gap-x-8"
              style={{ height: DESKTOP.rowH, gridTemplateColumns: `1fr ${DESKTOP.railW}px 1fr` }}
            >
              {/* LEFT */}
              <div className="flex items-center justify-end relative">
                {leftSide && (
                  <div
                    className="relative w-[min(92%,34rem)] z-[1]"
                    style={{
                      opacity: isSeen ? 1 : 0,
                      transform: isSeen ? "translateY(0)" : "translateY(12px)",
                      transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 right-[-32px] h-[2px] w-8 rounded-full z-0
                                    bg-[linear-gradient(90deg,rgba(196,161,255,0.9),rgba(196,161,255,0.45),rgba(196,161,255,0))]" />
                    {Card(it)}
                  </div>
                )}
              </div>

              {/* CENTER (Icon) */}
              <div className="relative grid place-items-center">
                <div
                  className="z-10 will-change-[transform,opacity]"
                  style={{
                    opacity: isSeen ? 1 : 0,
                    transform: isSeen ? "scale(1)" : "scale(.86)",
                    transition: `opacity .5s ${Math.max(0, delay - 0.05)}s ease, transform .5s ${Math.max(0, delay - 0.05)}s ease`,
                  }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full
                                  bg-gradient-to-br from-purple-500 to-purple-700 text-white
                                  ring-2 ring-purple-300/60 shadow-[0_0_22px_rgba(124,77,255,0.55)]">
                    <span className="block text-base leading-none select-none">{it.icon}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center justify-start relative">
                {!leftSide && (
                  <div
                    className="relative w-[min(92%,34rem)] z-[1]"
                    style={{
                      opacity: isSeen ? 1 : 0,
                      transform: isSeen ? "translateY(0)" : "translateY(12px)",
                      transition: `opacity .6s ${delay}s ease, transform .6s ${delay}s ease`,
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 left-[-32px] h-[2px] w-8 rounded-full z-0
                                    bg-[linear-gradient(270deg,rgba(196,161,255,0.9),rgba(196,161,255,0.45),rgba(196,161,255,0))]" />
                    {Card(it)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
