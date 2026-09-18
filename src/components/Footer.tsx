import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo wordmark */}
            <div className="flex items-center gap-3">
              {/* Ear icon */}
              <div className="w-9 h-9 rounded-full bg-teal-700/30 border border-teal-600/40 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-teal-400"
                >
                  <path d="M12 3a6 6 0 0 1 6 6c0 4-3 5-3 8H9c0-3-3-4-3-8a6 6 0 0 1 6-6z" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold font-serif tracking-tight text-white">
                  Hearing Home
                </span>
                <span className="text-[10px] font-semibold tracking-[0.22em] text-teal-500 uppercase">
                  hospital
                </span>
              </div>
            </div>

            <p className="text-sm font-light leading-relaxed text-slate-400 pr-2">
              Dedicated to holistic wellness, bringing you the ancient wisdom of
              Siddha medicine and modern hearing care in Coimbatore.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-700 border border-slate-700 hover:border-teal-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-700 border border-slate-700 hover:border-teal-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-teal-700 border border-slate-700 hover:border-teal-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3 text-sm font-light">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-teal-400 transition-colors w-fit inline-flex items-center gap-1.5 group"
                >
                  <span className="w-3 h-px bg-teal-700 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Our Specialties */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Specialties
            </h4>
            <div className="flex flex-col gap-3 text-sm font-light text-slate-400">
              {[
                "Siddha Medicine",
                "Hearing & Audiology",
                "Ear & Speech Care",
                "Holistic Wellness",
              ].map((spec) => (
                <span key={spec} className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-600 shrink-0" />
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact & Hours */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <div className="flex flex-col gap-5 text-sm font-light text-slate-400">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-teal-500 mt-0.5 shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <strong className="text-white block font-medium mb-1">Address</strong>
                  Gandhipuram, Coimbatore,<br />
                  Tamil Nadu, India
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-teal-500 mt-0.5 shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-white block font-medium mb-1">Operating Hours</strong>
                  Mon – Sat: 9:00 AM – 8:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="border-t border-slate-800" />

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-500">
          <span>
            &copy; {new Date().getFullYear()} HearingHome. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
