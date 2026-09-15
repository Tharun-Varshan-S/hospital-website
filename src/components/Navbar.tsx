"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EXTERNAL_LINKS } from "@/config/links";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 px-6 py-5 md:px-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer transition-opacity hover:opacity-90">
          <Image 
            src="/images/full-logo.png" 
            alt="Hearing Home Hospital - Since 1965"
            width={320}
            height={100}
            className="h-14 w-auto md:h-20 object-contain"
            priority
          />
        </a>

        {/* Minimal Nav Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about" },
            { label: "Gallery", path: "/gallery" },
            { label: "Contact Us", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="relative text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-6">
          <a 
            href={EXTERNAL_LINKS.BOOK_APPOINTMENT}
            className="hidden md:inline-flex items-center justify-center rounded bg-primary-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700"
          >
            Book Appointment
          </a>
          
          {/* Mobile menu button (visual only for now) */}
          <button className="lg:hidden text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
