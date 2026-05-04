import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CircuitBackground from "./CircuitBackground";

interface SlideProps {
  children: React.ReactNode;
  totalSlides: number;
}

const SlidePresentation = ({ children, totalSlides }: SlideProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((p) => Math.max(0, Math.min(totalSlides - 1, p + dir)));
    },
    [totalSlides]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const slides = Array.isArray(children) ? children.flat(Infinity) : [children];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      <CircuitBackground />

      {/* Scan line */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <div className="w-full h-px bg-primary/10 animate-scan-line" />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      {/* Slide counter */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 font-mono text-xs tracking-[0.3em] text-primary/50 uppercase">
        Slide {current + 1}/{totalSlides}
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[2px] z-30 bg-muted">
        <motion.div
          className="h-full bg-primary box-glow"
          animate={{ width: `${((current + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Nav arrows */}
      {current > 0 && (
        <button
          onClick={() => go(-1)}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-primary/20 bg-background/60 backdrop-blur-sm text-primary/60 hover:text-primary hover:border-primary/50 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {current < totalSlides - 1 && (
        <button
          onClick={() => go(1)}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-primary/20 bg-background/60 backdrop-blur-sm text-primary/60 hover:text-primary hover:border-primary/50 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default SlidePresentation;
