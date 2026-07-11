"use client";

import React from "react";
import Navbar from "../components/Navbar";
import BackgroundEffects from "../components/BackgroundEffects";
import HospitalIllustration from "../components/HospitalIllustration";
import FloatingGlassCard from "../components/FloatingGlassCard";
import StatCard from "../components/StatCard";

export default function Home() {
  // SVG Icons for cards
  const emergencyIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );

  const supportIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const specialistsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  const equipmentIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );

  const recordsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const labIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );

  const satisfactionIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const checkupIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );

  // Icons for stats cards
  const ribbonIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const userGroupIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-primary-accent/20 selection:text-primary-accent">
      {/* Background blobs & connecting lines */}
      <BackgroundEffects />

      {/* Glassmorphic Navbar */}
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-12 md:px-12 md:py-20 lg:gap-24">
        {/* HERO SECTION (Split Grid layout) */}
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Hero Left Content Column */}
          <div className="flex flex-col items-start gap-6 lg:col-span-6">
            {/* Soft Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-accent/15 bg-primary-accent/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-accent shadow-[0_1px_2px_rgba(13,148,136,0.02)]">
              <span className="h-2 w-2 rounded-full bg-secondary-accent animate-pulse" />
              Next-Gen Healthcare Innovation
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-[5.5rem] lg:leading-[1.05]">
              Advanced Healthcare for <br className="hidden sm:inline" />
              <span className="gradient-text">Every Generation</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="max-w-xl text-base font-light leading-relaxed text-slate-500 sm:text-lg">
              Experience the next generation of patient-centric care. Combining leading medical specialists, state-of-the-art diagnostic facilities, and seamless digital healthcare records to support your wellness journey 24/7.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:w-auto mt-2">
              <button className="group relative flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary-accent to-primary-accent-hover px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-accent/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-accent/30 active:scale-95">
                Book Appointment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button className="flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/40 px-8 py-3 text-sm font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:bg-white/70 active:scale-95">
                Learn More
              </button>
            </div>

            {/* Layered Avatar social proofs */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((id) => (
                  <div
                    key={id}
                    className="h-9 w-9 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm"
                  >
                    {/* Placeholder Avatar SVGs */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-slate-400">
                      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-700">100k+ Active Patients</span>
                <span className="text-[10px] text-slate-400">Trusted hospital group since 2001</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column (Centerpiece and Floating cards) */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-6 h-[480px] sm:h-[550px] lg:h-[600px] w-full">
            {/* Centerpiece hospital building */}
            <HospitalIllustration />

            {/* FLOATING GLASS CARDS (Positioned around illustration on large screens) */}
            {/* Card 1: Emergency Care */}
            <FloatingGlassCard
              icon={emergencyIcon}
              title="Emergency Care"
              description="Rapid 24/7 priority trauma response teams."
              className="w-full sm:w-[240px] mt-4 lg:mt-0 lg:absolute lg:top-8 lg:-left-4 lg:animate-float"
            />

            {/* Card 2: 24/7 Support */}
            <FloatingGlassCard
              icon={supportIcon}
              title="24/7 Support"
              description="Consult with qualified triage nurses anytime."
              className="w-full sm:w-[240px] mt-4 lg:mt-0 lg:absolute lg:top-24 lg:right-4 lg:animate-float-delayed"
            />

            {/* Card 3: Qualified Specialists */}
            <FloatingGlassCard
              icon={specialistsIcon}
              title="Expert Specialists"
              description="Over 150 board-certified clinicians."
              className="w-full sm:w-[240px] mt-4 lg:mt-0 lg:absolute lg:bottom-12 lg:-left-8 lg:animate-float-delayed"
            />

            {/* Card 4: Modern Equipment */}
            <FloatingGlassCard
              icon={equipmentIcon}
              title="Modern Equipment"
              description="Futuristic diagnostic labs and scanners."
              className="w-full sm:w-[240px] mt-4 lg:mt-0 lg:absolute lg:bottom-4 lg:right-0 lg:animate-float"
            />
          </div>
        </section>

        {/* STATS SECTION (Bento Grid columns) */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-accent">Platform Metrics</span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">Delivering Excellence at Scale</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
            <StatCard value="25+" label="Years Experience" icon={ribbonIcon} />
            <StatCard value="150+" label="Expert Doctors" icon={userGroupIcon} />
            <StatCard value="500+" label="Medical Beds" />
            <StatCard value="100k+" label="Patients Served" />
            <StatCard value="98%" label="Satisfaction" />
            <StatCard value="24/7" label="Emergency Care" />
          </div>
        </section>

        {/* ADDITIONAL FEATURES GRID (Adding the remaining required cards in a secondary bento structure) */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FloatingGlassCard
            icon={recordsIcon}
            title="Digital Records"
            description="Access lab results, charts, and digital prescriptions instantly through a unified platform."
            className="w-full h-full"
          />
          <FloatingGlassCard
            icon={labIcon}
            title="Laboratory Services"
            description="High-precision biochemistry, diagnostics, and pathology reports processed same-day."
            className="w-full h-full"
          />
          <FloatingGlassCard
            icon={satisfactionIcon}
            title="Patient Satisfaction"
            description="Consistently rated 5-stars for care quality, hygiene standards, and nursing staff friendliness."
            className="w-full h-full"
          />
          <FloatingGlassCard
            icon={checkupIcon}
            title="Health Checkups"
            description="Preventative medicine programs, physical checkups, and genetic risk profiles."
            className="w-full h-full"
          />
        </section>
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="mt-auto border-t border-slate-200/50 bg-white/20 py-8 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary-accent to-secondary-accent" />
            <span className="text-sm font-semibold tracking-tight text-slate-700">MedCrest Hospital Group</span>
          </div>
          <span className="text-xs text-slate-400">© 2026 MedCrest. All rights reserved. Premium Landing Page concept.</span>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-primary-accent" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#" className="hover:text-primary-accent" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
