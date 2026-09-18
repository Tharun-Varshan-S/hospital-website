"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
                <span className="text-xs font-bold uppercase tracking-widest text-teal-800">Get in Touch</span>
                <div className="w-8 h-px bg-teal-800" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-serif">
                Contact Us
              </h1>
              <p className="text-lg font-light leading-relaxed text-slate-600 mt-2">
                We are here to assist you. Please reach out with any questions or concerns to schedule your visit to Hearing Home Hospital.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Form Section */}
              <div className="flex flex-col gap-8 bg-slate-50 border border-slate-200 p-8 lg:p-12 rounded-2xl shadow-sm">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 font-serif mb-2">Send a Message</h3>
                  <p className="text-sm font-light text-slate-500">
                    Fill out the form below and our team will get back to you shortly.
                  </p>
                </div>
                
                <form className="flex flex-col gap-6" action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-teal-800">Full Name</label>
                    <input type="text" className="w-full rounded-none border-b-2 border-slate-200 bg-transparent px-0 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-teal-800 focus:outline-none transition-colors" placeholder="Enter your full name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-teal-800">Email Address</label>
                    <input type="email" className="w-full rounded-none border-b-2 border-slate-200 bg-transparent px-0 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-teal-800 focus:outline-none transition-colors" placeholder="Enter your email address" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-teal-800">Message</label>
                    <textarea rows={4} className="w-full rounded-none border-b-2 border-slate-200 bg-transparent px-0 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-teal-800 focus:outline-none transition-colors resize-none" placeholder="How can we help you?" />
                  </div>
                  <button className="mt-4 w-full rounded border border-teal-800 bg-teal-800 px-4 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-teal-800 shadow-sm">
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Info & Map Section */}
              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center mb-4 border border-teal-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">General Inquiry</h3>
                    <p className="text-2xl font-bold text-teal-800 tracking-tight">+91 98765 43210</p>
                    <p className="text-sm font-light text-slate-500 mt-2">Mon-Sat, 9am - 8pm.</p>
                  </div>
                  
                  <div className="bg-rose-50 border border-rose-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center mb-4 border border-rose-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">Emergency</h3>
                    <p className="text-2xl font-bold text-rose-600 tracking-tight">108</p>
                    <p className="text-sm font-light text-rose-500/80 mt-2">For immediate medical emergencies.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 pt-4 border-t border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">Our Location</h3>
                    <p className="text-base font-light leading-relaxed text-slate-600">
                      No. 383, Cross Cut Rd, near Indian Petrol Bunk,<br />
                      Peranaidu Layout, Ram Nagar, Gandhipuram,<br />
                      Coimbatore, Tamil Nadu 641012
                    </p>
                  </div>
                  
                  <div className="w-full h-[250px] bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <iframe
                      src="https://maps.google.com/maps?q=11.016646,76.961686&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hearing Home Hospital Location"
                    />
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
