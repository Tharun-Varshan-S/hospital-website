"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/config/links";
import Navbar from "../components/Navbar";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfdfd] selection:bg-teal-900/10 selection:text-teal-900 font-sans text-slate-800">
      
      <Navbar />

      <main className="flex-1">
        
        {/* 1. HERO SECTION */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="flex flex-col items-start gap-8 lg:col-span-5">
              <span className="text-sm font-semibold uppercase tracking-widest text-teal-800">
                Trusted Siddha & Hearing Care
              </span>
              
              <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[4rem]">
                Traditional Care.<br />
                Trusted Experience.<br />
                <span className="text-teal-800">Better Hearing.</span>
              </h1>
              
              <p className="max-w-md text-lg font-light leading-relaxed text-slate-600">
                Experience compassionate, patient-centered healthcare combining the ancient wisdom of Siddha medicine with advanced hearing care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                <a 
                  href={EXTERNAL_LINKS.BOOK_APPOINTMENT} 
                  className="inline-flex items-center justify-center rounded bg-teal-800 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-teal-900"
                >
                  Book an Appointment
                </a>
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center rounded border border-slate-300 bg-transparent px-8 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Learn More About Us
                </Link>
              </div>

              <div className="mt-4 flex items-center gap-3 border-l-2 border-teal-800/20 pl-4">
                <span className="text-sm text-slate-500 font-medium">Serving patients with excellence in Gandhipuram, Coimbatore.</span>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-7 flex justify-end w-full">
              {/* Image Container holding the founder's portrait */}
              <div className="relative w-full max-w-2xl aspect-[4/3] rounded-sm overflow-hidden bg-slate-900 border border-slate-200 shadow-sm flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 to-transparent pointer-events-none z-10 mix-blend-overlay" />
                
                {[1, 2, 3, 4].map((num, idx) => (
                  <img
                    key={num}
                    src={`/images/founders/${num}.jpg`}
                    alt={`Historical founder portrait ${num}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      idx === currentImageIndex 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-105"
                    }`}
                    style={{
                      // Warm, vintage color grading
                      filter: 'contrast(1.15) sepia(0.35) saturate(1.3) brightness(0.95)',
                      transformOrigin: 'center center'
                    }}
                  />
                ))}
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none" />
              </div>
            </div>

          </div>
        </section>

        {/* 2. WHAT ARE WE? */}
        <section className="bg-white border-t border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4 flex flex-col items-start">
                <span className="text-sm font-semibold uppercase tracking-widest text-teal-800 mb-4">What Are We?</span>
                <h2 className="text-3xl font-bold leading-tight text-slate-900">
                  A dedicated institution for holistic healing and auditory wellness.
                </h2>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-6 text-lg font-light leading-relaxed text-slate-600">
                <p>
                  Hearing Home hospital is a specialized healthcare facility deeply rooted in the traditional wisdom of Siddha medicine, combined with modern, comprehensive hearing care.
                </p>
                <p>
                  We believe that true healing addresses the root cause of ailments rather than just the symptoms. By offering natural remedies alongside targeted audiological therapies, we provide a balanced, patient-first approach to wellness that has earned the trust of our community in Coimbatore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ABOUT US */}
        <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            {/* Image Block */}
            <div className="order-2 lg:order-1 relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none bg-slate-100 rounded-sm flex items-center justify-center border border-slate-200">
              <span className="text-sm font-medium text-slate-400">Hospital / Facility Image Placeholder</span>
            </div>
            
            {/* Text Block */}
            <div className="order-1 lg:order-2 flex flex-col items-start gap-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Us</h2>
              <div className="flex flex-col gap-6 text-base font-light leading-relaxed text-slate-600">
                <p>
                  Established with a vision to make profound, natural healing accessible, our hospital bridges the gap between ancient therapeutic practices and dedicated specialist care.
                </p>
                <p>
                  Under the guidance of our experienced practitioners, we emphasize a philosophy of care that treats the individual as a whole. From meticulous Siddha formulations to precise hearing assessments and speech therapies, our priority is your long-term health and comfort.
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-800" />
                    <span>Patient-first holistic philosophy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-800" />
                    <span>Rooted in traditional Siddha practices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-800" />
                    <span>Dedicated expertise in audiology</span>
                  </li>
                </ul>
              </div>
              <Link href="/about" className="text-teal-800 font-semibold text-sm hover:underline underline-offset-4 mt-4 inline-flex items-center gap-1">
                Read our full story
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE US / TRUST */}
        <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Choose Us</h2>
              <p className="text-lg font-light leading-relaxed text-slate-600">
                We are committed to providing care that is rooted in tradition yet delivered with the utmost professionalism. Our patients trust us for our integrity, deep knowledge, and personal attention.
              </p>
            </div>
            
            <div className="flex flex-col gap-10 lg:pl-12 lg:border-l border-slate-200">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-900">Experienced Care</h4>
                <p className="text-sm font-light leading-relaxed text-slate-600">Years of dedicated practice in Siddha medicine and audiology, ensuring you receive informed and effective treatment.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-900">Patient-Centered Approach</h4>
                <p className="text-sm font-light leading-relaxed text-slate-600">Every treatment plan is tailored to the individual, respecting their unique health history and personal comfort.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-900">Convenient Location</h4>
                <p className="text-sm font-light leading-relaxed text-slate-600">Easily accessible in the heart of Gandhipuram, Coimbatore, making regular visits and consultations straightforward.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PATIENT FEEDBACK (Dynamic Running Testimonial Slider) */}
        <TestimonialSection />

        {/* 7. GALLERY PREVIEW */}
        <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-32">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Facility</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Masonry-style simple grid placeholders */}
            <div className="col-span-2 row-span-2 bg-slate-100 border border-slate-200 rounded-sm flex items-center justify-center text-sm font-medium text-slate-400">
              Image Placeholder 1
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-sm flex items-center justify-center text-sm font-medium text-slate-400">
              Image Placeholder 2
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-sm flex items-center justify-center text-sm font-medium text-slate-400">
              Image Placeholder 3
            </div>
            <div className="col-span-2 bg-slate-100 border border-slate-200 rounded-sm flex items-center justify-center text-sm font-medium text-slate-400">
              Image Placeholder 4
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/gallery" className="text-sm font-medium text-slate-700 hover:text-slate-900 border-b border-slate-300 pb-1 hover:border-slate-900 transition-colors">
              View Full Gallery
            </Link>
          </div>
        </section>

        {/* 8. CONTACT / LOCATION CTA */}
        <section className="bg-slate-50 border-t border-b border-slate-100 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Looking for trusted hearing and Siddha care?
            </h2>
            <p className="text-lg font-light text-slate-600">
              Speak with our team or schedule a visit to our Gandhipuram facility today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <a 
                href={EXTERNAL_LINKS.BOOK_APPOINTMENT}
                className="inline-flex items-center justify-center rounded bg-teal-800 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-teal-900"
              >
                Book Appointment
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-8 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* 9. PROFESSIONAL FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Logo & Desc */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight tracking-tight text-white">
                  Hearing Home
                </span>
                <span className="text-[11px] font-medium tracking-wide text-teal-500 uppercase">
                  hospital
                </span>
              </div>
              <p className="text-sm font-light leading-relaxed text-slate-400 pr-4">
                Dedicated to holistic wellness, bringing you the ancient wisdom of Siddha medicine and modern hearing care in Coimbatore.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
              <nav className="flex flex-col gap-3 text-sm font-light">
                <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link>
                <Link href="/gallery" className="hover:text-teal-400 transition-colors">Gallery</Link>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Column 3: Care Areas */}
            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Our Specialties</h4>
              <div className="flex flex-col gap-3 text-sm font-light text-slate-400">
                <span>Siddha Medicine</span>
                <span>Hearing & Audiology</span>
                <span>Ear & Speech Care</span>
                <span>Holistic Wellness</span>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
              <div className="flex flex-col gap-4 text-sm font-light text-slate-400">
                <p>
                  <strong className="text-white block font-medium mb-1">Address</strong>
                  Gandhipuram, Coimbatore,<br />
                  Tamil Nadu, India
                </p>
                <p>
                  <strong className="text-white block font-medium mb-1">Operating Hours</strong>
                  Mon - Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-500">
            <span>© {new Date().getFullYear()} HearingHome. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
