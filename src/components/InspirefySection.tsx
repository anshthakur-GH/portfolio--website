import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Youtube, Instagram } from 'lucide-react';

const InspirefySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section-padding -mt-24 bg-gradient-to-br from-xai-darkgray/80 to-xai-gray/50">
      <div className="container mx-auto px-8 pb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16">
          My Brand - Inspirefy
        </h2>
        
        <div 
          ref={ref} 
          className={`max-w-5xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <div className="relative bg-xai-black border border-white/10 rounded-2xl p-16">
            <div className="flex justify-center space-x-16 mb-8">
              <a 
                href="https://www.youtube.com/channel/UCmpLoVe7Nc_uyQn5-CZNKMg"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform hover:scale-110 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                  <Youtube className="w-12 h-12 text-white" />
                </div>
              </a>
              <a 
                href="https://www.instagram.com/inspirefy_daily"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform hover:scale-110 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  <Instagram className="w-12 h-12 text-white" />
                </div>
              </a>
            </div>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto text-center">
              Achieved over 500,000+ views across platforms with an authentic and engaged following in just 4 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirefySection;
