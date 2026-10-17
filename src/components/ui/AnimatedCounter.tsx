'use client';

import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number; // duration in seconds
  prefix?: string;
  suffix?: string;
  formatCommas?: boolean;
  className?: string;
}

export default function AnimatedCounter({
  target,
  duration = 2,
  prefix = '',
  suffix = '',
  formatCommas = false,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check if IntersectionObserver is available (e.g. browser vs jsdom)
    if (typeof IntersectionObserver !== 'undefined' && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
      return () => observer.disconnect();
    } else {
      // Fallback for environments without IntersectionObserver (like jsdom)
      setHasStarted(true);
    }
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [hasStarted, target, duration]);

  const displayValue = formatCommas ? count.toLocaleString('en-US') : count;

  return (
    <span
      ref={elementRef}
      data-testid="animated-counter"
      className={`tabular-nums font-bold ${className}`}
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
