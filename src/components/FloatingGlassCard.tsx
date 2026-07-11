"use client";

import React, { ReactNode } from "react";

interface FloatingGlassCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delayStyle?: string;
}

export default function FloatingGlassCard({
  icon,
  title,
  description,
  className = "",
  delayStyle = "",
}: FloatingGlassCardProps) {
  return (
    <div
      className={`glass-card group flex items-start gap-4 rounded-3xl p-5 shadow-sm transition-all duration-300 hover:shadow-md ${className} ${delayStyle}`}
    >
      {/* Icon Wrapper */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-accent/10 to-secondary-accent/5 text-primary-accent transition-all duration-300 group-hover:scale-110 group-hover:from-primary-accent group-hover:to-secondary-accent group-hover:text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <h4 className="text-sm font-semibold text-slate-800 tracking-tight transition-colors group-hover:text-primary-accent-hover">
          {title}
        </h4>
        <p className="text-xs leading-relaxed text-slate-500 font-light">
          {description}
        </p>
      </div>
      
      {/* Glass Inner Shine Overlay */}
      <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none" />
    </div>
  );
}
