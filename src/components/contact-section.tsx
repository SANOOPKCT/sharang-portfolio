"use client";

import React, { useState } from "react";
import { photographerData } from "@/data/photographer";
import {
  Phone,
  Copy,
  Check,
  Mail,
  MapPin,
  ArrowRight,
  Send,
} from "lucide-react";
import { InstagramIcon } from "./icons/instagram";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneOrEmail: "",
    sessionType: "High-Beam Studio Portrait",
    preferredTimeline: "Within 2 Weeks",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 w-full bg-paper border-t border-white/[0.08]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="border-b border-white/[0.08] pb-10 mb-16">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-umber block mb-3 flex items-center space-x-2">
            <Mail className="w-3.5 h-3.5" />
            <span>[ INITIATE DIALOGUE &bull; COMMISSIONS &amp; ASSIGNMENTS ]</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Reserve Your Session
          </h2>
          <p className="mt-3 font-sans text-stone-muted text-base max-w-3xl leading-relaxed">
            Direct communication for studio commissions, chiaroscuro model portfolios, or Kerala coastal environmental shoots. Copy WhatsApp number directly or connect on Instagram.
          </p>
        </div>

        {/* 2-Column Full-Width Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          {/* Left Column: Direct Channels & Studio Location (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <div className="p-8 bg-paper-subtle border border-white/[0.08] hover:border-whatsapp/60 rounded-3xl transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-2xl bg-whatsapp/10 border border-whatsapp/20 flex items-center justify-center text-whatsapp">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-muted block">
                        DIRECT WHATSAPP
                      </span>
                      <span className="font-mono text-lg text-white font-bold tracking-wider">
                        {photographerData.whatsAppDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyWhatsApp}
                    className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 rounded-full font-mono text-xs text-stone-muted hover:text-whatsapp transition-colors"
                    title="Click to copy number"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-whatsapp" />
                        <span className="text-whatsapp font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="font-sans text-xs text-stone-muted leading-relaxed">
                  Click to copy the number to clipboard. Zero automated API redirects.
                </p>
              </div>

              {/* Instagram Card */}
              <a
                href={photographerData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-paper-subtle border border-white/[0.08] hover:border-pink-500/60 rounded-3xl transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-muted block">
                        INSTAGRAM PROFILE
                      </span>
                      <span className="font-mono text-lg text-white font-bold tracking-wider group-hover:text-pink-400 transition-colors">
                        {photographerData.instagramHandle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-stone-muted group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="font-sans text-xs text-stone-muted leading-relaxed">
                  Follow visual stories, model portfolios, lighting breakdowns, and updates.
                </p>
              </a>

              {/* Studio Base Location */}
              <div className="p-8 bg-paper-subtle border border-white/[0.08] rounded-3xl">
                <div className="flex items-center space-x-2.5 mb-3 text-umber">
                  <MapPin className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] block">
                    STUDIO COORDINATES
                  </span>
                </div>
                <h4 className="font-display text-2xl text-white font-normal mb-2">
                  Studio Kerala
                </h4>
                <p className="font-mono text-xs text-stone-muted leading-relaxed">
                  Private Studio Base &bull; Kerala, India<br />
                  Sessions: Strictly by Appointment<br />
                  Assignments: Kerala Coast &bull; South India &bull; Worldwide
                </p>
              </div>
            </div>

            {/* Author Credo Card */}
            <div className="p-6 bg-paper-subtle rounded-2xl border border-white/[0.08]">
              <p className="font-serif italic text-base text-stone-muted leading-relaxed">
                &ldquo;{photographerData.quote.text}&rdquo;
              </p>
              <span className="block mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-umber font-semibold">
                &mdash; {photographerData.quote.author}
              </span>
            </div>
          </div>

          {/* Right Column: Inquiry Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-paper-subtle p-8 sm:p-12 border border-white/[0.08] rounded-3xl shadow-xl">
            {formSubmitted ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-umber/15 border border-umber/30 text-umber flex items-center justify-center mx-auto text-2xl font-bold">
                  &#10003;
                </div>
                <h3 className="font-display text-3xl text-white font-normal">
                  Inquiry Dispatched
                </h3>
                <p className="font-mono text-xs text-stone-muted max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Sharang Ravindran has received your inquiry for a {formData.sessionType} and will get in touch shortly.
                </p>
                <div className="pt-6 text-xs font-mono text-stone-light">
                  Direct WhatsApp: <span className="text-whatsapp font-bold">{photographerData.whatsAppDisplay}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-paper border border-white/10 rounded-2xl text-sm text-white placeholder:text-stone-light focus:outline-none focus:border-umber font-sans"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white mb-3">
                      Contact Phone or Email
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +91 98765 43210 or email"
                      value={formData.phoneOrEmail}
                      onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
                      className="w-full px-5 py-4 bg-paper border border-white/10 rounded-2xl text-sm text-white placeholder:text-stone-light focus:outline-none focus:border-umber font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white mb-3">
                      Session Style
                    </label>
                    <select
                      value={formData.sessionType}
                      onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                      className="w-full px-5 py-4 bg-paper border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-umber font-sans"
                    >
                      <option value="High-Beam Studio Portrait">High-Beam Studio Portrait</option>
                      <option value="Dark Chiaroscuro Character">Dark Chiaroscuro Character</option>
                      <option value="Fashion & Glamour Editorial">Fashion &amp; Glamour Editorial</option>
                      <option value="Kerala Coastal / Beach Mode">Kerala Coastal / Beach Mode</option>
                      <option value="Fine-Art Monochrome">Fine-Art Monochrome</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-white mb-3">
                      Preferred Timeline
                    </label>
                    <select
                      value={formData.preferredTimeline}
                      onChange={(e) => setFormData({ ...formData, preferredTimeline: e.target.value })}
                      className="w-full px-5 py-4 bg-paper border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-umber font-sans"
                    >
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Next Month">Next Month</option>
                      <option value="Flexible / Planning Ahead">Flexible / Planning Ahead</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-white mb-3">
                    Project Vision &amp; Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell Sharang about your session ideas, wardrobe inspirations, or location preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-paper border border-white/10 rounded-2xl text-sm text-white placeholder:text-stone-light focus:outline-none focus:border-umber font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-umber hover:bg-umber-dark text-black font-mono text-xs font-semibold uppercase tracking-[0.25em] rounded-full transition-all flex items-center justify-center space-x-3 shadow-xl hover:shadow-umber/20"
                >
                  <span>Submit Commission Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
