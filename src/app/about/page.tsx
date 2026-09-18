import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
                <span className="text-xs font-bold uppercase tracking-widest text-teal-800">About Us</span>
                <div className="w-8 h-px bg-teal-800" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-serif">
                Our Mission, Vision & Values
              </h1>
              <p className="text-lg font-light leading-relaxed text-slate-600 mt-2">
                At Hearing Home Hospital, we are dedicated to providing world-class medical care with compassion and innovation. Since 1965, we have been a trusted partner in health.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-500">
                <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Our Mission</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  To deliver exceptional, patient-centered healthcare through integrated clinical practice, education, and innovative research.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-500">
                <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Our Vision</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  To be the premier healthcare provider in the region, recognized globally for transforming lives through medical excellence and holistic care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="flex flex-col gap-12">
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 font-serif">Meet Our Founders</h2>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-center bg-white border border-slate-200 p-8 lg:p-12 rounded-3xl shadow-sm">
                <div className="w-full lg:w-1/3 aspect-[3/4] bg-slate-200 rounded-2xl flex items-center justify-center overflow-hidden relative shadow-md">
                  <img src="/images/founders/1.jpg" alt="Hospital Founder" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="flex flex-col gap-6 flex-1">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 font-serif mb-2">Hospital Founders</h3>
                    <p className="text-teal-800 text-sm font-bold uppercase tracking-wider">Visionaries of Healthcare</p>
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    Established with a vision to make profound, natural healing accessible, our hospital bridges the gap between ancient therapeutic practices and dedicated specialist care.
                  </p>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    Under the guidance of our experienced practitioners, we emphasize a philosophy of care that treats the individual as a whole. From meticulous Siddha formulations to precise hearing assessments and speech therapies, our priority is your long-term health and comfort.
                  </p>
                  <div className="pt-6 mt-2 border-t border-slate-100 flex gap-4">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-slate-900 font-serif">50+</span>
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Years Experience</span>
                    </div>
                    <div className="w-px h-12 bg-slate-200 mx-4"></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-slate-900 font-serif">100k+</span>
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Patients Healed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
