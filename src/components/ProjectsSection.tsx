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
      title: "LifeLane",
      description: "IoT device that uses AI to enable private vehicles to act as emergency vehicles during emergencies.",
      tags: ["AI", "IoT"],
      color: "bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border-cyan-500/30",
      github: "https://github.com/anshthakur-GH/LifeLane",
      link: "https://lifelane-unfazed-4asf.onrender.com",
      status: "Under Work",
    },
    {
      title: "Pathforge",
      description: "A platform where students can find all career options, roadmaps, communities, colleges, and much more in one place.",
      tags: ["TypeScript", "ReactJS", "MongoDB"],
      color: "bg-gradient-to-br from-yellow-600/20 to-green-600/20 border-yellow-500/30",
      github: "https://github.com/anshthakur-GH/PathForge",
      status: "Under Work",
    },
    {
      title: "Social Media Automator",
      description: "Automated tool for scheduling and publishing content across multiple social platforms to maximize engagement.",
      tags: ["Automation", "Social Media"],
      color: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30",
      github: "https://github.com/anshthakur-GH/Social-Media-Automator",
      status: "Completed",
    },
    {
      title: "CRUMPTS - Voice Dictation",
      description: "Advanced voice recognition tool leveraging AI for efficient text transcription and editing.",
      tags: ["AI","Voice Dictation", "OCR" ],
      color: "bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30",
      github: "https://github.com/anshthakur-GH/CRUMPTS-Voice-Dictation",
      status: "Under Work",
    },
    {
      title: "EchoVerse",
      description: "AI model designed to recreate human memories through advanced machine learning algorithms.",
      tags: ["AI", "Machine Learning", "Deep Learning"],
      color: "bg-gradient-to-br from-emerald-600/20 to-green-600/20 border-emerald-500/30",
      github: "https://github.com/anshthakur-GH/Project-EchoVerse",
      status: "Under Work",
    },
    {
      title: "Socratix",
      description: "AI-Powered Socratic Learning Platform that enhances educational experiences through intelligent questioning and adaptive learning.",
      tags: ["AI", "ML", "NLP"],
      color: "bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border-indigo-500/30",
      github: "https://github.com/anshthakur-GH/Socratix",
      status: "Under Work",
    },
    {
      title: "Outlier AI Dashboard",
      description: "Frontend clone of Outlier AI's homepage with a custom Dashboard for the Level Up Vibe Coding Hackathon 2025.",
      tags: [ "React", "Tailwind CSS", "Chart.js"],
      color: "bg-gradient-to-br from-fuchsia-600/20 to-blue-600/20 border-fuchsia-500/30",
      github: "https://github.com/anshthakur-GH/OutlierAi--Dashboard",
      status: "Completed",
    },
    {
      title: "Inventory Management System",
      description: "A basic, beginner-friendly Inventory Management System built with Node.js, Express, MySQL, and EJS.",
      tags: ["Node.js", "Express", "MySQL", "EJS"],
      color: "bg-gradient-to-br from-green-600/20 to-lime-600/20 border-green-500/30",
      github: "https://github.com/anshthakur-GH/Final-Call--IMS",
      link: "https://ims-unfazed.up.railway.app/login",
      status: "Completed",
    },
    {
      title: "Inspirefy",
      description: "A motivational Instagram and YouTube brand focused on daily self-growth content.",
      tags: ["Content Creation", "Personal Growth"],
      color: "bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/30",
      instagram: "https://www.instagram.com/inspirefy_daily/reels/",
      youtube: "https://www.youtube.com/channel/UCmpLoVe7Nc_uyQn5-CZNKMg/",
      status: "Completed",
    },
    {
      title: "7C SignatureScents.com",
      description: "Designed and developed a Shopify store for a premium perfume brand with custom features.",
      tags: ["E-commerce", "Shopify", "Canva"],
      color: "bg-gradient-to-br from-amber-600/20 to-yellow-600/20 border-amber-500/30",
      link: "https://7csignaturescents.com/",
      status: "Completed",
    },
    {
      title: "SuperiorBasics.com",
      description: "E-commerce platform with minimalist design focusing on essential, high-quality products.",
      tags: ["E-commerce", "Shopify", "Canva"],
      color: "bg-gradient-to-br from-sky-600/20 to-indigo-600/20 border-sky-500/30",
      link: "https://superiorbasics.com/",
      status: "Completed",
    }
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
              let mainUrl = project.github || project.link || project.youtube || project.instagram || '#';
              
              return (
                <a
                  key={index}
                  href={mainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block relative rounded-2xl overflow-hidden border ${project.color} p-3 sm:p-6 hover:scale-[1.02] transition-all duration-300 card-hover h-full`}
                >
                  {/* Status Dot */}
                  <span className={`absolute top-3 right-3 z-20 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-md
                    ${project.status === 'Completed' ? 'bg-green-500' : 'bg-red-500'}
                  `} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-sm sm:text-xl font-bold mb-2 sm:mb-4">{project.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-white/5 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto pt-4 flex justify-center items-end">
                      {project.title === "Inventory Management System" || project.title === "Lifelance" ? (
                        <div className="flex gap-3">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                            <Github className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-white transition-colors" />
                          </a>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                            <LinkIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-xai-blue transition-colors" />
                          </a>
                        </div>
                      ) : project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                          <Github className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-white transition-colors" />
                        </a>
                      ) : project.instagram && project.youtube ? (
                        <div className="flex gap-3">
                          <a href={project.youtube} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                            <Youtube className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-red-500 transition-colors" />
                          </a>
                          <a href={project.instagram} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                            <Instagram className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-pink-500 transition-colors" />
                          </a>
                        </div>
                      ) : project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                          <LinkIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-white transition-colors" />
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
