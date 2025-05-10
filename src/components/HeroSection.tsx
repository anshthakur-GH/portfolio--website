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
    <section className="relative min-h-[70vh] flex flex-col justify-center pt-12 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-xai-black z-[-2]"></div>
      <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[70%] rounded-full bg-xai-blue/10 blur-[120px] z-[-1]"></div>
      <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-xai-purple/10 blur-[100px] z-[-1]"></div>
      
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0"
          >
            Hi, I'm <span className="text-gradient">ANSH THAKUR</span><br />
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto opacity-0"
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
              className="px-4 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-xai-blue to-xai-purple hover:opacity-90 transition-opacity text-white font-medium text-base sm:text-lg min-w-[80px] text-center"
            >
              Projects
            </HashLink>
            <a 
              href="https://drive.google.com/file/d/1d3jplTcNsRUSOtlnS8S-k51PGllmqb_v/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-xai-blue to-xai-purple hover:opacity-90 transition-opacity text-white font-medium text-base sm:text-lg min-w-[80px] text-center"
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
