import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Image } from 'lucide-react';

const AboutSection = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="section-padding -mt-16 bg-xai-darkgray">
      <div className="container mx-auto px-8 pb-12">
        <div ref={sectionRef} className={`max-w-5xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Driven by Ambition &<br />
              Inspired by Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-5/6 sm:w-full max-w-[180px] sm:max-w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-xai-blue/20 to-xai-purple/20 p-1">
                <img 
                  src="/images/about-me.jpg" 
                  alt="Ansh at Startup Mahakumbh" 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
              I'm an <span className="text-gradient">AI-driven developer</span> and <span className="text-gradient">AI Automation Developer</span> pursuing a B.Tech in Artificial Intelligence, crafting innovative AI projects that push boundaries. As a skilled <span className="text-gradient">Shopify Developer</span>, I've built stunning, high-impact e-commerce websites for brands, blending creativity with functionality.

I'm also the founder of <span className="text-gradient">UNFAZED</span>, a brand dedicated to fearless innovation and empowerment. Through my Instagram and YouTube channels under Inspirefy, I've inspired over  <span className="text-gradient"> 500,000</span> viewers with content that sparks motivation and showcases tech-driven solutions.
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6">
                <div className="border border-white/10 rounded-lg p-2 sm:p-4 md:p-6 bg-xai-black">
                  <h3 className="font-bold text-lg sm:text-2xl md:text-3xl text-gradient mb-1">3+</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Years Experience</p>
                </div>
                <div className="border border-white/10 rounded-lg p-2 sm:p-4 md:p-6 bg-xai-black">
                  <h3 className="font-bold text-lg sm:text-2xl md:text-3xl text-gradient mb-1">10+</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
