import React from "react";

export function AnimatedCounter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const numMatch = value.match(/^([\D]*)(\d[\d,]*)(.*)$/);
  const prefix = numMatch ? numMatch[1] : "";
  const target = numMatch ? parseInt(numMatch[2].replace(/,/g, ""), 10) : 0;
  const suffix = numMatch ? numMatch[3] : "";

  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current || !numMatch) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numMatch]);

  React.useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, inView]);

  if (!numMatch) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
