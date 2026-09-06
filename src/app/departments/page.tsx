import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import { EXTERNAL_LINKS } from "@/config/links";
import { departments } from "@/data/departments";

export default function DepartmentsPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      <Navbar />
      
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 md:px-12 md:py-20 flex-grow">
        <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-accent/15 bg-primary-accent/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-accent">
            Our Departments
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl">
            Specialized Care Centers
          </h1>
          <p className="text-base font-light leading-relaxed text-slate-500 sm:text-lg">
            Explore our comprehensive range of medical departments, each equipped with cutting-edge technology and staffed by expert specialists.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div key={dept.id} className="group flex flex-col bg-white/40 border border-slate-200/60 p-8 rounded-3xl backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-accent to-secondary-accent flex items-center justify-center mb-6 text-white shadow-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                 </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{dept.name}</h3>
              <p className="text-primary-accent text-sm font-medium mb-4">{dept.specialization}</p>
              <p className="text-slate-500 font-light text-sm flex-grow leading-relaxed mb-6">
                {dept.description}
              </p>
              <a 
                href={EXTERNAL_LINKS.BOOK_APPOINTMENT} 
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary-accent transition-colors"
              >
                Book Consultation
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
