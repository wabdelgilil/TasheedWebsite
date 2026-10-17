'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'قبل التشطيب',
  afterLabel = 'بعد الإنجاز',
  title,
  subtitle,
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPosition(percent);
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignore if pointer capture already released
    }
  };

  return (
    <div
      ref={containerRef}
      dir="ltr"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`relative rounded-3xl overflow-hidden border-2 border-[#d7a138]/30 shadow-xl bg-slate-900 group select-none touch-none ${className}`}
    >
      {/* Container with aspect ratio */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px]">
        {/* Left Side: After Image (Base unclipped layer) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
          />
          <span
            dir="rtl"
            className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-[#d7a138] border border-[#d7a138]/40 text-xs font-black px-3.5 py-1.5 rounded-xl z-10 shadow-lg pointer-events-none"
          >
            {afterLabel}
          </span>
        </div>

        {/* Right Side: Before Image (Clipped from left by sliderPosition%) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="object-cover brightness-95 contrast-105"
          />
          <span
            dir="rtl"
            className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-amber-200 border border-white/20 text-xs font-black px-3.5 py-1.5 rounded-xl z-10 shadow-lg pointer-events-none"
          >
            {beforeLabel}
          </span>
        </div>

        {/* Divider Line & Circular Interactive Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#d7a138] z-20 pointer-events-none shadow-[0_0_15px_rgba(215,161,56,0.9)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#d7a138] shadow-2xl flex items-center justify-center text-[#d7a138] font-black text-sm transition-transform group-hover:scale-105">
            ⇄
          </div>
        </div>

        {/* Native Range Input for Keyboard Accessibility & Fallback */}
        <input
          type="range"
          dir="ltr"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          aria-label="مقارنة قبل وبعد"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
        />

        {/* Optional Title Badge Overlay (RTL text) */}
        {title && (
          <div
            dir="rtl"
            className="absolute top-4 inset-x-4 flex justify-between items-center pointer-events-none z-10"
          >
            <div className="bg-black/80 backdrop-blur-md border border-[#d7a138]/40 rounded-xl px-4 py-2 text-right shadow-lg">
              <h4 className="text-white font-black text-xs sm:text-sm">{title}</h4>
              {subtitle && <p className="text-[#d7a138] text-[11px] font-medium">{subtitle}</p>}
            </div>
            <span className="text-[11px] text-[#1b2026] bg-gradient-to-r from-[#d7a138] to-[#dbaa4d] font-black px-3 py-1 rounded-lg shadow-sm">
              اسحب للتنقل ⇄
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
