import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import { EXTERNAL_LINKS } from "@/config/links";
import { doctors } from "@/data/doctors";

export default function SpecialistsPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      <Navbar />
      
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 md:px-12 md:py-20 flex-grow">
        <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-accent/15 bg-primary-accent/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-accent">
            Medical Professionals
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl">
            Meet Our Specialists
          </h1>
          <p className="text-base font-light leading-relaxed text-slate-500 sm:text-lg">
            Our team of board-certified doctors brings decades of clinical excellence across various specialties.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div key={doc.id} className="group flex flex-col bg-white/40 border border-slate-200/60 rounded-3xl backdrop-blur-md shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="w-full aspect-square bg-slate-200 relative overflow-hidden flex items-center justify-center">
                <span className="text-slate-400 text-sm font-medium">Photo</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-800">{doc.name}</h3>
                <p className="text-primary-accent text-sm font-medium mb-1">{doc.specialization}</p>
                <p className="text-slate-500 text-xs mb-4">{doc.qualification}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-200/50">
                  <a 
                    href={EXTERNAL_LINKS.BOOK_APPOINTMENT} 
                    className="flex items-center justify-center w-full py-2 bg-slate-800 text-white text-sm font-medium rounded-xl hover:bg-slate-900 transition-colors"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
