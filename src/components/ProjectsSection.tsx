import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "SOCIAL MEDIA POST AUTOMATOR",
      description: "Automated tool for scheduling and publishing content across multiple social platforms to maximize engagement.",
      tags: ["Automation", "Social Media"],
      color: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30",
    },
    {
      title: "CRUMPTS - AI VOICE DICTATION TOOL",
      description: "Advanced voice recognition tool leveraging AI for efficient text transcription and editing.",
      tags: ["AI", "Voice Recognition"],
      color: "bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30",
    },
    {
      title: "ECHOVERSE",
      description: "AI model designed to recreate human memories through advanced machine learning algorithms.",
      tags: ["AI", "Memory Recreation"],
      color: "bg-gradient-to-br from-emerald-600/20 to-green-600/20 border-emerald-500/30",
    },
    {
      title: "Inspirefy",
      description: "A motivational Instagram and YouTube brand focused on daily self-growth content.",
      tags: ["Content Creation", "Personal Growth"],
      color: "bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/30",
    },
    {
      title: "7C Signature Scents",
      description: "Designed and developed a Shopify store for a premium perfume brand with custom features.",
      tags: ["E-commerce", "Shopify"],
      color: "bg-gradient-to-br from-amber-600/20 to-yellow-600/20 border-amber-500/30",
    },
    {
      title: "SUPERIORBASICS.COM",
      description: "E-commerce platform with minimalist design focusing on essential, high-quality products.",
      tags: ["Web Development", "E-commerce"],
      color: "bg-gradient-to-br from-sky-600/20 to-indigo-600/20 border-sky-500/30",
    },
  ];

  return (
    <section id="projects" className="section-padding -mt-16 bg-xai-black">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">My Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my work and contributions across various domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-6 border ${project.color} card-hover group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-xai-blue/30 to-xai-purple/30 opacity-0 group-hover:opacity-30 transition-opacity z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
