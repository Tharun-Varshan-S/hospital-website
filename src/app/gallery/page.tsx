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
               <div className="absolute inset-0 bg-slate-800/20 group-hover:bg-transparent transition-colors duration-300" />
               <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium opacity-50">
                 {image.title} Image
               </div>
               
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
