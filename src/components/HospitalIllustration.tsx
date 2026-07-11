"use client";

import React from "react";

export default function HospitalIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-4">
      {/* Glow shadow behind the building */}
      <div className="absolute top-[20%] left-[20%] h-[60%] w-[60%] rounded-full bg-gradient-to-br from-primary-accent/15 via-purple-500/10 to-transparent blur-3xl" />

      {/* SVG Container holding the isometric premium building */}
      <svg
        viewBox="0 0 500 500"
        className="w-full max-w-[480px] h-auto drop-shadow-[0_20px_50px_rgba(13,148,136,0.06)] animate-float-slow"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glass Gradients */}
          <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.75)" />
            <stop offset="100%" stopColor="rgba(238, 242, 247, 0.45)" />
          </linearGradient>
          
          <linearGradient id="wallLeftGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.55)" />
            <stop offset="100%" stopColor="rgba(203, 213, 225, 0.25)" />
          </linearGradient>

          <linearGradient id="wallRightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(241, 245, 249, 0.45)" />
            <stop offset="100%" stopColor="rgba(148, 163, 184, 0.2)" />
          </linearGradient>

          <linearGradient id="accentWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(13, 148, 136, 0.65)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.35)" />
          </linearGradient>

          <linearGradient id="accentWallShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(15, 118, 110, 0.55)" />
            <stop offset="100%" stopColor="rgba(6, 95, 70, 0.25)" />
          </linearGradient>

          <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(15, 23, 42, 0.05)" />
            <stop offset="100%" stopColor="rgba(15, 23, 42, 0.0)" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <filter id="soft-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Ground Shadow (Isometric Rhombus) */}
        <polygon
          points="250,450 420,365 250,280 80,365"
          fill="url(#shadowGrad)"
        />

        {/* Ground grid circle */}
        <ellipse
          cx="250"
          cy="365"
          rx="180"
          ry="90"
          stroke="rgba(13, 148, 136, 0.08)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        
        <ellipse
          cx="250"
          cy="365"
          rx="150"
          ry="75"
          stroke="rgba(13, 148, 136, 0.12)"
          strokeWidth="1"
        />

        {/* 2. BASE PAVILION (Modern low-rise reception) */}
        {/* Left Wall Base */}
        <polygon
          points="130,340 250,400 250,310 130,250"
          fill="url(#wallLeftGrad)"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="1"
        />
        {/* Right Wall Base */}
        <polygon
          points="250,400 370,340 370,250 250,310"
          fill="url(#wallRightGrad)"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1"
        />
        {/* Roof Base */}
        <polygon
          points="130,250 250,310 370,250 250,190"
          fill="url(#roofGrad)"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="1"
        />

        {/* Base Entrance glass canopy */}
        <polygon
          points="210,380 250,400 290,380 250,360"
          fill="rgba(13, 148, 136, 0.25)"
          stroke="rgba(13, 148, 136, 0.6)"
          strokeWidth="1"
        />
        {/* Canopy columns */}
        <line x1="210" y1="380" x2="210" y2="395" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="1.5" />
        <line x1="290" y1="380" x2="290" y2="395" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="1.5" />
        <line x1="250" y1="400" x2="250" y2="415" stroke="rgba(13, 148, 136, 0.4)" strokeWidth="1.5" />

        {/* 3. ACCENT CORE (Green/Teal center column that glows) */}
        {/* Left Wall Core */}
        <polygon
          points="220,295 250,310 250,120 220,105"
          fill="url(#accentWallGrad)"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="0.5"
        />
        {/* Right Wall Core */}
        <polygon
          points="250,310 280,295 280,105 250,120"
          fill="url(#accentWallShadowGrad)"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="0.5"
        />
        {/* Top Core */}
        <polygon
          points="220,105 250,120 280,105 250,90"
          fill="rgba(16, 185, 129, 0.5)"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="0.5"
        />

        {/* 4. MAIN TOWER (Taller block sitting on top of the left) */}
        {/* Left Wall Main */}
        <polygon
          points="150,225 220,260 220,105 150,70"
          fill="url(#wallLeftGrad)"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="1"
        />
        {/* Roof Main */}
        <polygon
          points="150,70 220,105 250,90 180,55"
          fill="url(#roofGrad)"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="1"
        />

        {/* 5. EAST WING (Taller block on the right) */}
        {/* Right Wall East */}
        <polygon
          points="280,105 350,70 350,225 280,260"
          fill="url(#wallRightGrad)"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1"
        />
        {/* Roof East */}
        <polygon
          points="250,90 320,55 350,70 280,105"
          fill="url(#roofGrad)"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="1"
        />

        {/* 6. GLOWING MEDICAL CROSS (Centerpiece Symbol) */}
        {/* We place the cross on the accent column, projecting in 3D */}
        <g filter="url(#glow)" className="opacity-95">
          {/* Vertical bar */}
          <polygon
            points="247,150 253,153 253,185 247,182"
            fill="#10B981"
          />
          {/* Horizontal bar */}
          <polygon
            points="237,162 263,175 263,169 237,156"
            fill="#10B981"
          />
          {/* Glowing front face highlighting */}
          <path
            d="M250,158 L250,177 M242,165 L258,173"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* 7. ANIMATED WINDOW LIGHTS (Cyan/Emerald window blocks) */}
        {/* Left Wing Windows */}
        <g fill="#0D9488" className="opacity-80">
          {/* Row 1 */}
          <polygon points="165,190 175,195 175,202 165,197" className="animate-pulse" />
          <polygon points="180,197.5 190,202.5 190,209.5 180,204.5" className="animate-pulse [animation-delay:1.5s]" />
          <polygon points="195,205 205,210 205,217 195,212" className="animate-pulse [animation-delay:0.5s]" />

          {/* Row 2 */}
          <polygon points="165,160 175,165 175,172 165,167" className="animate-pulse [animation-delay:2s]" />
          <polygon points="180,167.5 190,172.5 190,179.5 180,174.5" className="animate-pulse [animation-delay:0.8s]" />
          <polygon points="195,175 205,180 205,187 195,182" className="animate-pulse [animation-delay:1.2s]" />
          
          {/* Row 3 */}
          <polygon points="165,130 175,135 175,142 165,137" className="animate-pulse [animation-delay:1s]" />
          <polygon points="180,137.5 190,142.5 190,149.5 180,144.5" className="animate-pulse [animation-delay:2.5s]" />
          <polygon points="195,145 205,150 205,157 195,152" className="animate-pulse [animation-delay:1.8s]" />
        </g>

        {/* Right Wing Windows */}
        <g fill="#10B981" className="opacity-70">
          {/* Row 1 */}
          <polygon points="335,190 325,195 325,202 335,197" className="animate-pulse [animation-delay:0.3s]" />
          <polygon points="320,197.5 310,202.5 310,209.5 320,204.5" className="animate-pulse [animation-delay:1.6s]" />
          <polygon points="305,205 295,210 295,217 305,212" className="animate-pulse [animation-delay:2.2s]" />

          {/* Row 2 */}
          <polygon points="335,160 325,165 325,172 335,167" className="animate-pulse [animation-delay:1.1s]" />
          <polygon points="320,167.5 310,172.5 310,179.5 320,174.5" className="animate-pulse [animation-delay:2.4s]" />
          <polygon points="305,175 295,180 295,187 305,182" className="animate-pulse [animation-delay:0.7s]" />

          {/* Row 3 */}
          <polygon points="335,130 325,135 325,142 335,137" className="animate-pulse [animation-delay:1.9s]" />
          <polygon points="320,137.5 310,142.5 310,149.5 320,144.5" className="animate-pulse [animation-delay:0.5s]" />
          <polygon points="305,145 295,150 295,157 305,152" className="animate-pulse [animation-delay:1.3s]" />
        </g>

        {/* 8. FLOATING HELIPAD OR SYSTEM NODES ABOVE BUILDING */}
        {/* Thin vertical dashed lines */}
        <line x1="250" y1="90" x2="250" y2="40" stroke="rgba(13, 148, 136, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="180" y1="55" x2="180" y2="15" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="320" y1="55" x2="320" y2="15" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Floating Ring at the top core */}
        <g filter="url(#glow)">
          <circle cx="250" cy="40" r="8" fill="rgba(13, 148, 136, 0.2)" stroke="#0D9488" strokeWidth="1.5" className="animate-pulse" />
          <circle cx="250" cy="40" r="3" fill="#10B981" />
        </g>

        {/* Left Floating Node */}
        <g filter="url(#glow)">
          <circle cx="180" cy="15" r="6" fill="rgba(168, 85, 247, 0.2)" stroke="#A855F7" strokeWidth="1" />
          <circle cx="180" cy="15" r="2" fill="#A855F7" />
        </g>

        {/* Right Floating Node */}
        <g filter="url(#glow)">
          <circle cx="320" cy="15" r="6" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="1" />
          <circle cx="320" cy="15" r="2" fill="#3B82F6" />
        </g>
      </svg>
    </div>
  );
}
