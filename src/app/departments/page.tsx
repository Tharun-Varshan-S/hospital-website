import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EXTERNAL_LINKS } from "@/config/links";
import { departments } from "@/data/departments";

export default function DepartmentsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfdfd] font-sans text-slate-800">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-slate-50 border-b border-slate-200 py-20 lg:py-32">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-px bg-teal-800" />
                <span className="text-xs font-bold uppercase tracking-widest text-teal-800">Our Departments</span>
                <div className="w-8 h-px bg-teal-800" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-serif">
                Specialized Care Centers
              </h1>
              <p className="text-lg font-light leading-relaxed text-slate-600 mt-2">
                Explore our comprehensive range of medical departments, each equipped with cutting-edge technology and staffed by expert specialists to provide the highest standard of care.
              </p>
            </div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept) => (
                <div key={dept.id} className="group flex flex-col bg-white border border-slate-200 p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-xl hover:border-teal-800/30 transition-all duration-500 relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
                  
                  <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-teal-100">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                     </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif group-hover:text-teal-900 transition-colors">{dept.name}</h3>
                  <p className="text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">{dept.specialization}</p>
                  
                  <p className="text-slate-600 font-light text-sm flex-grow leading-relaxed mb-8">
                    {dept.description}
                  </p>
                  
                  <a 
                    href={EXTERNAL_LINKS.BOOK_APPOINTMENT} 
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-900 group/link"
                  >
                    Book Consultation
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-teal-800/30 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="mx-auto max-w-3xl px-6 relative z-10 flex flex-col items-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif mb-6">Need Help Choosing the Right Specialist?</h2>
            <p className="text-slate-300 font-light mb-8 max-w-xl text-lg">Our dedicated support team is available to assist you in finding the perfect care for your needs.</p>
            <div className="flex gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-500 shadow-lg shadow-teal-900/50">
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
