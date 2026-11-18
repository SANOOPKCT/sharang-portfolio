import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#090B08", // Deep Velvet Drab Charcoal
          subtle: "#0F130D", // Dab / Dark Muted Olive surface
          card: "#151A12",   // Studio card surface
        },
        obsidian: {
          DEFAULT: "#FFFFFF", // Pure brilliant white for crystal-clear readability
          deep: "#050704",    // Absolute black with subtle olive undertone
        },
        linen: {
          DEFAULT: "#232A1D", // Hairline drab border
          border: "#36422D",  // Elevated muted olive border
          dark: "#161B12",    // Subdued border
        },
        stone: {
          muted: "#D1D5DB",   // High-contrast soft alabaster / silver (never muddy!)
          light: "#F3F4F6",   // Brilliant light contrast
        },
        umber: {
          DEFAULT: "#B5C99A", // Luminous High-Contrast Muted Olive
          dark: "#8A9A78",    // Elegant Olive Drab
          glow: "#D8E2DC",    // Champagne Sage glow
        },
        olive: {
          DEFAULT: "#B5C99A", // Crisp Luminous Muted Olive
          muted: "#8A9A78",
          light: "#D8E2DC",
          dark: "#4B5640",
          drab: "#2B3124",
          subtle: "#1B2117",
        },
        drab: {
          DEFAULT: "#2B3124", // Classic Drab tone
          dark: "#141810",
          surface: "#0D1109",
          border: "#232A1D",
          accent: "#434D3A",
        },
        whatsapp: {
          DEFAULT: "#22C55E",
          dark: "#16A34A",
        },
      },
      fontFamily: {
        display: [
          '"Cinzel"',
          '"Syne"',
          '"Cormorant Garamond"',
          "serif",
        ],
        syne: [
          '"Syne"',
          "sans-serif",
        ],
        serif: [
          '"Cormorant Garamond"',
          '"Playfair Display"',
          "Georgia",
          "serif",
        ],
        sans: [
          '"Plus Jakarta Sans"',
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        mono: [
          '"Space Mono"',
          '"JetBrains Mono"',
          "monospace",
        ],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
