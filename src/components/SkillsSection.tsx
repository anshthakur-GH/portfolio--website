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
      title: "AI DEV",
      icon: <span className="inline-block font-bold text-xai-blue text-lg">AI</span>,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Java Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "E-commerce Store Development",
      icon: <Briefcase className="h-6 w-6" />,
      color: "from-orange-500 to-amber-400",
    },
    {
      title: "Content Creation",
      icon: <Image className="h-6 w-6" />,
      color: "from-red-500 to-rose-400",
    },
  ];

  return (
    <section id="skills" className="section-padding -mt-16 bg-xai-black">
      <div className="container mx-auto px-8 pb-12">
        <div ref={ref} className={`max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Expertise & Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A diverse skill set built through self-education, practical experience, and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative border border-white/10 rounded-xl overflow-hidden bg-xai-darkgray p-3 sm:p-6 hover:border-white/30 transition-all card-hover"
              >
                <div className={`absolute -bottom-2 -right-2 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br ${skill.color} rounded-full opacity-10 blur-lg`}></div>
                <div className="relative z-10">
                  <div className="mb-2 sm:mb-4 text-xai-blue">{skill.icon}</div>
                  <h3 className="text-xs sm:text-lg font-bold mb-1 sm:mb-2">{skill.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
