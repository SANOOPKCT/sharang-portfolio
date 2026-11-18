"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { PhotographWork } from "@/data/works";
import { photographerData } from "@/data/photographer";
import { CloseIcon, ArrowLeft, ArrowRight } from "./icons/viewfinder";
import { WhatsAppGlyph, MailIcon } from "./icons/nav-icons";

interface LightboxModalProps {
  work: PhotographWork | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalWorks: number;
}

export function LightboxModal({
  work,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalWorks,
}: LightboxModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!work) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [work, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (work) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [work, handleKeyDown]);

  if (!work) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Full screen photograph: ${work.title}`}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-paper select-none animate-in fade-in duration-200"
    >
      {/* Top Floating Controls */}
      <div className="w-full h-16 px-6 lg:px-12 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {work.series}
          </span>
          <span className="font-mono text-xs text-umber">
            [{String(currentIndex + 1).padStart(2, "0")} / {String(totalWorks).padStart(2, "0")}]
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <span className="hidden md:inline font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
            &larr; &rarr; to Navigate &bull; Esc to Exit
          </span>
          <button
            onClick={onClose}
            aria-label="Exit full screen view"
            className="p-2 text-zinc-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Center: Edge-to-Edge Full-Screen Image Canvas */}
      <div className="relative flex-1 w-full h-full flex items-center justify-center p-2 sm:p-6">
        <div className="relative w-full h-full max-w-6xl max-h-[82vh]">
          <Image
            src={work.imageUrl}
            alt={work.title}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          aria-label="Previous photograph"
          className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 p-3.5 bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/20 transition-transform hover:scale-105 active:scale-95 shadow-2xl"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next photograph"
          className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 p-3.5 bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/20 transition-transform hover:scale-105 active:scale-95 shadow-2xl"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Floating Caption Bar */}
      <div className="w-full py-4 px-6 lg:px-12 z-20 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-xl sm:text-2xl text-white font-normal">
            {work.title}
          </h2>
          <p className="font-sans text-xs text-zinc-400 mt-0.5 max-w-2xl leading-relaxed">
            {work.curatorNote}
          </p>
        </div>

        <div className="flex items-center space-x-4 shrink-0 font-mono text-[11px] text-zinc-400">
          <span className="flex items-center space-x-1.5">
            <WhatsAppGlyph className="w-3.5 h-3.5 text-whatsapp" />
            <span>WhatsApp: <strong className="text-whatsapp">{photographerData.whatsAppDisplay}</strong></span>
          </span>
          <span className="text-zinc-600">&bull;</span>
          <span className="flex items-center space-x-1.5">
            <MailIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>{photographerData.email}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
