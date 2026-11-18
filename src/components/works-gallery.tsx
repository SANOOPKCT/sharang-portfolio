"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  photographicWorks,
  PhotographWork,
  worksCategories,
  CategoryFilter,
} from "@/data/works";
import {
  Aperture,
  Camera,
  Sparkles,
  Waves,
  SlidersHorizontal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WorksGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All Works");

  const filteredWorks =
    activeCategory === "All Works"
      ? photographicWorks
      : photographicWorks.filter((work) => work.category === activeCategory);

  const getCategoryIcon = (category: PhotographWork["category"]) => {
    switch (category) {
      case "High-Beam & Chiaroscuro":
        return <Aperture className="w-3.5 h-3.5 text-umber" />;
      case "Dark Character Studies":
        return <Camera className="w-3.5 h-3.5 text-umber" />;
      case "Studio Fashion & Glamour":
        return <Sparkles className="w-3.5 h-3.5 text-umber" />;
      case "Kerala Beach Mode":
        return <Waves className="w-3.5 h-3.5 text-umber" />;
      default:
        return <Aperture className="w-3.5 h-3.5 text-umber" />;
    }
  };

  const getAmbientAuraClass = (category: PhotographWork["category"]) => {
    switch (category) {
      case "High-Beam & Chiaroscuro":
        return "group-hover:shadow-[0_0_70px_-10px_rgba(217,119,6,0.25)] group-hover:border-amber-500/40";
      case "Dark Character Studies":
        return "group-hover:shadow-[0_0_70px_-10px_rgba(180,83,9,0.22)] group-hover:border-amber-700/40";
      case "Studio Fashion & Glamour":
        return "group-hover:shadow-[0_0_70px_-10px_rgba(129,140,248,0.26)] group-hover:border-indigo-400/40";
      case "Kerala Beach Mode":
        return "group-hover:shadow-[0_0_70px_-10px_rgba(56,189,248,0.26)] group-hover:border-sky-400/40";
      default:
        return "group-hover:shadow-olive/20 group-hover:border-olive/50";
    }
  };

  return (
    <section id="works" className="py-24 lg:py-36 w-full border-t border-white/[0.08]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Exhibition Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-white/[0.08] pb-10 mb-12 gap-6">
          <div>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-umber block mb-3 flex items-center space-x-2">
              <Aperture className="w-3.5 h-3.5 text-umber animate-spin-slow" />
              <span>[ CURATED ARCHIVE &bull; 100% UNCOMPRESSED COMPOSITION ]</span>
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
              Portraits, Light Beams &amp; Coastal Stories
            </h2>
            <p className="mt-3 text-stone-muted text-sm sm:text-base font-sans max-w-2xl leading-relaxed">
              Every photograph is displayed in its complete, uncropped authentic composition. Faces, lighting beams, and contours are preserved in full fidelity.
            </p>
          </div>

          {/* Exhibition Status with Iconic Badges */}
          <div className="flex items-center space-x-3 text-xs font-mono text-stone-muted">
            <span className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full flex items-center space-x-2">
              <Camera className="w-3.5 h-3.5 text-umber" />
              <span>COLLECTION: <strong className="text-white">{photographicWorks.length} FRAMES</strong></span>
            </span>
            <span className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-umber" />
              <span>ACTIVE: <strong className="text-white">{filteredWorks.length}</strong></span>
            </span>
          </div>
        </div>

        {/* Category Filter Bar with Iconic Emblems */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-6 mb-16 scrollbar-none border-b border-white/[0.06]">
          <SlidersHorizontal className="w-4 h-4 text-umber shrink-0 mr-3" />
          {worksCategories.map((category) => {
            const isActive = activeCategory === category;
            const icon =
              category === "All Works" ? (
                <Aperture className="w-3 h-3 text-umber" />
              ) : (
                getCategoryIcon(category as PhotographWork["category"])
              );

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-all ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-stone-muted hover:text-white bg-white/[0.02] border border-white/10 hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-umber rounded-full"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  <span className={isActive ? "text-black" : "text-umber"}>{icon}</span>
                  <span>{category}</span>
                  <span className={`text-[10px] ${isActive ? "text-zinc-900" : "text-stone-light"}`}>
                    (
                    {category === "All Works"
                      ? photographicWorks.length
                      : photographicWorks.filter((w) => w.category === category).length}
                    )
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Reconstructed Image Gallery: Expansive 2-Column Editorial Grid with Ambient Aura & Parallax Elevate */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 lg:gap-x-16 lg:gap-y-28 xl:gap-x-20 xl:gap-y-36"
        >
          <AnimatePresence>
            {filteredWorks.map((work, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={work.id}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex flex-col ${
                    !isEven ? "md:translate-y-12 lg:translate-y-16" : ""
                  }`}
                >
                  {/* Single Clean Curved Canvas with Ambient Aura Glow & Viewfinder Cursor Target */}
                  <div
                    data-cursor="photo"
                    className={`relative w-full rounded-3xl overflow-hidden border border-white/[0.12] bg-[#060805] shadow-2xl transition-all duration-700 ease-out group-hover:-translate-y-1.5 flex items-center justify-center cursor-pointer ${getAmbientAuraClass(
                      work.category
                    )}`}
                  >
                    <div className="relative w-full aspect-[2774/4160] overflow-hidden flex items-center justify-center">
                      <Image
                        src={work.imageUrl}
                        alt={`${work.title} by Sharang Ravindran`}
                        width={work.width}
                        height={work.height}
                        quality={98}
                        priority={index < 2}
                        className="w-full h-full object-contain select-none transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {/* Iconic Category Pill (No raw numbers!) */}
                      <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-full flex items-center space-x-2 shadow-md">
                        {getCategoryIcon(work.category)}
                        <span className="text-[9px] font-mono text-white tracking-widest uppercase">
                          {work.series}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-umber rounded-full uppercase tracking-widest shadow-md flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-umber animate-pulse" />
                        <span>{work.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Elegant Icon-Powered Caption Line Below Image */}
                  <div className="mt-5 px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-umber group-hover:border-umber/60 group-hover:bg-umber/10 transition-all shrink-0">
                        {getCategoryIcon(work.category)}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl text-white font-normal group-hover:text-umber transition-colors">
                        {work.title}
                      </h3>
                    </div>

                    <div className="font-mono text-[11px] text-stone-muted flex items-center space-x-3 tracking-wider uppercase">
                      <span>{work.series}</span>
                      <span>&bull;</span>
                      <span className="text-stone-light">{work.location}</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
