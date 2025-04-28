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
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className={`max-w-5xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Driven by Ambition &<br />Inspired by Excellence</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-xai-blue/20 to-xai-purple/20 p-1">
                <img 
                  src="/lovable-uploads/c6424705-7da7-451d-bbab-2f6717cb93f8.png" 
                  alt="Ansh at Startup Mahakumbh" 
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm currently pursuing B.Tech in Computer Science (AI specialization) and working on cutting-edge AI projects.
                I'm also building my personal brand called 'INSPIREFY,' focused on inspiring and empowering individuals through innovation and motivation.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Passionate about merging technology with real-world impact.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="border border-white/10 rounded-lg p-4 md:p-6 bg-xai-black">
                  <h3 className="font-bold text-2xl md:text-3xl text-gradient mb-1">3+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="border border-white/10 rounded-lg p-4 md:p-6 bg-xai-black">
                  <h3 className="font-bold text-2xl md:text-3xl text-gradient mb-1">10+</h3>
                  <p className="text-gray-400">Projects Completed</p>
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
