'use client';

import React, { useState } from 'react';
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

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden border-2 border-[#d7a138]/30 shadow-xl bg-slate-900 group select-none ${className}`}>
      {/* Container with aspect ratio */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px]">
        {/* After Image (Background / Full) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-[#d7a138] border border-[#d7a138]/40 text-xs font-bold px-3 py-1.5 rounded-lg z-10 shadow-lg pointer-events-none">
            {afterLabel}
          </span>
        </div>

        {/* Before Image (Foreground with Clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="object-cover brightness-95 contrast-105"
          />
          <span className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-amber-200 border border-white/20 text-xs font-bold px-3 py-1.5 rounded-lg z-10 shadow-lg pointer-events-none">
            {beforeLabel}
          </span>
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#d7a138] z-20 pointer-events-none shadow-[0_0_12px_rgba(215,161,56,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#d7a138] shadow-xl flex items-center justify-center text-[#d7a138] font-black text-xs">
            ⇄
          </div>
        </div>

        {/* Native Range Input for Interaction & Accessibility */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          aria-label="مقارنة قبل وبعد"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
        />

        {/* Optional Title Badge Overlay */}
        {title && (
          <div className="absolute top-4 inset-x-4 flex justify-between items-center pointer-events-none z-10">
            <div className="bg-black/80 backdrop-blur-md border border-[#d7a138]/40 rounded-xl px-4 py-2 text-right shadow-lg">
              <h4 className="text-white font-black text-xs sm:text-sm">{title}</h4>
              {subtitle && <p className="text-[#d7a138] text-[11px] font-medium">{subtitle}</p>}
            </div>
            <span className="text-[11px] text-white/90 bg-[#d7a138]/90 font-bold px-2.5 py-1 rounded-md shadow-sm">
              اسحب للتنقل ⇄
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
