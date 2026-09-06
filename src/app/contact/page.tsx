"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffects />
      <Navbar />
      
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 md:px-12 md:py-20 flex-grow">
        <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-accent/15 bg-primary-accent/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-accent">
            Get in Touch
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-800 sm:text-5xl">
            Contact Us
          </h1>
          <p className="text-base font-light leading-relaxed text-slate-500 sm:text-lg">
            We are here to assist you. Please reach out with any questions or concerns.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8 bg-white/40 border border-slate-200/60 p-8 rounded-3xl backdrop-blur-md shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800">Send a Message</h3>
            <p className="text-sm text-slate-500">
              * Note: This form connects to our external CRM system.
            </p>
            <form className="flex flex-col gap-4" action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" className="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 text-sm focus:border-primary-accent focus:outline-none focus:ring-1 focus:ring-primary-accent transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" className="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 text-sm focus:border-primary-accent focus:outline-none focus:ring-1 focus:ring-primary-accent transition-colors" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 text-sm focus:border-primary-accent focus:outline-none focus:ring-1 focus:ring-primary-accent transition-colors" placeholder="How can we help you?" />
              </div>
              <button className="mt-2 w-full rounded-xl bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-900 shadow-sm">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="bg-white/40 border border-slate-200/60 p-8 rounded-3xl backdrop-blur-md shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Emergency Contact</h3>
              <p className="text-3xl font-extrabold text-red-500">911</p>
              <p className="text-sm text-slate-500 mt-2">For immediate medical emergencies.</p>
            </div>
            
            <div className="bg-white/40 border border-slate-200/60 p-8 rounded-3xl backdrop-blur-md shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">General Inquiry</h3>
              <p className="text-lg font-bold text-slate-700">+1 (555) 123-4567</p>
              <p className="text-sm text-slate-500 mt-2">Available Mon-Fri, 8am-6pm.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
