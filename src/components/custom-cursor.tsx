"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "photo" | "interactive">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-precision smooth spring physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if hovering over a photograph canvas
      const photoEl = target.closest("[data-cursor='photo']");
      if (photoEl) {
        setCursorVariant("photo");
        setCursorText("FOCUS");
        return;
      }

      // Check if hovering over an interactive button or link
      const interactiveEl = target.closest("button, a, select, input, textarea, [data-cursor='interactive']");
      if (interactiveEl) {
        setCursorVariant("interactive");
        setCursorText("");
        return;
      }

      setCursorVariant("default");
      setCursorText("");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Central Viewfinder Reticle */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
      >
        {cursorVariant === "photo" && (
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-16 h-16 rounded-full border border-olive/80 bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-lg"
          >
            {/* Viewfinder crosshairs */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-px h-2 bg-olive/80" />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-px h-2 bg-olive/80" />
            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-px bg-olive/80" />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-px bg-olive/80" />
            <span className="font-mono text-[8px] tracking-widest text-white uppercase font-bold">
              {cursorText}
            </span>
          </motion.div>
        )}

        {cursorVariant === "interactive" && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="w-10 h-10 rounded-full border border-olive/70 bg-olive/10"
          />
        )}

        {cursorVariant === "default" && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative flex items-center justify-center"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-olive shadow-[0_0_8px_rgba(181,201,154,0.6)]" />
            <div className="absolute w-6 h-6 rounded-full border border-olive/30 animate-ping" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
