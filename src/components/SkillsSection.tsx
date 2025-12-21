import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Code, User, Image, Brain, Search } from 'lucide-react';

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    {
      title: "AI Automation",
      icon: <Brain className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "AI Tools and Research",
      icon: <Search className="h-6 w-6" />,
      color: "from-violet-600 to-indigo-600",
    },
    {
      title: "AI Driven Development",
      icon: <span className="inline-block font-bold text-primary text-lg">AI</span>,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Shopify Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <section id="skills" className="section-padding -mt-16 bg-background">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 overflow-hidden">
        <div ref={ref} className={`w-full mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Expertise & Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A diverse skill set built through self-education, practical experience, and continuous improvement
            </p>
          </div>

          <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 relative border border-white/10 rounded-xl overflow-hidden bg-card p-4 hover:border-white/30 transition-all card-hover flex flex-col items-center justify-center"
              >
                <div className={`absolute -bottom-2 -right-2 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br ${skill.color} rounded-full opacity-10 blur-lg`}></div>
                <div className="relative z-10 w-full">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="text-primary">{React.cloneElement(skill.icon, { className: 'h-5 w-5' })}</div>
                    <h3 className="text-xs sm:text-sm font-medium text-center">{skill.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              height: 6px;
            }
            .hide-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.05);
              border-radius: 3px;
            }
            .hide-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.2);
              border-radius: 3px;
            }
            .hide-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 255, 255, 0.3);
            }
            .hide-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
