"use client";

import React, { useState } from "react";
import { photographerData } from "@/data/photographer";
import {
  Camera,
  Quote,
  Sparkles,
  Mail,
  Copy,
  Check,
  Menu,
  X,
  Phone,
} from "lucide-react";
import { InstagramIcon } from "./icons/instagram";
import { motion, AnimatePresence } from "framer-motion";

export function GalleryHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyWhatsApp = async () => {
    try {
      await navigator.clipboard.writeText(photographerData.whatsAppNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = photographerData.whatsAppNumber;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/85 backdrop-blur-xl border-b border-white/[0.06] transition-all duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 h-20 sm:h-24 flex items-center justify-between">
        {/* Left: Brand Monogram & Status */}
        <a href="#hero" className="group flex items-center space-x-4 focus:outline-none">
          <div className="w-9 h-9 rounded-2xl border border-white/20 bg-white/[0.03] flex items-center justify-center font-display text-sm tracking-wider font-semibold text-white group-hover:border-umber group-hover:text-umber transition-all">
            SR
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-bold text-sm sm:text-base tracking-[0.2em] text-white uppercase group-hover:text-umber transition-colors">
              Sharang Ravindran
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-stone-muted">
              Visual Archive &bull; Kerala
            </span>
          </div>
        </a>

        {/* Center: Minimalist Icon-Driven Navigation (No row numbers!) */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] font-mono tracking-[0.25em] uppercase text-stone-muted">
          <a
            href="#works"
            className="flex items-center space-x-2 hover:text-white transition-colors py-1 relative group"
          >
            <Camera className="w-3.5 h-3.5 text-umber group-hover:scale-110 transition-transform" />
            <span>Exhibition</span>
          </a>
          <a
            href="#about"
            className="flex items-center space-x-2 hover:text-white transition-colors py-1 relative group"
          >
            <Quote className="w-3.5 h-3.5 text-umber group-hover:scale-110 transition-transform" />
            <span>Philosophy</span>
          </a>
          <a
            href="#experience"
            className="flex items-center space-x-2 hover:text-white transition-colors py-1 relative group"
          >
            <Sparkles className="w-3.5 h-3.5 text-umber group-hover:scale-110 transition-transform" />
            <span>Process</span>
          </a>
          <a
            href="#contact"
            className="flex items-center space-x-2 hover:text-white transition-colors py-1 relative group"
          >
            <Mail className="w-3.5 h-3.5 text-umber group-hover:scale-110 transition-transform" />
            <span>Contact</span>
          </a>
        </nav>

        {/* Right: Quick Action Controls */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* WhatsApp Copy Pill */}
          <div className="relative">
            <button
              onClick={handleCopyWhatsApp}
              className="flex items-center space-x-2.5 px-4 py-2 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-whatsapp/70 rounded-full font-mono text-xs transition-all group"
            >
              <Phone className="w-3.5 h-3.5 text-whatsapp" />
              <span className="text-stone-muted text-[10px] uppercase tracking-wider">
                WhatsApp:
              </span>
              <span className="text-white font-medium tracking-wider">
                {photographerData.whatsAppDisplay}
              </span>
              <span className="p-1 rounded-full bg-white/[0.06] text-stone-muted group-hover:text-whatsapp transition-colors ml-1">
                {copied ? (
                  <Check className="w-3 h-3 text-whatsapp" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </span>
            </button>

            {/* Notification Tooltip */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute left-1/2 -translate-x-1/2 -bottom-9 px-3 py-1 bg-whatsapp text-black font-mono text-[10px] font-bold rounded-full shadow-xl whitespace-nowrap z-50 uppercase tracking-wider"
                >
                  Number Copied
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Instagram Link */}
          <a
            href={photographerData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-pink-500/60 rounded-full font-mono text-xs text-stone-muted hover:text-white transition-all group"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
            <span className="tracking-wider uppercase text-[10px]">Instagram</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2.5 border border-white/10 rounded-2xl bg-white/[0.03] text-white hover:border-umber transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/[0.08] bg-paper-subtle px-6 py-8 space-y-6 overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 font-mono text-xs tracking-[0.25em] uppercase text-white">
              <a
                href="#works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.06] flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <Camera className="w-4 h-4 text-umber" />
                  <span>Selected Works</span>
                </div>
                <span className="text-umber">&rarr;</span>
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.06] flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <Quote className="w-4 h-4 text-umber" />
                  <span>Artist Philosophy</span>
                </div>
                <span className="text-umber">&rarr;</span>
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.06] flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-4 h-4 text-umber" />
                  <span>Studio Experience</span>
                </div>
                <span className="text-umber">&rarr;</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 border-b border-white/[0.06] flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-umber" />
                  <span>Direct Contact</span>
                </div>
                <span className="text-umber">&rarr;</span>
              </a>
            </nav>

            <div className="pt-2 space-y-3">
              <button
                onClick={handleCopyWhatsApp}
                className="w-full p-3.5 bg-paper rounded-2xl border border-white/10 flex items-center justify-between active:scale-[0.99] transition-transform"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-whatsapp" />
                  <div className="text-left">
                    <span className="block font-mono text-[9px] text-stone-muted uppercase tracking-widest">
                      WhatsApp (Tap to Copy)
                    </span>
                    <span className="font-mono text-xs text-whatsapp font-bold">
                      {photographerData.whatsAppDisplay}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-stone-muted border border-white/10 px-3 py-1 rounded-full">
                  {copied ? "COPIED" : "COPY"}
                </span>
              </button>

              <a
                href={photographerData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full p-3.5 bg-paper rounded-2xl border border-white/10 flex items-center justify-between hover:border-pink-500/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <div className="text-left">
                    <span className="block font-mono text-[9px] text-stone-muted uppercase tracking-widest">
                      Instagram Redirect
                    </span>
                    <span className="font-mono text-xs text-white">
                      {photographerData.instagramHandle}
                    </span>
                  </div>
                </div>
                <span className="text-stone-muted">&rarr;</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
