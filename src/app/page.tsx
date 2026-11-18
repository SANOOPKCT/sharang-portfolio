import { GalleryHeader } from "@/components/gallery-header";
import { HeroEditorial } from "@/components/hero-editorial";
import { ExperienceGuide } from "@/components/experience-guide";
import { WorksGallery } from "@/components/works-gallery";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { GalleryFooter } from "@/components/gallery-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-obsidian flex flex-col">
      {/* 01. Sticky Header with WhatsApp Number */}
      <GalleryHeader />

      {/* 02. Heroscope: Sharang's Portrait, Story, Diploma Qualifications & Goals */}
      <HeroEditorial />

      {/* 03. Beginner-Friendly Studio Experience Guide */}
      <ExperienceGuide />

      {/* 04. "My Works": 12 Real Studio Photographs by Sharang */}
      <WorksGallery />

      {/* 05. Studio Guide & FAQ */}
      <FAQSection />

      {/* 06. Studio Inquiries & Direct Contact */}
      <ContactSection />

      {/* 07. Colophon & Footer */}
      <GalleryFooter />
    </main>
  );
}
