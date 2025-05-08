import React from 'react';
import { X as XIcon, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-xai-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <a href="/" className="text-2xl font-bold tracking-tighter text-white">
              ANSH THAKUR<span className="text-xai-blue"></span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md mx-auto">
              Building a future of freedom, wealth, and impact through entrepreneurship and self-improvement.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              <a href="https://x.com/anshthakur_x" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">X (formerly Twitter)</span>
                <XIcon className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/anshthakur_ig/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://github.com/anshthakur-GH" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ansh-singh-431425299/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm">
                &copy; {year} Ansh Thakur. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
