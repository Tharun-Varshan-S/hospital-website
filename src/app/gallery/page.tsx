"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { gallery } from "@/data/gallery";

const CATEGORIES = ["All", "Early Years", "Events", "People", "Facilities"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredGallery = activeCategory === "All" 
    ? gallery 
    : gallery.filter(img => img.category === activeCategory || (activeCategory === "Facilities" && !["Early Years", "Events", "People"].includes(img.category)));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white font-sans text-slate-800">
      <Navbar />
      
      <main className="flex-1">
        {/* Heritage Landing - Scattered Polaroids */}
        <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200 py-24 lg:py-32">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 relative z-10">
            <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-px bg-teal-800" />
                <span className="text-xs font-bold uppercase tracking-widest text-teal-800">Gallery</span>
                <div className="w-8 h-px bg-teal-800" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-serif">
                Care for Generations
              </h1>
              <p className="text-lg font-light leading-relaxed text-slate-600 mt-2">
                Take a visual journey through our history, modern medical infrastructure, and the people who make it all possible.
              </p>
            </div>

            {/* Scattered Polaroids */}
            <div className="relative h-[400px] w-full max-w-4xl mx-auto hidden md:block">
              {gallery.slice(0, 3).map((item, idx) => {
                const rotations = ["-rotate-6", "rotate-3", "-rotate-2"];
                const positions = ["left-10 top-10", "left-1/2 -translate-x-1/2 top-0 z-10", "right-10 top-20"];
                return (
                  <div key={item.id} className={`absolute ${positions[idx]} ${rotations[idx]} w-64 bg-white p-4 shadow-xl border border-slate-200`}>
                    <div className="aspect-square bg-slate-100 overflow-hidden mb-4">
                      {item.url && <img src={item.url} alt={item.title} className="w-full h-full object-cover" />}
                    </div>
                    <p className="text-center font-serif text-sm text-slate-800 truncate px-2">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid with Filters */}
        <section className="py-20 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-teal-800 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGallery.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group cursor-pointer bg-white overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-sm"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                    {item.url ? (
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400">No Image</div>
                    )}
                    <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/10 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-bold text-teal-700 uppercase tracking-wider mb-1">{item.category}</p>
                    <h3 className="text-sm font-semibold text-slate-900 truncate">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center backdrop-blur-sm" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2" onClick={closeLightbox}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center px-12">
            <button className="absolute left-4 text-white/50 hover:text-white p-4" onClick={prevImage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="relative max-h-[70vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {filteredGallery[currentImageIndex]?.url && (
                <img 
                  src={filteredGallery[currentImageIndex].url} 
                  alt={filteredGallery[currentImageIndex].title} 
                  className="max-w-full max-h-[70vh] object-contain shadow-2xl"
                />
              )}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xl font-serif">{filteredGallery[currentImageIndex]?.title}</p>
                <p className="text-white/70 text-sm mt-1">{currentImageIndex + 1} of {filteredGallery.length}</p>
              </div>
            </div>

            <button className="absolute right-4 text-white/50 hover:text-white p-4" onClick={nextImage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-6 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
            {filteredGallery.map((item, idx) => (
              <button 
                key={item.id} 
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-16 h-12 shrink-0 overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-teal-500 opacity-100' : 'border-transparent opacity-40 hover:opacity-100'}`}
              >
                {item.url && <img src={item.url} className="w-full h-full object-cover" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
