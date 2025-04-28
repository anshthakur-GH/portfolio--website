
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import InspirefySection from '@/components/InspirefySection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Ansh Thakur";
  }, []);

  return (
    <div className="bg-xai-black min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <InspirefySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
