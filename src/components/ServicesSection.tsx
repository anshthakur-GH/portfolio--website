import React from 'react';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions and implementations for various business needs.",
    },
    {
      title: "AI Automation Tools",
      description: "Development of automated solutions powered by artificial intelligence.",
    },
    {
      title: "E-commerce Development",
      description: "Complete store setup and consultation for online businesses.",
    },
    {
      title: "Content Creation",
      description: "Strategic content development for brands and personal growth.",
    },
    {
      title: "Brand Building",
      description: "Comprehensive brand development and growth strategies.",
    },
    {
      title: "AI Tools and Research",
      description: "Cutting-edge AI research and tool development for specific needs.",
    },
  ];

  return (
    <section id="services" className="section-padding -mt-16 bg-xai-darkgray">
      <div className="container mx-auto px-8 pb-12">
        <div ref={ref} className={`max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Solutions I Provide</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional services designed to help individuals and businesses achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative bg-xai-black border border-white/10 rounded-2xl p-3 md:p-8 h-full card-hover"
              >
                <span className="absolute -top-2 -left-2 bg-gradient-to-r from-xai-blue to-xai-purple text-white text-xs font-bold rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  {index + 1}
                </span>
                <h3 className="text-xs md:text-xl font-bold mb-2 md:mb-4">{service.title}</h3>
                <p className="text-gray-400 text-xs md:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
