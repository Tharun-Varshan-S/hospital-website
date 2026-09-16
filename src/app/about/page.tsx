import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      <Navbar />
      
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-12 md:px-12 md:py-20 lg:gap-24 flex-grow">
        <section className="flex flex-col items-start gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-accent/15 bg-primary-accent/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-accent">
            About Us
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl md:text-6xl">
            Our Mission, Vision, and <span className="gradient-text">Values</span>
          </h1>
          <p className="text-base font-light leading-relaxed text-slate-500 sm:text-lg">
            At Hearing Hom, we are dedicated to providing world-class medical care with compassion and innovation. Since 2001, we have been a trusted partner in health for over 100,000 patients across multiple branches.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/40 border border-slate-200/60 p-8 rounded-3xl backdrop-blur-md shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              To deliver exceptional, patient-centered healthcare through integrated clinical practice, education, and innovative research.
            </p>
          </div>
          <div className="bg-white/40 border border-slate-200/60 p-8 rounded-3xl backdrop-blur-md shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              To be the premier healthcare provider in the region, recognized globally for transforming lives through medical excellence.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-slate-800">Meet Our Founder</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start bg-white/40 border border-slate-200/60 p-8 rounded-3xl backdrop-blur-md">
            <div className="w-full md:w-1/3 aspect-[3/4] bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative border border-slate-200/60">
              <img src="/images/about-portrait.png" alt="Dr. John Doe" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Dr. John Doe</h3>
                <p className="text-primary-accent font-medium">Chief Medical Officer & Founder</p>
              </div>
              <p className="text-slate-600 font-light leading-relaxed">
                With over 30 years of experience in healthcare administration and clinical practice, Dr. Doe founded Hearing Hom with a singular vision: to make advanced medical care accessible to everyone. His leadership has driven the hospital&apos;s expansion from a single clinic to a multi-specialty network.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-slate-200/50 bg-white/20 py-8 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
          <span className="text-xs text-slate-400">© 2026 Hearing Hom. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
