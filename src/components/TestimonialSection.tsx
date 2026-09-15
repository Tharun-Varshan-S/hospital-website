"use client";

import React, { useState, useEffect, useRef } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  quote: string;
  avatarBg: string;
  initials: string;
  avatarImage?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "R. Vignesh Kumar",
    role: "Business Executive",
    location: "Gandhipuram, Coimbatore",
    treatment: "Hearing Assessment & Digital Hearing Aid",
    rating: 5,
    date: "Verified Patient",
    quote:
      "After months of struggling with speech clarity in noisy meetings, the audiology team at Hearing Home provided a precise hearing evaluation. The custom digital hearing aid fits perfectly and has completely restored my confidence in daily conversations.",
    avatarBg: "bg-teal-700 text-white",
    initials: "VK",
  },
  {
    id: "2",
    name: "Meenakshi Sundaram",
    role: "Retired Educator",
    location: "Saibaba Colony, Coimbatore",
    treatment: "Siddha Wellness & Joint Pain Care",
    rating: 5,
    date: "Verified Patient",
    quote:
      "I suffered from persistent knee joint stiffness for over two years. The Siddha formulations and authentic traditional oil therapies provided remarkable relief without any harmful side effects. I can now walk comfortably again.",
    avatarBg: "bg-emerald-700 text-white",
    initials: "MS",
  },
  {
    id: "3",
    name: "Dr. S. Karthi & Family",
    role: "Assistant Professor",
    location: "Peelamedu, Coimbatore",
    treatment: "Pediatric Hearing Screening",
    rating: 5,
    date: "Verified Patient",
    quote:
      "We brought our 6-year-old son for a routine hearing evaluation. The specialists were incredibly patient, gentle, and child-friendly. The diagnostic facility is state-of-the-art and the staff treated us with extreme warmth.",
    avatarBg: "bg-slate-700 text-white",
    initials: "SK",
  },
  {
    id: "4",
    name: "P. Lakshmi Narayanan",
    role: "Textile Merchant",
    location: "RS Puram, Coimbatore",
    treatment: "Tinnitus Rehabilitation & Therapy",
    rating: 5,
    date: "Verified Patient",
    quote:
      "The constant ringing in my ears was severely disturbing my sleep. The integrated acoustic therapy and calming Siddha treatments significantly reduced my tinnitus symptoms. Their holistic care model really works.",
    avatarBg: "bg-amber-700 text-white",
    initials: "LN",
  },
  {
    id: "5",
    name: "Anandhi Rajan",
    role: "Software Professional",
    location: "Saravanampatti, Coimbatore",
    treatment: "Chronic Sinusitis & Respiratory Care",
    rating: 5,
    date: "Verified Patient",
    quote:
      "Frequent sinus attacks used to ruin my work schedule. The Siddha herbal remedies prescribed at Hearing Home addressed the root cause of my immunity issues. I haven't had a single flare-up in 6 months!",
    avatarBg: "bg-teal-800 text-white",
    initials: "AR",
  },
  {
    id: "6",
    name: "K. Suresh Kumar",
    role: "Senior Accountant",
    location: "Singanallur, Coimbatore",
    treatment: "Audiometry & Ear Wellness Check",
    rating: 5,
    date: "Verified Patient",
    quote:
      "Extremely clean facility, punctual appointments, and clear medical advice. They explained my audiogram results in detail and didn't push unnecessary procedures. Truly a healthcare institution guided by integrity.",
    avatarBg: "bg-stone-700 text-white",
    initials: "SK",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const INTERVAL_TIME = 4000; // 4 seconds per slide

  // Cycle through testimonials automatically
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (INTERVAL_TIME / 100));
      });
    }, 100);

    const slideTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, INTERVAL_TIME);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideTimer);
    };
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  };

  // Get current pair of testimonials to show (2 cards side by side on desktop)
  const firstItem = testimonials[currentIndex];
  const secondIndex = (currentIndex + 1) % testimonials.length;
  const secondItem = testimonials[secondIndex];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 py-20 md:py-28 overflow-hidden border-b border-slate-200">
      
      {/* Background Decorative Accents (Light Neutral / Warm Amber-Teal) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        
        {/* Header & Live Running Status */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          
          {/* Live Patient Feedback Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Live Patient Feedback
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="max-w-2xl text-base md:text-lg font-light text-slate-600">
            Real stories of healing, restored hearing, and compassionate care from patients across Coimbatore.
          </p>
        </div>

        {/* Running Feedback Container with Hover Pause */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Progress Bar showing active timer */}
          <div className="w-full bg-slate-200/70 h-1 rounded-full mb-8 overflow-hidden">
            <div 
              className="bg-teal-700 h-full transition-all duration-100 ease-linear"
              style={{ width: `${isPaused ? progress : progress}%` }}
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[320px]">
            
            {[firstItem, secondItem].map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                className="bg-white border border-slate-200/90 p-8 md:p-10 rounded-xl shadow-xs hover:shadow-md transition-all duration-500 flex flex-col justify-between relative group"
              >
                {/* Top Section: Quote Icon & Rating */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <svg className="w-9 h-9 text-teal-700/30 group-hover:text-teal-700/60 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    {/* Star Rating & Verified Tag */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center text-amber-400 gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="text-sm">★</span>
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                        ✓ {item.date}
                      </span>
                    </div>
                  </div>

                  {/* Treatment Tag */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-md">
                      {item.treatment}
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-slate-700 text-base leading-relaxed font-light italic mb-8">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                {/* Bottom Section: Patient Profile */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className={`w-12 h-12 rounded-full ${item.avatarBg} flex items-center justify-center font-bold text-sm shadow-xs shrink-0`}>
                    {item.initials}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.role} • <span className="text-slate-600">{item.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Controls Bar: Prev/Next & Dots */}
          <div className="flex items-center justify-between mt-10 px-2">
            
            {/* Live Pause Indicator */}
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium transition-colors text-xs shadow-2xs"
              >
                {isPaused ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Resume Auto-Play</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                    <span>Hover or Click to Pause</span>
                  </>
                )}
              </button>
            </div>

            {/* Pagination Dot Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setProgress(0);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? "w-8 bg-teal-700" 
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-2xs transition-colors"
                aria-label="Previous feedback"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-2xs transition-colors"
                aria-label="Next feedback"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
