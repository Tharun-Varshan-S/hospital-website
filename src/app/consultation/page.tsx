import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import { EXTERNAL_LINKS } from "@/config/links";

export default function ConsultationPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      <Navbar />
      
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-6 py-12 md:px-12 md:py-20 flex-grow">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl bg-white/40 border border-slate-200/60 p-12 rounded-[2.5rem] backdrop-blur-md shadow-lg">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center text-white shadow-md mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-800">
            Book a Consultation
          </h1>
          
          <p className="text-base font-light leading-relaxed text-slate-500">
            Our consultation and appointment booking is handled through our secure patient portal. Please click the button below to be redirected to our scheduling system.
          </p>
          
          <a 
            href={EXTERNAL_LINKS.CONSULTATION}
            className="mt-4 flex h-14 items-center justify-center gap-2 rounded-full bg-slate-800 px-10 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-slate-900 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 w-full sm:w-auto"
          >
            Proceed to Booking Portal
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
