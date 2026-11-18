"use client";

import React from "react";
import { photographerData } from "@/data/photographer";
import { Camera, ArrowDown, Sparkles, Moon, Sun, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroEditorial() {
  return (
    <section id="hero" className="relative w-full pt-6 pb-24 lg:pt-10 lg:pb-36 overflow-hidden">
      {/* Cinematic ambient chiaroscuro light beam behind hero (Muted Olive & Drab) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[90vw] h-[550px] bg-gradient-to-b from-[#8A9A78]/[0.10] via-[#4B5640]/[0.04] to-transparent pointer-events-none blur-3xl -z-10" />

      {/* Full-width container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Top Exhibition Meta Line */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5 mb-8 sm:mb-12 text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-stone-muted"
        >
          <div className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 rounded-full bg-umber animate-pulse" />
            <span className="text-white font-medium">Fine-Art Studio &bull; South India</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <span className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full">DIPLOMA IN PHOTOGRAPHY</span>
            <span className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full">6+ YRS STUDIO CRAFT</span>
            <span className="text-umber font-semibold">KERALA 08°30′N 76°57′E</span>
          </div>
        </motion.div>

        {/* Monumental Architectural Typography Header */}
        <div className="relative border-b border-white/[0.08] pb-8 sm:pb-12 mb-12 sm:mb-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[12vw] sm:text-[11.5vw] lg:text-[11vw] font-black uppercase tracking-[-0.03em] leading-[0.88] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 select-none">
              SHARANG
              <br />
              <span className="text-white hover:text-umber transition-colors duration-500">
                RAVINDRAN
              </span>
            </h1>
          </motion.div>

          {/* Subtitle Bar below Giant Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-stone-muted"
          >
            <span>[ CHIAROSCURO LIGHTING &bull; DARK AESTHETIC PORTRAITURE &bull; COASTAL STORIES ]</span>
            <span className="text-white font-semibold flex items-center space-x-2">
              <span>EXPLORE EXHIBITION</span>
              <ArrowDown className="w-3.5 h-3.5 text-umber animate-bounce" />
            </span>
          </motion.div>
        </div>

        {/* Full-Bleed 2-Column Editorial & About Section */}
        <div id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">
          {/* Left Column: Streamlined Curved Reserved Portrait Canvas (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div
              data-cursor="photo"
              className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-olive/50 bg-paper-subtle/70 shadow-2xl transition-all duration-500 group cursor-pointer"
            >
              {/* Streamlined Box-Size Canvas with Elegant Curved Corners */}
              <div className="relative aspect-[4/5] w-full bg-zinc-950/80 flex flex-col items-center justify-center p-8 text-center select-none overflow-hidden">
                {/* Viewfinder corner brackets in Muted Olive */}
                <div className="absolute top-5 left-5 w-5 h-5 border-t-2 border-l-2 border-olive/70 rounded-tl pointer-events-none" />
                <div className="absolute top-5 right-5 w-5 h-5 border-t-2 border-r-2 border-olive/70 rounded-tr pointer-events-none" />
                <div className="absolute bottom-5 left-5 w-5 h-5 border-b-2 border-l-2 border-olive/70 rounded-bl pointer-events-none" />
                <div className="absolute bottom-5 right-5 w-5 h-5 border-b-2 border-r-2 border-olive/70 rounded-br pointer-events-none" />

                {/* Subtle center crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-24 h-px bg-white" />
                  <div className="h-24 w-px bg-white absolute" />
                </div>

                {/* Icon & Label */}
                <div className="w-16 h-16 rounded-2xl border border-white/15 bg-white/[0.04] flex items-center justify-center mb-5 text-olive shadow-inner group-hover:scale-105 transition-transform">
                  <Camera className="w-7 h-7 stroke-[1.2]" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-white block mb-2 font-semibold">
                  PORTRAIT CANVAS
                </span>
                <span className="font-sans text-xs text-stone-muted max-w-[240px] leading-relaxed block">
                  Reserved for Sharang Ravindran
                </span>
                <span className="mt-5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[9px] text-umber tracking-[0.25em] uppercase">
                  Box-Frame Slot [ 4:5 ]
                </span>
              </div>

              {/* Integrated Caption Footer */}
              <div className="py-3 px-6 bg-paper-subtle border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-stone-muted">
                <span>ARTIST PROFILE FRAME</span>
                <span className="text-umber font-medium">KERALA, INDIA</span>
              </div>
            </div>

            {/* Quick Experience Credentials with Curved Rounded Edges */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-5 bg-paper-subtle border border-white/10 rounded-2xl">
                <span className="block font-display text-2xl text-white font-semibold">6+ YRS</span>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-umber mt-1">
                  Professional Studio Craft
                </span>
              </div>
              <div className="p-5 bg-paper-subtle border border-white/10 rounded-2xl">
                <span className="block font-display text-2xl text-white font-semibold">DIPLOMA</span>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-umber mt-1">
                  Certified in Photography
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dedicated Author Quote, Philosophy & Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-10"
          >
            {/* Dedicated Artist Quote */}
            <div className="relative pl-6 sm:pl-10 border-l-2 border-umber/80">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-umber block mb-3">
                [ ARTIST CREDO &bull; SHARANG RAVINDRAN ]
              </span>
              <blockquote className="font-serif italic text-3xl sm:text-4xl xl:text-5xl text-white leading-[1.2] font-normal tracking-wide">
                &ldquo;{photographerData.quote.text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center space-x-3">
                <div className="w-8 h-px bg-umber" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-umber font-semibold">
                  &mdash; {photographerData.quote.author}
                </span>
              </div>
            </div>

            {/* About Story & Artistic Statement */}
            <div className="space-y-5 text-stone-muted font-sans text-sm sm:text-base leading-relaxed">
              <p className="text-white font-serif text-lg sm:text-xl leading-relaxed">
                {photographerData.artistStatement}
              </p>
              {photographerData.storyParagraphs.map((para, idx) => (
                <p key={idx} className="text-stone-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Visual Principles Grid with Curved Rounded Edges */}
            <div className="pt-6 border-t border-white/[0.08]">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-muted block mb-5">
                [ CORE CREATIVE METHODOLOGY ]
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {photographerData.principles.map((principle, idx) => {
                  const icons = [
                    <Moon key="1" className="w-4 h-4 text-umber" />,
                    <Sparkles key="2" className="w-4 h-4 text-umber" />,
                    <Sun key="3" className="w-4 h-4 text-umber" />,
                  ];
                  return (
                    <div
                      key={idx}
                      className="p-6 bg-paper-subtle border border-white/[0.08] hover:border-umber/50 rounded-2xl transition-colors group"
                    >
                      <div className="flex items-center space-x-2.5 mb-2.5">
                        {icons[idx]}
                        <h4 className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
                          {principle.title}
                        </h4>
                      </div>
                      <p className="text-xs text-stone-muted leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Actions with Curved Rounded Edges */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="px-8 py-4 bg-umber hover:bg-umber-dark text-black font-mono text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all flex items-center space-x-3 shadow-xl hover:shadow-umber/20"
              >
                <span>View Full Exhibition</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-mono text-xs uppercase tracking-[0.2em] rounded-full transition-all flex items-center space-x-3"
              >
                <span>Direct Inquiries</span>
                <ArrowDown className="w-3.5 h-3.5 text-stone-muted" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
