"use client";

import React from "react";
import { photographerData } from "@/data/photographer";
import { ArrowUp } from "lucide-react";
import { InstagramIcon } from "./icons/instagram";

export function GalleryFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-paper-subtle border-t border-white/[0.08] py-20 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col space-y-16">
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
          <div>
            <span className="font-display text-4xl text-white tracking-tight block">
              {photographerData.name}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-stone-muted mt-1 block">
              Fine-Art Studio &bull; Chiaroscuro &bull; Kerala, India
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={photographerData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-stone-muted hover:text-pink-400 rounded-sm transition-colors"
              title="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-muted hover:text-umber transition-colors py-3 px-5 border border-white/10 bg-white/[0.02] rounded-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-umber" />
            </button>
          </div>
        </div>

        {/* Colophon & Credits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-xs font-mono text-stone-muted">
          <div>
            <span className="text-white uppercase tracking-wider block mb-2 font-medium">
              Studio Methodology
            </span>
            <p className="leading-relaxed font-sans text-xs">
              Designed as an uncompressed, dark chiaroscuro canvas. Merging 6+ years of hands-on practice with formal Diploma in Photography certification.
            </p>
          </div>

          <div>
            <span className="text-white uppercase tracking-wider block mb-2 font-medium">
              Geographic Scope
            </span>
            <p className="leading-relaxed font-sans text-xs">
              Based in Kerala, India. Commissions accepted across Kochi, Thiruvananthapuram, Calicut, South India, and international travel assignments.
            </p>
          </div>

          <div>
            <span className="text-white uppercase tracking-wider block mb-2 font-medium">
              Archive &amp; Rights
            </span>
            <p className="leading-relaxed font-sans text-xs">
              &copy; {new Date().getFullYear()} {photographerData.name}. All rights reserved. Real studio &amp; coastal photographs presented in authentic high fidelity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
