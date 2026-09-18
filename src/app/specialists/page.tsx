import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EXTERNAL_LINKS } from "@/config/links";
import { doctors } from "@/data/doctors";

export default function SpecialistsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#fdfdfd] font-sans text-slate-800">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 relative z-10">
            <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-px bg-teal-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Medical Professionals</span>
                <div className="w-8 h-px bg-teal-500" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif">
                Meet Our Specialists
              </h1>
              <p className="text-lg font-light leading-relaxed text-slate-300 mt-2">
                Our team of board-certified doctors brings decades of clinical excellence across various specialties. Trust our experts to provide the highest standard of personalized care.
              </p>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {doctors.map((doc, idx) => {
                // Fallback images if data doesn't have images
                const fallbackImages = ["/images/founders/1.jpg", "/images/founders/2.jpg", "/images/founders/3.jpg", "/images/founders/4.jpg"];
                const imgSrc = (doc as any).image || fallbackImages[idx % fallbackImages.length];

                return (
                  <div key={doc.id} className="group flex flex-col bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                    <div className="w-full aspect-[4/5] bg-slate-200 relative overflow-hidden">
                      <img 
                        src={imgSrc} 
                        alt={doc.name} 
                        className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col flex-grow bg-white relative -mt-4 mx-4 rounded-xl shadow-sm border border-slate-100 z-10 group-hover:-translate-y-2 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-slate-900 font-serif mb-1">{doc.name}</h3>
                      <p className="text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">{doc.specialization}</p>
                      <p className="text-slate-500 text-sm font-light mb-6 flex-grow">{doc.qualification}</p>
                      
                      <div className="mt-auto">
                        <a 
                          href={EXTERNAL_LINKS.BOOK_APPOINTMENT} 
                          className="flex items-center justify-center w-full py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition-colors shadow-md"
                        >
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
