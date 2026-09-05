
"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Hero />

      <ProjectShowcase />

      <AboutSection />

      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
