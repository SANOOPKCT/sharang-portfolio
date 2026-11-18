"use client";

import React from "react";
import { Palette, Camera, Sliders, Check, Sparkles, Aperture } from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceGuide() {
  const steps = [
    {
      primaryIcon: <Palette className="w-5 h-5 text-umber" />,
      badgeIcon: <Sparkles className="w-4 h-4 text-white/30 group-hover:text-umber transition-colors" />,
      title: "Wardrobe & Light Styling",
      subtitle: "Tailored Chiaroscuro Palette",
      description:
        "Before your session, we map out textures and silhouettes that respond dynamically to directional light beams. Rich blacks, metallic sequins, raw silks, and tailored jackets create timeless presence.",
    },
    {
      primaryIcon: <Camera className="w-5 h-5 text-umber" />,
      badgeIcon: <Aperture className="w-4 h-4 text-white/30 group-hover:text-umber transition-colors" />,
      title: "Relaxed Studio & Coastal Sessions",
      subtitle: "Zero-Pressure Direction",
      description:
        "Whether stepping into our dark studio in Kerala or meeting on the coast, we guide your angles, posture, and expressions patiently. Over 80% of our clients are first-time portrait sitters.",
    },
    {
      primaryIcon: <Sliders className="w-5 h-5 text-umber" />,
      badgeIcon: <Check className="w-4 h-4 text-white/30 group-hover:text-umber transition-colors" />,
      title: "Hand-Mastered Digital Retouching",
      subtitle: "Authentic Skin Textures",
      description:
        "Receive your private proofing gallery within 48 hours. Every chosen frame is meticulously retouched by Sharang Ravindran, preserving real skin texture while sculpting specular highlights.",
    },
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 w-full bg-paper-subtle border-y border-white/[0.08]">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-10 mb-16 gap-6">
          <div>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-umber block mb-3 flex items-center space-x-2">
              <Aperture className="w-3.5 h-3.5 text-umber" />
              <span>[ CLIENT EXPERIENCE &bull; STUDIO METHOD ]</span>
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-normal">
              The Portrait Experience
            </h2>
          </div>
          <div className="flex items-center space-x-3 font-mono text-xs text-stone-muted">
            <span className="w-2 h-2 rounded-full bg-umber animate-pulse" />
            <span>Dedicated Posing Guidance &bull; 100% Stress-Free</span>
          </div>
        </div>

        {/* 3 Step Cards with Elegant Emblems (No raw numbers!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 sm:p-10 bg-paper border border-white/[0.08] hover:border-umber/60 rounded-3xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-umber group-hover:border-umber/50 group-hover:bg-umber/10 transition-colors">
                    {item.primaryIcon}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center">
                    {item.badgeIcon}
                  </div>
                </div>

                <h3 className="font-display text-2xl text-white font-normal mb-2">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-umber block mb-4 uppercase tracking-wider">
                  {item.subtitle}
                </span>

                <p className="font-sans text-sm text-stone-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-stone-muted">
                <span>Personalized Direction</span>
                <span className="text-umber flex items-center space-x-1.5 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Included</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
