import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#mission", label: "Our Mission" },
    { href: "#what-to-expect", label: "What to Expect" },
    { href: "#community", label: "Commmunity" },
    { href: "#letter", label: "Letter from Gold" },
    // { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 shadow-md shadow-amber-500/25"
          : "bg-slate-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center space-x-3"
            >
              <div>
                <img
                  src="/images/logoc.png"
                  alt="Dear God Community Church Logo"
                  className="h-10 w-auto"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-slate-200 font-semibold text-base font-sans transition-all duration-300 hover:text-amber-400 hover:border-b-2 hover:border-amber-400 hover:scale-[1.02]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://www.instagram.com/deargodcommunity?igsh=MTFyb2lhZGU4Mmd4eg=="
              target="_blank"
              className="group relative px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/25 active:scale-[0.98]"
            >
              <span className="relative z-10">Join Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-amber-300 transition-all ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-amber-300 transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-amber-300 transition-all ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-amber-400/20 bg-slate-900/95 backdrop-blur-sm">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-4 py-2 text-slate-200 font-semibold font-sans hover:text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-amber-400/20">
                <a
                  href="https://www.instagram.com/deargodcommunity?igsh=MTFyb2lhZGU4Mmd4eg=="
                  target="_blank"
                  className="group relative px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/25 active:scale-[0.98]"
                >
                  <span className="relative z-10">Join Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
