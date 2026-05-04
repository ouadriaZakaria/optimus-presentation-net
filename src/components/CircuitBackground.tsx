import { useEffect, useRef } from "react";

const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let dots: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; pulse: number }[] = [];
    let circuitLines: { x: number; y: number }[][] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initDots = () => {
      dots = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const initCircuitLines = () => {
      circuitLines = Array.from({ length: 15 }, () => {
        const points: { x: number; y: number }[] = [];
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        points.push({ x, y });
        for (let j = 0; j < 5; j++) {
          if (Math.random() > 0.5) {
            x += (Math.random() - 0.5) * 200;
          } else {
            y += (Math.random() - 0.5) * 200;
          }
          points.push({ x, y });
        }
        return points;
      });
    };

    const drawCircuitLines = () => {
      ctx.strokeStyle = "rgba(30, 144, 220, 0.06)";
      ctx.lineWidth = 1;
      for (const line of circuitLines) {
        ctx.beginPath();
        ctx.moveTo(line[0].x, line[0].y);
        for (let i = 1; i < line.length; i++) {
          ctx.lineTo(line[i].x, line[i].y);
        }
        ctx.stroke();
      }
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawCircuitLines();

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        dot.pulse += 0.02;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        const glowAlpha = dot.alpha * (0.5 + 0.5 * Math.sin(dot.pulse));

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 180, 255, ${glowAlpha * 0.3})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 180, 255, ${glowAlpha})`;
        ctx.fill();
      });

      // Draw connections
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(30, 180, 255, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    initDots();
    initCircuitLines();
    animate(0);

    window.addEventListener("resize", () => {
      resize();
      initDots();
      initCircuitLines();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default CircuitBackground;
