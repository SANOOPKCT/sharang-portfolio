export interface ExifData {
  lightingSetup: string;
  mood: string;
  vibe: string;
}

export interface PhotographWork {
  id: string;
  title: string;
  series: string;
  category:
    | "High-Beam & Chiaroscuro"
    | "Dark Character Studies"
    | "Studio Fashion & Glamour"
    | "Kerala Beach Mode";
  year: string;
  location: string;
  aspectRatio: "portrait";
  width: number;
  height: number;
  imageUrl: string;
  curatorNote: string;
  details: ExifData;
}

export const worksCategories = [
  "All Works",
  "High-Beam & Chiaroscuro",
  "Dark Character Studies",
  "Studio Fashion & Glamour",
  "Kerala Beach Mode",
] as const;

export type CategoryFilter = (typeof worksCategories)[number];

export const photographicWorks: PhotographWork[] = [
  // ==========================================
  // CHAPTER 1: HIGH-BEAM CHIAROSCURO & SHADOWS
  // ==========================================
  {
    id: "chiaroscuro-beam-01",
    title: "Shaft of Light",
    series: "Chiaroscuro Series",
    category: "High-Beam & Chiaroscuro",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0025.jpg",
    curatorNote: "Precision optical snoot vertical projection beam cutting through velvet darkness.",
    details: {
      lightingSetup: "Precision optical snoot beam against black velvet",
      mood: "Dramatic, sculpted, enigmatic",
      vibe: "High-fashion chiaroscuro",
    },
  },
  {
    id: "chiaroscuro-geom-02",
    title: "Geometric Angles & Amber",
    series: "Chiaroscuro Series",
    category: "High-Beam & Chiaroscuro",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0027.jpg",
    curatorNote: "Directional strobe slicing across amber studio illumination in golden proportion.",
    details: {
      lightingSetup: "Hard directional strobe with geometric cutters",
      mood: "Architectural, intense, warm",
      vibe: "Golden hour diagonal shadow lines",
    },
  },
  {
    id: "chiaroscuro-bw-03",
    title: "Solitude in Monologue",
    series: "Monochrome Study",
    category: "High-Beam & Chiaroscuro",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 3176,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0044.jpg",
    curatorNote: "Minimalist sculptural monologue captured in pure high-contrast black-and-white.",
    details: {
      lightingSetup: "Overhead gridded beauty dish with sharp shadow falloff",
      mood: "Introspective, artistic, unforced",
      vibe: "Pure monochrome editorial",
    },
  },

  // ==========================================
  // CHAPTER 2: THE PAPPAN CHRONICLES (CHARACTER)
  // ==========================================
  {
    id: "character-dark-01",
    title: "The Pappan Chronicles I",
    series: "Pappan Character Series",
    category: "Dark Character Studies",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0028.jpg",
    curatorNote: "Rembrandt key lighting sculpting character facial textures and hand-rolled cigar.",
    details: {
      lightingSetup: "Gridded Octabox key with directional black flags",
      mood: "Cinematic, commanding, contemplative",
      vibe: "Vintage dark portraiture with amber whiskey accents",
    },
  },
  {
    id: "character-dark-02",
    title: "The Pappan Chronicles II (Atmosphere)",
    series: "Pappan Character Series",
    category: "Dark Character Studies",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0035.jpg",
    curatorNote: "Fine studio aerosol haze capturing elevated golden rim light in cinematic texture.",
    details: {
      lightingSetup: "High-angle backlit rim kicker through aerosol haze",
      mood: "Nostalgic, cinematic, textured",
      vibe: "Tungsten atmosphere with old-world charisma",
    },
  },
  {
    id: "character-dark-03",
    title: "The Pappan Chronicles III (Wisdom)",
    series: "Pappan Character Series",
    category: "Dark Character Studies",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0037.jpg",
    curatorNote: "Intimate character study capturing dignity and expression under balanced key light.",
    details: {
      lightingSetup: "Medium silver beauty dish with subtle bounce fill",
      mood: "Intimate, dignified, raw",
      vibe: "Authentic character portraiture",
    },
  },

  // ==========================================
  // CHAPTER 3: LUMINESCENCE & STUDIO FASHION
  // ==========================================
  {
    id: "fashion-indigo-01",
    title: "Midnight Elegance",
    series: "Luminescence & Silk",
    category: "Studio Fashion & Glamour",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0023.jpg",
    curatorNote: "Cool indigo studio ambient wash complementing warm skin and beaded silk movement.",
    details: {
      lightingSetup: "Soft parabolic key with subtle indigo background wash",
      mood: "Glamour, poise, quiet confidence",
      vibe: "Contemporary evening editorial",
    },
  },
  {
    id: "fashion-indigo-04",
    title: "Subtle Indigo Aura",
    series: "Luminescence & Silk",
    category: "Studio Fashion & Glamour",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0041.jpg",
    curatorNote: "Sculptural facial illumination set against saturated blue twilight gradient.",
    details: {
      lightingSetup: "Deep parabolic softbox with blue gel background wash",
      mood: "Serene, poised, sophisticated",
      vibe: "Modern color-contrast portraiture",
    },
  },
  {
    id: "fashion-glow-02",
    title: "Golden Studio Glow",
    series: "Luminescence & Silk",
    category: "Studio Fashion & Glamour",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0033.jpg",
    curatorNote: "Warm amber hair rim halo highlighting natural curls against dark velvet.",
    details: {
      lightingSetup: "Warm amber kicker with diffused front key softbox",
      mood: "Luminous, joyful, elegant",
      vibe: "Polished studio fashion portraiture",
    },
  },
  {
    id: "fashion-radiance-03",
    title: "Warm Studio Radiance",
    series: "Luminescence & Silk",
    category: "Studio Fashion & Glamour",
    year: "2026",
    location: "Studio Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0038.jpg",
    curatorNote: "Beauty study with specular catchlights, warm cheek highlights, and sequin accents.",
    details: {
      lightingSetup: "Dual softbox butterfly lighting with warm rim accent",
      mood: "Effortless, radiant, captivating",
      vibe: "High-end commercial beauty capture",
    },
  },

  // ==========================================
  // CHAPTER 4: KERALA BEACH MODE & COASTAL
  // ==========================================
  {
    id: "coastal-beach-01",
    title: "Tides of Kerala I",
    series: "Kerala Coastal Stories",
    category: "Kerala Beach Mode",
    year: "2026",
    location: "Kovalam Coast, Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0030.jpg",
    curatorNote: "Daylight coastal portrait as white sea surf swirls under soft ocean daylight.",
    details: {
      lightingSetup: "Diffused coastal daylight with wet sand bounce",
      mood: "Elemental, organic, candid",
      vibe: "Outdoor coastal environmental portraiture",
    },
  },
  {
    id: "coastal-beach-02",
    title: "Tides of Kerala II",
    series: "Kerala Coastal Stories",
    category: "Kerala Beach Mode",
    year: "2026",
    location: "Varkala Beach, Kerala",
    aspectRatio: "portrait",
    width: 2774,
    height: 4160,
    imageUrl: "/portfolio/IMG-20261116-WA0043.jpg",
    curatorNote: "Vertical coastal portrait along golden shoreline mist, sea breeze, and sea spray.",
    details: {
      lightingSetup: "Late afternoon natural ambient sunlight with sea spray haze",
      mood: "Warm, grounded, relaxed",
      vibe: "Vertical coastal storytelling honoring Kerala shoreline",
    },
  },
];
