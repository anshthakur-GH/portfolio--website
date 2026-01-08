import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Link as LinkIcon, Youtube, Instagram } from 'lucide-react';

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: "AI + Automation Projects",
      projects: [
        {
          title: "Document Automation System",
          description: "(Won SIH hackathon) System that handles all type of document and make croos communication with required departmetn suinn NLp (NER )model",
          tags: ["AI", "NLP", "Automation"],
          color: "bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border-purple-500/30",
          status: "Completed",
        },
        {
          title: "Social Media Automator",
          description: "Automated tool for scheduling and publishing content across multiple social platforms to maximize engagement.",
          tags: ["Automation", "Social Media"],
          color: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30",
          status: "Completed",
        },
        {
          title: "Gamdom -ve Tweet filtration AI agent",
          description: "AI agent specialized in detecting and filtering negative sentiment tweets for brand reputation management.",
          tags: ["AI", "NLP", "Automation"],
          color: "bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/30",
          status: "Completed",
        },
        {
          title: "DQ ventures onbording, client management agents",
          description: "Suite of automated AI agents handling client onboarding workflows and ongoing client relationship management.",
          tags: ["AI", "Automation", "CRM"],
          color: "bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border-indigo-500/30",
          status: "Completed",
        },
        {
          title: "Fit with pari Profile creationn agent",
          description: "Intelligent agent for user profile creation, initial health assessment, and automated user onboarding.",
          tags: ["AI", "Health", "Automation"],
          color: "bg-gradient-to-br from-teal-600/20 to-emerald-600/20 border-teal-500/30",
          status: "Completed",
        }
      ]
    },
    {
      title: "Development Projects",
      projects: [
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
          title: "Outlier AI Dashboard",
          description: "Frontend clone of Outlier AI's homepage with a custom Dashboard for the Level Up Vibe Coding Hackathon 2025.",
          tags: ["React", "Tailwind CSS", "Chart.js"],
          color: "bg-gradient-to-br from-fuchsia-600/20 to-blue-600/20 border-fuchsia-500/30",
          github: "https://github.com/anshthakur-GH/OutlierAi--Dashboard",
          status: "Completed",
        },
        {
          title: "Unfazed AI Website",
          description: "Official agency website showcasing AI solutions, services, and portfolio with modern, high-performance design.",
          tags: ["React", "Tailwind CSS", "Web"],
          color: "bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30",
          link: "https://unfazed-ai.online/",
          status: "Completed",
        },
        {
          title: "Unfazed AI Workspace",
          description: "Comprehensive internal workspace and client portal for managing agency operations and deliverables.",
          tags: ["React", "Dashboard", "SaaS"],
          color: "bg-gradient-to-br from-slate-800/50 to-gray-800/50 border-orange-500/30",
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
        }
      ]
    },
    {
      title: "Shopify Projects",
      projects: [
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
        },
        {
          title: "Chatkhat.com",
          description: "Vibrant Shopify e-commerce store specializing in traditional and gourmet pickles.",
          tags: ["Shopify", "E-commerce"],
          color: "bg-gradient-to-br from-lime-500/20 to-yellow-500/20 border-lime-500/30",
          link: "https://chatkhat.com",
          status: "Completed",
        }
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding -mt-16 bg-background">
      <div className="container mx-auto px-8 pb-12">
        <div ref={ref} className={`max-w-6xl mx-auto ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">My Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my work and contributions across various domains
            </p>
          </div>

          <div className="space-y-20">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-orange-500 border-l-4 border-orange-500 pl-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                  {category.projects.map((project, index) => {
                    const useLinkIcon = [
                      "7C SignatureScents.com",
                      "SuperiorBasics.com",
                      "Unfazed AI Website",
                      "Chatkhat.com"
                    ].includes(project.title);

                    // @ts-ignore
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
                            {project.title === "Inventory Management System" || project.title === "LifeLane" ? (
                              <div className="flex gap-3">
                                {/* @ts-ignore */}
                                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                                  <Github className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-white transition-colors" />
                                </a>
                                {/* @ts-ignore */}
                                <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                                  <LinkIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-primary transition-colors" />
                                </a>
                              </div>
                            ) :
                              // @ts-ignore
                              project.github ? (
                                // @ts-ignore
                                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                                  <Github className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-white transition-colors" />
                                </a>
                              ) :
                                // @ts-ignore
                                project.instagram && project.youtube ? (
                                  <div className="flex gap-3">
                                    {/* @ts-ignore */}
                                    <a href={project.youtube} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                                      <Youtube className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-red-500 transition-colors" />
                                    </a>
                                    {/* @ts-ignore */}
                                    <a href={project.instagram} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                                      <Instagram className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-pink-500 transition-colors" />
                                    </a>
                                  </div>
                                ) :
                                  // @ts-ignore
                                  project.link ? (
                                    // @ts-ignore
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} tabIndex={-1}>
                                      <LinkIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-white transition-colors" />
                                    </a>
                                  ) : useLinkIcon ? (
                                    <LinkIcon className="w-5 h-5 md:w-7 md:h-7 text-gray-400 hover:text-white transition-colors" />
                                  ) : null}
                          </div>
                        </div>
                      </a>
                    );
                  })}
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
