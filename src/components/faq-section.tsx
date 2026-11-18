"use client";

import React, { useState } from "react";
import { photographerData } from "@/data/photographer";
import { HelpCircle, ChevronDown, Phone, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleCopyWhatsApp = async () => {
    try {
      await navigator.clipboard.writeText(photographerData.whatsAppNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section className="py-24 lg:py-32 w-full bg-paper border-t border-white/[0.08]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Quick Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-umber block flex items-center space-x-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>[ STUDIO ADVISORY ]</span>
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-normal leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-sm text-stone-muted leading-relaxed">
              Helpful insights for clients planning their chiaroscuro studio portrait or Kerala coastal session with Sharang Ravindran.
            </p>

            <div className="pt-4 border-t border-white/[0.08]">
              <span className="font-mono text-[10px] text-stone-muted uppercase tracking-widest block mb-2">
                DIRECT INQUIRY HOTLINE
              </span>
              <button
                onClick={handleCopyWhatsApp}
                className="flex items-center space-x-2.5 px-4 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-full font-mono text-xs text-stone-muted hover:text-whatsapp transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-whatsapp" />
                <span className="text-white font-semibold">{photographerData.whatsAppDisplay}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-whatsapp ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 ml-1" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Accordion (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {photographerData.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-paper-subtle border border-white/[0.08] hover:border-white/20 rounded-2xl transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left text-white font-serif text-xl sm:text-2xl font-normal focus:outline-none"
                  >
                    <span className="pr-6">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-umber shrink-0"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-7 pt-1 text-stone-muted text-sm font-sans leading-relaxed border-t border-white/[0.06]">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
