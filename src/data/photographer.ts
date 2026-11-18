export interface PhotographerProfile {
  name: string;
  tagline: string;
  title: string;
  location: string;
  experienceYears: string;
  qualification: string;
  status: string;
  portraitPlaceholder: {
    title: string;
    description: string;
    aspectRatio: string;
  };
  greeting: string;
  quote: {
    text: string;
    author: string;
  };
  artistStatement: string;
  storyParagraphs: string[];
  principles: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
    subtext: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  whatsAppNumber: string;
  whatsAppDisplay: string;
  instagramUrl: string;
  instagramHandle: string;
  studioLocation: string;
  email: string;
}

export const photographerData: PhotographerProfile = {
  name: "Sharang Ravindran",
  tagline: "High-Beam Studio Portraiture · Chiaroscuro Aesthetics · Kerala Visual Stories",
  title: "Professional Portrait Photographer & Visual Storyteller",
  location: "Kerala, India",
  experienceYears: "6+ Years",
  qualification: "Formal Diploma in Photography",
  status: "Available for studio commissions & on-location assignments",
  portraitPlaceholder: {
    title: "Artist Portrait Frame",
    description: "Reserved space for Sharang Ravindran",
    aspectRatio: "aspect-[4/5]",
  },
  greeting: "Hello, I’m Sharang Ravindran.",
  quote: {
    text: "Light does not merely illuminate the subject; it carves emotion out of darkness, casting a timeless reflection of who we are.",
    author: "Sharang Ravindran",
  },
  artistStatement:
    "Based in Kerala, my journey in photography began over six years ago with a fascination for the emotional gravity of light and shadow. What started as an obsession with framing the perfect moment has evolved into a dedicated fine-art profession.",
  storyParagraphs: [
    "To push the boundaries of my craft, I completed a formal Diploma in Photography, fusing rigorous technical mastery of studio lighting, optics, and chiaroscuro with an intuitive aesthetic sense.",
    "My portfolio centers on dark-themed, high-beamed portraits sculpted with precision optical light, alongside organic coastal stories captured across Kerala's beaches and serene coastlines.",
    "Every session is collaborative, relaxed, and crafted to reveal your most authentic and powerful presence.",
  ],
  principles: [
    {
      title: "Chiaroscuro & High-Beam Optics",
      description:
        "Using optical snoots, directional grids, and high-contrast falloff to sculpt faces with dramatic three-dimensional depth.",
    },
    {
      title: "Relaxed & Collaborative Direction",
      description:
        "Gentle, patient posing guidance with zero pressure, ensuring you feel natural and empowered in front of studio strobes.",
    },
    {
      title: "From Studio Shadows to Coastal Light",
      description:
        "Mastery across both extremes: controlled dark studio light falloff and the wild, ambient daylight of Kerala's coastlines.",
    },
  ],
  stats: [
    {
      value: "6+ Yrs",
      label: "Studio Craft",
      subtext: "Hands-on lighting & portraiture",
    },
    {
      value: "Diploma",
      label: "Certified in Photography",
      subtext: "Formal optics & chiaroscuro study",
    },
    {
      value: "100%",
      label: "Personalized Direction",
      subtext: "Complete posing guidance",
    },
    {
      value: "Kerala",
      label: "Studio & Location",
      subtext: "Available across South India",
    },
  ],
  faqs: [
    {
      question: "I have never done a professional photoshoot before. Will you help me?",
      answer:
        "Absolutely! Most of my clients are stepping into a professional studio for the first time. My direction is calm, collaborative, and unhurried. I will guide your angles, posture, and expressions every step of the way with great music and zero pressure.",
    },
    {
      question: "What should I wear for a dark, high-beamed aesthetic studio portrait?",
      answer:
        "Solid rich tones such as black, charcoal, deep indigo, or textured fabrics (sequins, silk, structured blazers, linen) look stunning under directional beams. I provide personalized wardrobe consultation ahead of each session.",
    },
    {
      question: "Where is the studio located, and do you do beach / outdoor sessions?",
      answer:
        "My studio base is located in Kerala, India. In addition to studio sessions, I regularly conduct environmental coastal shoots along Kovalam, Varkala, and coastal Kerala.",
    },
    {
      question: "How long until I receive my retouched high-resolution images?",
      answer:
        "You will receive your private proofing gallery within 48 hours to select your favorite frames. Final hand-retouched, high-resolution masterpieces are delivered within 5 to 7 business days.",
    },
  ],
  whatsAppNumber: "+919207486594",
  whatsAppDisplay: "+91 92074 86594",
  instagramUrl: "https://www.instagram.com/s.harang._",
  instagramHandle: "@s.harang._",
  studioLocation: "Kerala, India",
  email: "sharang.ravindran@gmail.com",
};
