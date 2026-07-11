"use client";

import React from "react";

export default function Navbar() {
  return (
    <header className="glass-nav sticky top-0 z-50 w-full px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-accent to-secondary-accent shadow-md transition-all duration-300 group-hover:scale-105">
            {/* Styled Architectural Medical Cross logo */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5 text-white"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 transition-colors group-hover:text-primary-accent">
            Med<span className="font-light text-slate-500">Crest</span>
          </span>
        </div>

        {/* Minimal Nav Menu Placeholders */}
        <nav className="hidden items-center gap-8 md:flex">
          {["Departments", "Specialists", "Facilities", "Technology", "About Us"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="relative text-sm font-medium text-slate-500 transition-colors hover:text-slate-800"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Placeholder */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hidden text-sm font-semibold text-slate-700 transition-colors hover:text-primary-accent sm:block"
          >
            Emergency Contact
          </a>
          <button className="relative hidden overflow-hidden rounded-full bg-slate-800 px-6 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-slate-900 hover:shadow-md md:block">
            Portal
          </button>
        </div>
      </div>
    </header>
  );
}
