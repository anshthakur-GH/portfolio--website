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
              Built Different & Born UNFAZED
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-5/6 sm:w-full max-w-[180px] sm:max-w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-xai-blue/20 to-xai-purple/20 p-1">
                <img 
                  src="/images/about-me.png" 
                  alt="Ansh at Startup Mahakumbh" 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
    I am an <span className="text-gradient">AI Automation Developer</span> and <span className="text-gradient">n8n expert</span>, specializing in engineering systems that generate measurable business growth and high-level efficiency. I deploy scalable, revenue-focused workflows using advanced technologies like n8n, RAG agents, and full-stack development.

    I am the Founder of <span className="text-gradient">UNFAZED</span>, a technical agency dedicated to solving real business problems. I build scalable, revenue-focused workflows using cutting-edge technologies like 
    <span className="text-gradient"> n8n</span>. As the Founder of UNFAZED, my focus is on fearless innovation and applying a low-capital, high-hustle approach to deliver maximum efficiency.
</p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6">
                <div className="border border-white/10 rounded-lg p-2 sm:p-4 md:p-6 bg-xai-black">
                  <h3 className="font-bold text-lg sm:text-2xl md:text-3xl text-gradient mb-1">1.5+</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Years Experience</p>
                </div>
                <div className="border border-white/10 rounded-lg p-2 sm:p-4 md:p-6 bg-xai-black">
                  <h3 className="font-bold text-lg sm:text-2xl md:text-3xl text-gradient mb-1">20+</h3>
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
