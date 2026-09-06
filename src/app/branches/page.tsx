import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import { branches } from "@/data/branches";
import { EXTERNAL_LINKS } from "@/config/links";

export default function BranchesPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      <Navbar />
      
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 md:px-12 md:py-20 flex-grow">
        <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-accent/15 bg-primary-accent/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-accent">
            Locations
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl">
            Our Branches
          </h1>
          <p className="text-base font-light leading-relaxed text-slate-500 sm:text-lg">
            Find the nearest Hearing Hom hospital or clinic for immediate care and consultations.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <div key={branch.id} className="bg-white/40 border border-slate-200/60 p-8 rounded-3xl backdrop-blur-md shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{branch.name}</h3>
              
              <div className="flex flex-col gap-3 mt-6 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-accent shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>{branch.address}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-accent shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>{branch.phone}</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-accent shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{branch.openingHours}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                 <button className="flex-1 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
                    Directions
                 </button>
                 <a href={EXTERNAL_LINKS.BOOK_APPOINTMENT} className="flex-1 py-2 text-center text-sm font-medium text-white bg-primary-accent rounded-xl hover:bg-primary-accent-hover transition-colors">
                    Book
                 </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
