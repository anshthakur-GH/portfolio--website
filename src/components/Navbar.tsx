import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-md border-b border-border/10"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <HashLink
            to="/#"
            className="text-2xl font-bold tracking-tighter text-white"
          >
            ANSH THAKUR<span className="text-primary">.</span>
          </HashLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {["About", "Skills", "Services", "Projects"].map((item) => (
              <HashLink
                key={item}
                to={`/#${item.toLowerCase()}`}
                className="px-5 py-2 rounded-full bg-secondary card-hover text-foreground hover:text-primary transition-colors"
              >
                {item}
              </HashLink>
            ))}
            <HashLink
              to="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 transition-opacity text-white font-medium shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
              Contact Me
            </HashLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card rounded-lg animate-fade-in border border-border">>
            <div className="flex flex-col space-y-4 px-4">
              {["About", "Skills", "Services", "Projects"].map((item) => (
                <HashLink
                  key={item}
                  to={`/#${item.toLowerCase()}`}
                  className="text-foreground hover:text-primary transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </HashLink>
              ))}
              <HashLink
                to="#contact"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Me
              </HashLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
