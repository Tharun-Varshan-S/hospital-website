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
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer transition-opacity hover:opacity-90">
          <Image 
            src="/images/full-logo.png" 
            alt="Hearing Home Hospital - Since 1965"
            width={320}
            height={100}
            className="h-10 w-auto md:h-14 lg:h-20 object-contain"
            priority
          />
        </a>

        {/* Minimal Nav Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="relative text-sm font-medium text-slate-600 transition-colors hover-text-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link 
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded bg-teal-800 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-900"
          >
            Contact Us
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
            href="/contact"
            className="inline-flex items-center justify-center rounded bg-teal-800 px-6 py-3 mt-2 text-sm font-medium text-white transition-colors hover:bg-teal-900 w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
