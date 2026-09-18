"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
import FadeInOnScroll from "../components/FadeInOnScroll";
import { gallery } from "@/data/gallery";

const HERO_IMAGES = [
  { src: "/images/founders/1.jpg", alt: "Historical founder portrait 1" },
  { src: "/images/founders/2.jpg", alt: "Historical founder portrait 2" },
  { src: "/images/founders/3.jpg", alt: "Historical founder portrait 3" },
  { src: "/images/founders/4.jpg", alt: "Historical founder portrait 4" },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 15;
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfdfd] font-sans text-slate-800">
      <Navbar />

      <main className="flex-1">

        {/* ─────────────────────────────────────────────
            1. HERO SECTION
        ───────────────────────────────────────────── */}
        <section className="relative w-full bg-gradient-to-b from-[#f2f9fd] to-[#e6f4fd] lg:bg-gradient-to-r lg:from-[#e6f4fd] lg:to-[#eef8fe] min-h-[100vh] lg:h-screen flex items-center overflow-hidden">
          
          {/* ── BACKGROUND ARTWORK & SMART MASKING ── */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            
            {/* 2b. Thin, subtle curved swirl-line decorations flowing horizontally through the middle background area */}
            <svg 
              className="absolute top-[40%] left-0 w-full h-auto opacity-[0.04] text-[#0f213b]"
              viewBox="0 0 1200 200" fill="none" stroke="currentColor" strokeWidth="0.75"
            >
              <path d="M-100,100 C 200,-50 400,250 800,50 S 1100,150 1300,100" />
              <path d="M-100,120 C 200,-30 400,270 800,70 S 1100,170 1300,120" />
              <path d="M-100,80 C 200,-70 400,230 800,30 S 1100,130 1300,80" />
            </svg>

            {/* 3. Ear outline watermark on right edge (Reduced stroke weight to match reference) */}
            <svg 
              className="absolute top-[10%] right-[-5%] w-[800px] h-[800px] opacity-[0.025] text-[#066763]"
              viewBox="0 0 200 250" fill="none" stroke="currentColor" strokeWidth="0.4"
            >
              <path d="M120,20 C180,40 200,100 170,160 C150,200 110,230 80,220 C60,210 50,180 70,160 C90,140 130,150 140,110 C150,70 120,40 100,50 C80,60 70,100 90,120" />
            </svg>

            <img 
              src="/images/hero-screenshot.png"
              alt="Medical Artwork"
              className="hidden lg:block absolute max-w-none w-full h-auto min-w-[1200px]"
              style={{
                right: '0',
                top: '-95px', // Shift up specifically to hide the baked-in duplicate navbar header
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 45%, black 65%, black 100%), linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
                maskImage: 'linear-gradient(to right, transparent 0%, transparent 45%, black 65%, black 100%), linear-gradient(to bottom, black 85%, transparent 100%)',
                maskComposite: 'intersect'
              }}
            />
            
            {/* 2a. Faint floral/leaf line-art illustration positioned bottom-left behind the buttons */}
            <svg 
              className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] opacity-[0.03] text-[#066763]" 
              viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4"
            >
              <path d="M20,100 Q10,70 30,50 T70,10" />
              <path d="M30,50 Q40,40 50,45 Q45,60 30,50" />
              <path d="M45,35 Q60,25 70,30 Q60,45 45,35" />
              <path d="M25,75 Q40,65 50,75 Q40,85 25,75" />
            </svg>

          </div>

          {/* ── CONTENT WRAPPER ── */}
          <div className="w-full mx-auto px-6 lg:px-[6%] relative z-10 flex flex-col justify-center h-full pt-32 pb-16 lg:py-0">
            
            <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-5 w-full lg:w-[50%] lg:-mt-10">
              
              {/* Eyebrow */}
              <div className="flex flex-col items-center lg:items-start gap-2 mb-2">
                <div className="w-8 h-[2px] bg-[#117b75]" />
                <span className="text-xs lg:text-sm font-semibold uppercase tracking-[0.2em] text-[#117b75] text-center lg:text-left">
                  EXPERT CARE FOR EVERY EAR
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[44px] md:text-[64px] lg:text-[96px] font-serif font-bold leading-[1.1] text-[#0f213b] tracking-tight text-center lg:text-left">
                Hear Better.<br />
                Live Brighter.
              </h1>

              {/* Mobile Image (Visible only on mobile) */}
              <div className="block lg:hidden relative w-full h-[280px] my-4"
                   style={{
                     maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                     WebkitMaskComposite: 'source-in',
                     maskComposite: 'intersect'
                   }}>
                <img 
                  src="/images/hero-screenshot.png"
                  alt="Medical Artwork"
                  className="w-full h-full object-cover scale-[1.35]"
                  style={{
                    objectPosition: "82% 45%"
                  }}
                />
              </div>

              {/* Sub-text */}
              <p className="text-base md:text-[22px] font-normal leading-[1.6] text-[#2c435e] mt-2 max-w-lg text-center lg:text-left">
                Comprehensive ENT &amp; Hearing Care <br className="hidden md:block" />
                with a legacy of trust since 1965.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-6 w-full sm:w-auto">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center rounded-md bg-[#066763] px-8 py-4 text-[13px] font-semibold tracking-wider text-white transition-all hover:bg-[#05504d] shadow-lg shadow-[#066763]/20 gap-3 w-full sm:w-auto"
                >
                  BOOK APPOINTMENT <span>→</span>
                </Link>
                <Link
                  href="/departments"
                  className="inline-flex items-center justify-center rounded-md border border-[#cbd5e1] bg-white px-8 py-4 text-[13px] font-semibold tracking-wider text-[#0f213b] transition-all hover:bg-slate-50 w-full sm:w-auto"
                >
                  OUR SERVICES
                </Link>
              </div>
            </div>
            
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            2. ABOUT US
        ───────────────────────────────────────────── */}
        <section className="w-full bg-white relative overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-32">
            <FadeInOnScroll>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* ── Text Block ── */}
                <div className="flex flex-col items-start gap-8">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-8 h-px bg-teal-800" />
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-800">About Us</span>
                  </div>

                  <h2 className="text-4xl font-serif font-bold tracking-tight text-slate-900 lg:text-5xl leading-tight">
                    Our Mission, Vision and Values
                  </h2>
                  
                  <p className="text-lg font-light text-slate-600 leading-relaxed border-l-2 border-teal-800/30 pl-4 italic">
                    "Established with a vision to make profound, natural healing accessible, bridging the gap between ancient therapeutic practices and dedicated specialist care."
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                    <div className="flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 font-serif">Mission</h3>
                      <p className="text-sm font-light text-slate-600 leading-relaxed">
                        To deliver patient-centered healthcare combining the ancient wisdom of Siddha medicine with advanced hearing care.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 font-serif">Vision</h3>
                      <p className="text-sm font-light text-slate-600 leading-relaxed">
                        To be a trusted sanctuary for holistic healing, prioritizing long-term health and comfort for every individual.
                      </p>
                    </div>
                  </div>

                  <Link href="/about" className="inline-flex items-center gap-2 rounded bg-slate-900 px-6 py-3 mt-4 text-sm font-semibold text-white transition-all hover:bg-teal-800 shadow-md">
                    Learn More About Us <span>→</span>
                  </Link>
                </div>

                {/* ── Image Block ── */}
                <div className="relative w-full lg:ml-auto">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm bg-slate-50 border border-slate-200">
                      <img
                        src="/images/about-portrait.png"
                        alt="Hospital Founder"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-bold text-slate-900 font-serif">Dr. K.V. Krishnan</h3>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Founder &amp; Chief Medical Officer</p>
                    </div>
                  </div>
                </div>

              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            3. WHY CHOOSE US
        ───────────────────────────────────────────── */}
        <section className="w-full border-b border-slate-200 bg-slate-50/60">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
            <FadeInOnScroll>
              {/* Header */}
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-teal-800/50" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Our Commitment</span>
                  <div className="w-10 h-px bg-teal-800/50" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif">
                  Why Choose Us
                </h2>
                <p className="text-lg font-light text-slate-600 max-w-xl">
                  Care rooted in tradition. Delivered with attention.
                </p>
                <p className="text-base font-light text-slate-500 max-w-2xl leading-relaxed">
                  We are committed to providing care that is rooted in Siddha wisdom and delivered with the utmost professionalism. Our patients trust us for our integrity, deep knowledge, and personal attention.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    num: "01",
                    title: "Experienced Care",
                    desc: "Years of dedicated practice in Siddha medicine and audiology, ensuring informed and attentive care.",
                    cta: "Learn More",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    ),
                  },
                  {
                    num: "02",
                    title: "Patient-Centered Approach",
                    desc: "Every treatment plan is tailored to the individual, respecting their unique health history and personal comfort.",
                    cta: "Explore",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    ),
                  },
                  {
                    num: "03",
                    title: "Convenient Location",
                    desc: "Easily accessible in the heart of Gandhipuram, Coimbatore, making regular visits and consultations straightforward.",
                    cta: "Get Directions",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                  },
                ].map((card) => (
                  <div
                    key={card.num}
                    className="group bg-white rounded-lg border border-slate-200 p-8 flex flex-col gap-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-teal-800/30 relative overflow-hidden"
                  >
                    <div className="w-12 h-12 bg-teal-50 text-teal-800 flex items-center justify-center transition-transform duration-300 relative z-10">
                      {card.icon}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-sm font-light text-slate-600 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust tagline */}
              <div className="mt-14 text-center">
                <p className="text-base font-serif italic text-slate-500">
                  "Trusted by generations for healthier hearing."
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            4. ENT SERVICES PREVIEW
        ───────────────────────────────────────────── */}
        <section className="w-full border-b border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
            <FadeInOnScroll>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-teal-800" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">Our Departments</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-serif">
                    Comprehensive ENT Care
                  </h2>
                </div>
                <Link href="/departments" className="inline-flex items-center gap-2 rounded bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-800 transition-all hover:bg-teal-50 hover:text-teal-900">
                  View All Services <span>→</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Hearing & Audiology", desc: "Advanced hearing tests, digital hearing aids, and speech therapy for all ages.", icon: "M19.5 8.25l-7.5 7.5-7.5-7.5" },
                  { title: "Nose & Sinus Care", desc: "Expert diagnosis and treatment for sinus infections, allergies, and nasal blockages.", icon: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 15a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5z" },
                  { title: "Throat & Voice Care", desc: "Specialized care for tonsillitis, voice disorders, and swallowing difficulties.", icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" },
                  { title: "Pediatric ENT", desc: "Gentle, compassionate care tailored specifically for children's ear, nose, and throat needs.", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" }
                ].map((service, i) => (
                  <div key={i} className="group flex flex-col bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-teal-800/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-teal-800 mb-6 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-teal-900 transition-colors">{service.title}</h3>
                    <p className="text-sm font-light text-slate-600 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                    <Link href="/departments" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-800 hover:text-teal-900">
                      Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            5. DOCTOR / TEAM PREVIEW
        ───────────────────────────────────────────── */}
        <section className="w-full border-b border-slate-200 bg-slate-900 text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28 relative z-10">
            <FadeInOnScroll>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                
                {/* Text Block */}
                <div className="flex flex-col items-start gap-8">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-8 h-px bg-teal-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Our Specialists</span>
                  </div>

                  <h2 className="text-4xl font-serif font-bold tracking-tight text-white lg:text-5xl leading-tight">
                    Meet Our Dedicated Team of Experts
                  </h2>
                  
                  <p className="text-lg font-light text-slate-300 leading-relaxed">
                    Our team of highly qualified ENT specialists, audiologists, and speech therapists are dedicated to providing you with the best possible care. With years of experience and a patient-first approach, you are in safe hands.
                  </p>

                  <Link href="/specialists" className="inline-flex items-center gap-2 rounded bg-teal-600 px-8 py-3.5 mt-4 text-sm font-semibold text-white transition-all hover:bg-teal-500 shadow-lg">
                    Meet the Doctor <span>→</span>
                  </Link>
                </div>

                {/* Team Grid (Mini) */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                    <img src="/images/founders/2.jpg" alt="Specialist" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-lg font-serif">Dr. A. Sharma</p>
                      <p className="text-teal-400 text-xs uppercase tracking-wider font-semibold">Chief Audiologist</p>
                    </div>
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group translate-y-8">
                    <img src="/images/founders/3.jpg" alt="Specialist" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-lg font-serif">Dr. R. Verma</p>
                      <p className="text-teal-400 text-xs uppercase tracking-wider font-semibold">ENT Surgeon</p>
                    </div>
                  </div>
                </div>

              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            6. TESTIMONIALS
        ───────────────────────────────────────────── */}
        <TestimonialSection />

        {/* ─────────────────────────────────────────────
            5. OUR FACILITY GALLERY PREVIEW
        ───────────────────────────────────────────── */}
        <section className="w-full border-b border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-28">
            <FadeInOnScroll>
              {/* Header */}
              <div className="flex flex-col items-center text-center gap-3 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-teal-800/50" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Our Facility</span>
                  <div className="w-10 h-px bg-teal-800/50" />
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((item) => (
                  <div
                    key={item.id}
                    className="group relative aspect-square bg-slate-100 rounded overflow-hidden border border-slate-200 hover:border-teal-800/40 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    {item.url ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <p className="text-white text-xs font-semibold">{item.title}</p>
                      <p className="text-white/70 text-[10px] mt-0.5 hover:text-white cursor-pointer">View {item.id === "g1" || item.id === "g5" ? "in Gallery" : ""}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* View Gallery CTA */}
              <div className="flex justify-center mt-10">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded border border-teal-800 bg-transparent px-8 py-3.5 text-sm font-semibold text-teal-800 transition-all hover:bg-teal-800 hover:text-white"
                >
                  View Full Gallery →
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
            6. VISIT OUR HOSPITAL
        ───────────────────────────────────────────── */}
        <section className="bg-slate-50 border-b border-slate-200 py-24">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Map */}
              <div className="w-full h-[350px] sm:h-[420px] bg-slate-200 rounded-sm overflow-hidden border border-slate-200 order-2 lg:order-1">
                <iframe
                  src="https://maps.google.com/maps?q=11.016646,76.961686&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hearing Home Hospital Location"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-8 order-1 lg:order-2">
                <div>
                  <h2 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                    Visit Our Hospital
                  </h2>
                  <p className="text-lg font-light text-slate-600 leading-relaxed">
                    We are conveniently located in Gandhipuram, Coimbatore. Drop by for a consultation or contact us to schedule your visit.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Location Card */}
                  <div className="bg-white p-6 border border-slate-200 rounded-sm flex items-start gap-4">
                    <div className="mt-1 text-teal-800 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Our Location</h4>
                      <p className="text-sm font-light leading-relaxed text-slate-600">
                        No. 383, Cross Cut Rd, near Indian Petrol Bunk,<br />
                        Peranaidu Layout, Ram Nagar, Gandhipuram,<br />
                        Coimbatore, Tamil Nadu 641012
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone Card */}
                  <div className="bg-white p-6 border border-slate-200 rounded-sm flex items-start gap-4">
                    <div className="mt-1 text-teal-800 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.077-7.077l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">Call Us</h4>
                      <p className="text-sm font-light leading-relaxed text-slate-600">
                        +91 94437 27457
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded bg-teal-800 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-900"
                  >
                    Contact Us Today →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ─────────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
