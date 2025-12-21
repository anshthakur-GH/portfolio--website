import React, { useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    if (subtitleRef.current) {
      subtitleRef.current.classList.add('animate-fade-in', 'animation-delay-300');
    }
    if (ctaRef.current) {
      ctaRef.current.classList.add('animate-fade-in', 'animation-delay-600');
    }
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center pt-8 pb-4 sm:pt-12 sm:pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-background z-[-2]"></div>
      <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[70%] rounded-full bg-orange-500/10 blur-[120px] z-[-1]"></div>
      <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-orange-600/10 blur-[100px] z-[-1]"></div>

      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 opacity-0"
          >
            Hi, I'm <span className="text-gradient">ANSH THAKUR</span><br />
          </h1>

          <p
            ref={subtitleRef}
            className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-10 leading-relaxed max-w-3xl mx-auto opacity-0"
          >
            My unmatched perspicacity coupled with my sheer indefatigability makes me a feared opponent in any realm of human endeavour.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-row items-center justify-center gap-2 sm:gap-4 opacity-0"
          >
            <HashLink
              to="#projects"
              smooth
              className="px-4 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 transition-opacity text-white font-medium text-sm sm:text-base min-w-[80px] text-center shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
              Projects
            </HashLink>
            <a
              href="https://drive.google.com/file/d/1d4GKj0uDi0eDugO7hjxFBcUz1fXSEDfR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 transition-opacity text-white font-medium text-sm sm:text-base min-w-[80px] text-center shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
