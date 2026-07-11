"use client";

import React, { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 1. Large Glow Blobs (using CSS variables in globals.css) */}
      <div className="glow-blob glow-teal-blob absolute top-[10%] -left-[10%] h-[500px] w-[500px] md:h-[700px] md:w-[700px]" />
      <div className="glow-blob glow-purple-blob absolute top-[25%] -right-[10%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] [animation-delay:2s]" />
      <div className="glow-blob glow-blue-blob absolute bottom-[10%] left-[15%] h-[500px] w-[500px] md:h-[700px] md:w-[700px] [animation-delay:4s]" />
      <div className="glow-blob glow-emerald-blob absolute bottom-[20%] right-[5%] h-[350px] w-[350px] md:h-[500px] md:w-[500px] [animation-delay:1s]" />

      {/* 2. Abstract SVG Curved Connection Lines (Linear/Stripe style) */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200/40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(13, 148, 136, 0.05)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.15)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
          </linearGradient>
        </defs>
        
        {/* Curving grid lines or connection paths */}
        <path
          d="M-100,200 C300,100 600,400 1200,250 C1600,150 1800,500 2100,400"
          stroke="url(#line-grad-1)"
          strokeWidth="1.5"
        />
        <path
          d="M-50,600 C400,750 800,500 1300,700 C1800,850 1900,600 2200,650"
          stroke="url(#line-grad-1)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <path
          d="M300,-100 C500,300 200,600 600,1000 C800,1200 1100,1400 1300,1700"
          stroke="url(#line-grad-1)"
          strokeWidth="1"
        />
      </svg>

      {/* 3. Floating Medical-themed Particles */}
      <div className="absolute inset-0">
        {/* Floating cross 1 */}
        <div className="absolute top-[20%] left-[10%] text-slate-300/40 animate-float">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>

        {/* Floating cross 2 */}
        <div className="absolute top-[70%] left-[80%] text-teal-500/10 animate-float-delayed">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>

        {/* Floating cross 3 */}
        <div className="absolute top-[45%] left-[45%] text-purple-500/10 animate-float">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>

        {/* Dot pattern grids (Stripe/Linear style) */}
        <div className="absolute top-[15%] right-[15%] h-[120px] w-[120px] text-slate-200/60 opacity-60">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>

        <div className="absolute bottom-[20%] left-[8%] h-[160px] w-[160px] text-slate-200/60 opacity-40">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles-2)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
