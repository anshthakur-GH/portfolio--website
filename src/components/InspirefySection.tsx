import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Youtube, Instagram, X as XIcon } from 'lucide-react';

const InspirefySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section-padding -mt-24 bg-gradient-to-br from-xai-darkgray/80 to-xai-gray/50">
      <div className="container mx-auto px-4 sm:px-8 pb-8 sm:pb-12">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8 sm:mb-16">
          My Brand - Inspirefy
        </h2>
        
        <div 
          ref={ref} 
          className={`max-w-5xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <div className="relative bg-xai-black border border-white/10 rounded-2xl p-4 sm:p-8 md:p-16">
            <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 sm:gap-0 sm:space-x-16 mb-6 sm:mb-8">
              <a 
                href="https://www.youtube.com/channel/UCmpLoVe7Nc_uyQn5-CZNKMg"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform hover:scale-110 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                  <Youtube className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </a>
              <a 
                href="https://www.instagram.com/inspirefy_daily"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform hover:scale-110 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </a>
              <a 
                href="https://x.com/inspirefy_daily"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform hover:scale-110 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300">
                  <XIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </a>
            </div>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-center">
              Achieved over 500,000+ views across platforms with an authentic and engaged following in just 4 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirefySection;
