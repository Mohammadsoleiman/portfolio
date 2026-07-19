import { AnimatePresence, motion as Motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const LABELS = [
  "</>",
  "<div>",
  "<h1>",
  "<h2>",
  "{}",
  "JS",
  "TS",
  "PHP",
  "CSS",
  "C#",
  "API",
];

/** Tight edge clusters that stay clear of title, profile, and CTAs. */
const DESKTOP_SPOTS = [
  { x: 2, y: 18 },
  { x: 5, y: 21 },
  { x: 8, y: 24 },
  { x: 4, y: 28 },
  { x: 92, y: 17 },
  { x: 95, y: 21 },
  { x: 92, y: 25 },
  { x: 96, y: 29 },
  { x: 3, y: 72 },
  { x: 7, y: 76 },
  { x: 91, y: 72 },
  { x: 95, y: 77 },
];

const MOBILE_SPOTS = [
  { x: 5, y: 12 },
  { x: 10, y: 17 },
  { x: 91, y: 62 },
  { x: 94, y: 68 },
  { x: 5, y: 74 },
  { x: 10, y: 79 },
];

const VARIANTS = [
  { size: 44, blur: 0, opacity: 0.96, depth: 1, duration: 16, delay: 0 },
  { size: 36, blur: 0, opacity: 0.94, depth: 2, duration: 19, delay: 1.2 },
  { size: 30, blur: 0, opacity: 0.92, depth: 3, duration: 22, delay: 0.6 },
  { size: 40, blur: 0, opacity: 0.95, depth: 1, duration: 17, delay: 2.1 },
  { size: 28, blur: 0, opacity: 0.92, depth: 3, duration: 24, delay: 1.5 },
  { size: 34, blur: 0, opacity: 0.94, depth: 2, duration: 20, delay: 0.3 },
  { size: 46, blur: 0, opacity: 0.96, depth: 1, duration: 15, delay: 2.8 },
  { size: 32, blur: 0, opacity: 0.93, depth: 3, duration: 26, delay: 1.8 },
];

const DESKTOP_COUNT = 8;
const MOBILE_COUNT = 4;
const REAPPEAR_MS = [1000, 1250, 1500, 1750];
const PROXIMITY = 110;

function useMediaFlags() {
  const [flags, setFlags] = useState({
    mobile: false,
    reducedMotion: false,
  });

  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 768px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setFlags({
        mobile: mobileMq.matches,
        reducedMotion: motionMq.matches,
      });
    };

    sync();
    mobileMq.addEventListener("change", sync);
    motionMq.addEventListener("change", sync);
    return () => {
      mobileMq.removeEventListener("change", sync);
      motionMq.removeEventListener("change", sync);
    };
  }, []);

  return flags;
}

function pickSpot(spots, usedIndexes, preferAvoid = -1) {
  const available = spots
    .map((_, i) => i)
    .filter((i) => !usedIndexes.has(i) && i !== preferAvoid);

  if (available.length === 0) {
    const fallback = spots
      .map((_, i) => i)
      .filter((i) => i !== preferAvoid);
    return fallback[Math.floor(Math.random() * fallback.length)] ?? 0;
  }

  return available[Math.floor(Math.random() * available.length)];
}

function createBubbles(count, spots) {
  const used = new Set();
  return Array.from({ length: count }, (_, i) => {
    const spotIndex = pickSpot(spots, used);
    used.add(spotIndex);
    const variant = VARIANTS[i % VARIANTS.length];
    return {
      id: `bubble-${i}-${LABELS[i % LABELS.length]}`,
      label: LABELS[i % LABELS.length],
      spotIndex,
      ...variant,
      xDrift: 6 + (i % 4) * 2,
      yDrift: 8 + (i % 3) * 3,
      popped: false,
    };
  });
}

function getInitialBubbles() {
  if (typeof window === "undefined") {
    return createBubbles(DESKTOP_COUNT, DESKTOP_SPOTS);
  }
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return createBubbles(
    isMobile ? MOBILE_COUNT : DESKTOP_COUNT,
    isMobile ? MOBILE_SPOTS : DESKTOP_SPOTS
  );
}

export default function TechBubbles() {
  const { mobile, reducedMotion } = useMediaFlags();
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(0);
  const bubbleEls = useRef(new Map());
  const timersRef = useRef(new Map());

  const count = mobile ? MOBILE_COUNT : DESKTOP_COUNT;
  const spots = useMemo(
    () => (mobile ? MOBILE_SPOTS : DESKTOP_SPOTS),
    [mobile]
  );

  const [bubbles, setBubbles] = useState(getInitialBubbles);
  const skipNextReset = useRef(true);

  useEffect(() => {
    if (skipNextReset.current) {
      skipNextReset.current = false;
      return;
    }
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current.clear();
    setBubbles(createBubbles(count, spots));
  }, [count, spots]);

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((t) => clearTimeout(t));
      timers.clear();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const updateRepulsion = useCallback(() => {
    if (reducedMotion || mobile) return;

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    bubbleEls.current.forEach((el) => {
      if (!el || el.dataset.popped === "true") return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - mx;
      const dy = cy - my;
      const dist = Math.hypot(dx, dy);

      if (dist < PROXIMITY && dist > 0) {
        const force = (1 - dist / PROXIMITY) * 14;
        const nx = (dx / dist) * force;
        const ny = (dy / dist) * force;
        el.style.setProperty("--repel-x", `${nx.toFixed(2)}px`);
        el.style.setProperty("--repel-y", `${ny.toFixed(2)}px`);
      } else {
        el.style.setProperty("--repel-x", "0px");
        el.style.setProperty("--repel-y", "0px");
      }
    });
  }, [mobile, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || mobile) return undefined;

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateRepulsion);
    };

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      bubbleEls.current.forEach((el) => {
        if (!el) return;
        el.style.setProperty("--repel-x", "0px");
        el.style.setProperty("--repel-y", "0px");
      });
    };

    const node = containerRef.current;
    const parent = node?.parentElement;
    parent?.addEventListener("mousemove", onMove, { passive: true });
    parent?.addEventListener("mouseleave", onLeave);

    return () => {
      parent?.removeEventListener("mousemove", onMove);
      parent?.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mobile, reducedMotion, updateRepulsion]);

  const handlePop = useCallback(
    (id) => {
      setBubbles((prev) => {
        const target = prev.find((b) => b.id === id);
        if (!target || target.popped) return prev;

        const used = new Set(
          prev.filter((b) => !b.popped && b.id !== id).map((b) => b.spotIndex)
        );

        const nextSpot = pickSpot(spots, used, target.spotIndex);
        const delay =
          REAPPEAR_MS[Math.floor(Math.random() * REAPPEAR_MS.length)];

        if (timersRef.current.has(id)) {
          clearTimeout(timersRef.current.get(id));
        }

        const timer = setTimeout(() => {
          setBubbles((current) =>
            current.map((b) =>
              b.id === id
                ? {
                    ...b,
                    popped: false,
                    spotIndex: nextSpot,
                    label: LABELS[Math.floor(Math.random() * LABELS.length)],
                  }
                : b
            )
          );
          timersRef.current.delete(id);
        }, delay);

        timersRef.current.set(id, timer);

        return prev.map((b) =>
          b.id === id ? { ...b, popped: true } : b
        );
      });
    },
    [spots]
  );

  const setBubbleRef = useCallback((id, node) => {
    if (node) bubbleEls.current.set(id, node);
    else bubbleEls.current.delete(id);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`tech-bubbles${mobile ? " is-mobile" : ""}${
        reducedMotion ? " is-reduced-motion" : ""
      }`}
      aria-hidden="true"
    >
      <AnimatePresence>
        {bubbles.map((bubble) => {
          const spot = spots[bubble.spotIndex] ?? spots[0];

          return (
            <Motion.button
              key={bubble.id}
              type="button"
              className={`tech-bubble depth-${bubble.depth}${bubble.popped ? " is-popping" : ""}`}
              ref={(node) => setBubbleRef(bubble.id, node)}
              data-popped={bubble.popped}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                "--bubble-size": `${mobile ? Math.round(bubble.size * 0.85) : bubble.size}px`,
                "--bubble-blur": `${bubble.blur}px`,
                "--bubble-opacity": bubble.opacity,
                "--float-duration": `${bubble.duration}s`,
                "--float-delay": `${bubble.delay}s`,
                "--x-drift": `${bubble.xDrift}px`,
                "--y-drift": `${bubble.yDrift}px`,
              }}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={
                bubble.popped
                  ? { scale: [1, 1.22, 0], opacity: [1, 0.9, 0] }
                  : { scale: 1, opacity: 1 }
              }
              transition={{
                duration: reducedMotion ? 0.01 : bubble.popped ? 0.3 : 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reducedMotion ? undefined : { scale: 1.06 }
              }
              whileTap={
                reducedMotion ? undefined : { scale: 0.92 }
              }
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePop(bubble.id);
              }}
              tabIndex={-1}
            >
              <span className="tech-bubble-inner">
                <span className="tech-bubble-label">{bubble.label}</span>
              </span>
              <span className="tech-bubble-pop-ring" />
              {Array.from({ length: 6 }, (_, index) => (
                <span key={index} className={`tech-bubble-particle particle-${index + 1}`} />
              ))}
            </Motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
