import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Link as LinkIcon, Youtube, Instagram } from 'lucide-react';

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Social Media Automator",
      description: "Automated tool for scheduling and publishing content across multiple social platforms to maximize engagement.",
      tags: ["Automation", "Social Media"],
      color: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30",
      github: "https://github.com/anshthakur-GH/Social-Media-Automator",
    },
    {
      title: "CRUMPTS - Voice Dictation",
      description: "Advanced voice recognition tool leveraging AI for efficient text transcription and editing.",
      tags: ["AI", "Voice Recognition"],
      color: "bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30",
      github: "https://github.com/anshthakur-GH/CRUMPTS-Voice-Dictation",
    },
    {
      title: "EchoVerse",
      description: "AI model designed to recreate human memories through advanced machine learning algorithms.",
      tags: ["AI", "Memory Recreation"],
      color: "bg-gradient-to-br from-emerald-600/20 to-green-600/20 border-emerald-500/30",
      github: "https://github.com/anshthakur-GH/Project-EchoVerse",
    },
    {
      title: "Outlier AI Dashboard",
      description: "Frontend clone of Outlier AI's homepage with a custom Dashboard for the Level Up Vibe Coding Hackathon 2025.",
      tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
      color: "bg-gradient-to-br from-fuchsia-600/20 to-blue-600/20 border-fuchsia-500/30",
      github: "https://github.com/anshthakur-GH/OutlierAi--Dashboard",
    },
    {
      title: "Inventory Management System",
      description: "A basic, beginner-friendly Inventory Management System built with Node.js, Express, MySQL, and EJS.",
      tags: ["Node.js", "Express", "MySQL", "EJS"],
      color: "bg-gradient-to-br from-green-600/20 to-lime-600/20 border-green-500/30",
      github: "https://github.com/anshthakur-GH/Final-Call--IMS",
    },
    {
      title: "Inspirefy",
      description: "A motivational Instagram and YouTube brand focused on daily self-growth content.",
      tags: ["Content Creation", "Personal Growth"],
      color: "bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/30",
      instagram: "https://www.instagram.com/inspirefy_daily/reels/",
      youtube: "https://www.youtube.com/channel/UCmpLoVe7Nc_uyQn5-CZNKMg/",
    },
    {
      title: "7C SignatureScents.com",
      description: "Designed and developed a Shopify store for a premium perfume brand with custom features.",
      tags: ["E-commerce", "Shopify"],
      color: "bg-gradient-to-br from-amber-600/20 to-yellow-600/20 border-amber-500/30",
      link: "https://7csignaturescents.com/",
    },
    {
      title: "SuperiorBasics.com",
      description: "E-commerce platform with minimalist design focusing on essential, high-quality products.",
      tags: ["Web Development", "E-commerce"],
      color: "bg-gradient-to-br from-sky-600/20 to-indigo-600/20 border-sky-500/30",
      link: "https://superiorbasics.com/",
    },
    {
      title: "Chatkhat.com",
      description: "Developed a Shopify store for a pickles business, focusing on e-commerce and user experience.",
      tags: ["Shopify", "E-commerce", "Web Development"],
      color: "bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500/30",
      link: "https://chatkhat.com/",
    },
  ];

  return (
    <section id="projects" className="section-padding -mt-16 bg-xai-black">
      <div className="container mx-auto px-8 pb-12">
        <div ref={ref} className={`max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">My Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my work and contributions across various domains
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {projects.map((project, index) => {
              const useLinkIcon = ["7C SignatureScents.com", "SuperiorBasics.com", "Inspirefy"].includes(project.title);
              // Determine main URL for the card
              let mainUrl = project.github || project.link || project.youtube || project.instagram || '#';
              return (
                <a
                  key={project.title}
                  href={mainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-2xl p-3 md:p-6 border ${project.color} card-hover group relative overflow-hidden flex flex-col justify-between`}
                  tabIndex={0}
                >
                  <div className="absolute inset-px bg-gradient-to-br from-xai-blue/30 to-xai-purple/30 opacity-0 group-hover:opacity-30 transition-opacity z-0"></div>
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xs md:text-xl font-bold mb-2 md:mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-xs md:text-base mb-2 md:mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mt-auto mb-2 md:mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-0.5 md:px-3 md:py-1 bg-white/10 rounded-full text-[10px] md:text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-full flex justify-center mt-2 gap-2 md:gap-4">
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                          <Github className="w-1.5 h-1.5 md:w-3 md:h-3 text-gray-400 hover:text-white transition-colors" />
                        </a>
                      ) : project.instagram && project.youtube ? (
                        <>
                          <a href={project.youtube} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                            <Youtube className="w-1.5 h-1.5 md:w-3 md:h-3 text-gray-400 hover:text-red-500 transition-colors" />
                          </a>
                          <a href={project.instagram} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                            <Instagram className="w-1.5 h-1.5 md:w-3 md:h-3 text-gray-400 hover:text-pink-500 transition-colors" />
                          </a>
                        </>
                      ) : project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                          <LinkIcon className="w-1.5 h-1.5 md:w-3 md:h-3 text-gray-400 hover:text-white transition-colors" />
                        </a>
                      ) : useLinkIcon ? (
                        <LinkIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-white transition-colors" />
                      ) : (
                        <Github className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-white transition-colors" />
                      )}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
