"use client";

import React, { ReactNode } from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export default function StatCard({
  value,
  label,
  icon,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`glass-card glow-card-pulse flex flex-col justify-between rounded-3xl p-6 md:p-8 ${className}`}
    >
      <div className="flex items-center justify-between">
        {/* Large Metric Value */}
        <span className="text-3xl font-extrabold tracking-tight text-slate-800 md:text-4xl bg-gradient-to-br from-slate-900 via-slate-800 to-primary-accent bg-clip-text text-transparent">
          {value}
        </span>
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/50 text-slate-400">
            {icon}
          </div>
        )}
      </div>
      
      {/* Label */}
      <span className="mt-4 text-sm font-medium text-slate-500 tracking-wide uppercase">
        {label}
      </span>
      
      {/* Absolute Border Shine */}
      <div className="absolute inset-0 rounded-3xl border border-white/40 pointer-events-none" />
    </div>
  );
}
