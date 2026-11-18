import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "Sharang Ravindran — Fine-Art Portraiture & Chiaroscuro",
  description:
    "Official portfolio of Sharang Ravindran, professional photographer in Kerala specializing in high-beam chiaroscuro studio portraits, dark aesthetic model studies, and Kerala coastal photography.",
  keywords: [
    "Sharang Ravindran",
    "Photographer Kerala",
    "Studio Portraits",
    "Chiaroscuro Photography",
    "Dark Aesthetic Photography",
    "High-Beam Portraits",
    "Fashion Photography Kerala",
    "Kerala Beach Photography",
  ],
  authors: [{ name: "Sharang Ravindran" }],
  openGraph: {
    title: "Sharang Ravindran — Fine-Art Portraiture & Chiaroscuro",
    description: "Capturing expressive, timeless portraits through the drama of light and shadow.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-paper text-obsidian min-h-screen selection:bg-linen selection:text-umber bg-grain">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
