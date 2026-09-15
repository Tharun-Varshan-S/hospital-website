import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import { gallery } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      <Navbar />
      
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 md:px-12 md:py-20 flex-grow">
        <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-accent/15 bg-primary-accent/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-accent">
            Gallery
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl">
            State-of-the-Art Facilities
          </h1>
          <p className="text-base font-light leading-relaxed text-slate-500 sm:text-lg">
            Take a virtual tour of our modern medical infrastructure designed for optimal patient comfort and care.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((image) => (
            <div key={image.id} className="group relative aspect-video bg-slate-200 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
               <div className="absolute inset-0 bg-slate-800/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
               {image.url ? (
                 <img src={image.url} alt={image.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               ) : (
                 <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 transition-transform duration-700 group-hover:scale-105">
                    <svg className="w-10 h-10 opacity-50 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-medium uppercase tracking-wider opacity-70">Placeholder</span>
                 </div>
               )}
               
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                 <span className="text-xs font-semibold text-primary-accent uppercase tracking-wider">{image.category}</span>
                 <h3 className="text-white font-medium truncate">{image.title}</h3>
               </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
