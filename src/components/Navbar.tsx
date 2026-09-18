"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EXTERNAL_LINKS } from "@/config/links";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 transition-all">
      <div className="w-full flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer transition-opacity hover:opacity-90 shrink-0">
          <img 
            src="/images/full-logo.png" 
            alt="Hearing Home Hospital - Since 1965"
            className="h-12 md:h-16 lg:h-[72px] object-contain"
          />
        </a>

        {/* Minimal Nav Menu */}
        <nav className="hidden items-center gap-8 lg:flex absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className={`relative text-sm font-semibold transition-colors uppercase tracking-wide ${
                item.label === "Home" 
                  ? "text-teal-700 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-teal-700" 
                  : "text-slate-600 hover:text-teal-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          <Link 
            href={EXTERNAL_LINKS.BOOK_APPOINTMENT}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded bg-teal-800 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-teal-900"
          >
            BOOK APPOINTMENT &rarr;
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-slate-900 p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 py-4 px-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="text-base font-medium text-slate-700 transition-colors py-2 hover-text-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href={EXTERNAL_LINKS.BOOK_APPOINTMENT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded bg-teal-800 px-6 py-3 mt-2 text-sm font-medium text-white transition-colors hover:bg-teal-900 w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BOOK APPOINTMENT &rarr;
          </Link>
        </nav>
      )}
    </header>
  );
}
