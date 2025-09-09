import React, { useState, useEffect } from "react";

const Mission = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };
  
  return (
    <>
      {/* Define CSS animations and custom styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
          
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes goldShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          .fade-in-up {
            animation: fadeInUp 1.2s ease-out forwards;
          }
          
          .fade-in-delay-1 {
            opacity: 0;
            animation: fadeInUp 1.2s ease-out 0.3s forwards;
          }
          
          .fade-in-delay-2 {
            opacity: 0;
            animation: fadeInUp 1.2s ease-out 0.6s forwards;
          }
          
          .gold-shimmer {
            background: linear-gradient(90deg, #d4af37, #f4e19c, #d4af37);
            background-size: 200% 100%;
            animation: goldShimmer 3s infinite;
          }
          
          .serif-font {
            font-family: 'Playfair Display', serif;
          }
          
          .text-shadow-gold {
            text-shadow: 2px 2px 4px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.1);
          }
          
          .ornamental-border {
            position: relative;
          }
          
          .ornamental-border::before,
          .ornamental-border::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 40px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #d4af37, transparent);
            transform: translateY(-50%);
          }
          
          @media (min-width: 640px) {
            .ornamental-border::before,
            .ornamental-border::after {
              width: 60px;
            }
          }
          
          .ornamental-border::before {
            left: -50px;
          }
          
          .ornamental-border::after {
            right: -50px;
          }
          
          @media (min-width: 640px) {
            .ornamental-border::before {
              left: -80px;
            }
            .ornamental-border::after {
              right: -80px;
            }
          }
          
          .classic-texture {
            background-image: 
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
            background-size: 20px 20px;
          }
        `}
      </style>

      <section
        className="relative min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 overflow-hidden "
        id="mission"
      >
        {/* Background Image with Classic Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/images/mission.jpg')`,
          }}
        ></div>

        {/* Classic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 sm:from-slate-900/80 via-slate-900/70 to-slate-900/80 z-5"></div>
        <div className="classic-texture absolute inset-0 z-5"></div>

        {/* Ornamental Corner Flourishes */}
        <div className="hidden sm:block absolute top-4 sm:top-8 left-4 sm:left-8 w-12 sm:w-20 h-12 sm:h-20 border-l-2 border-t-2 border-amber-400/40 z-10"></div>
        <div className="hidden sm:block absolute top-4 sm:top-8 right-4 sm:right-8 w-12 sm:w-20 h-12 sm:h-20 border-r-2 border-t-2 border-amber-400/40 z-10"></div>
        <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-12 sm:w-20 h-12 sm:h-20 border-l-2 border-b-2 border-amber-400/40 z-10"></div>
        <div className="hidden sm:block absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-12 sm:w-20 h-12 sm:h-20 border-r-2 border-b-2 border-amber-400/40 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 max-w-full sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="max-w-full sm:max-w-4xl md:max-w-5xl mx-auto">
            {/* Elegant Tagline */}
            <div className="mb-6 sm:mb-8 fade-in-up">
              <p className="serif-font text-amber-200/90 text-base sm:text-lg md:text-xl italic font-normal tracking-widest">
                A Sacred Invitation
              </p>
              <div className="mt-2 w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto"></div>
            </div>

            {/* Main Hero Title */}
            <div className="mb-4 sm:mb-6 fade-in-delay-1">
              <h1 className="serif-font ornamental-border text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight sm:leading-snug tracking-wider uppercase text-shadow-gold">
                How Can We
              </h1>
              <h1
                className="serif-font text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight sm:leading-snug tracking-wider uppercase mt-1 sm:mt-2"
                style={{
                  textShadow:
                    "0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 255, 255, 0.4), 3px 3px 6px rgba(0, 0, 0, 0.9), -3px -3px 6px rgba(0, 0, 0, 0.9)",
                }}
              >
                Pray For You?
              </h1>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-8 sm:mb-12 fade-in-delay-1">
              <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <div className="mx-4 sm:mx-6 flex space-x-1 sm:space-x-2">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full"></div>
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-amber-300 rounded-full"></div>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full"></div>
              </div>
              <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </div>

            {/* Secondary Heading */}
            <div className="mb-12 sm:mb-16 fade-in-delay-2">
              <h2 className="serif-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-100 mb-3 sm:mb-4 tracking-wide">
                Our Sacred Mission & Divine Calling
              </h2>
              <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 mx-auto rounded-full"></div>
            </div>

            {/* Mission Statement Card */}
            <div className="backdrop-blur-md bg-slate-900/30 border-2 border-amber-400/30 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl fade-in-delay-2 relative overflow-hidden">
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
                    backgroundSize: "30px 30px",
                  }}
                ></div>
              </div>

              <div className="relative z-10">
                <p className="serif-font text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-slate-100 font-normal tracking-wide mb-6 sm:mb-8">
                  <span className="text-amber-300 font-semibold">Dear God</span>{" "}
                  is devoted to{" "}
                  <span className="text-amber-200 font-semibold italic">
                    standing in the sacred gap
                  </span>{" "}
                  through fervent prayer and compassionate acts of giving.
                </p>

                <p className="serif-font text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-200 font-light tracking-wide">
                  Our divine mission is to{" "}
                  <span className="text-amber-200 font-semibold italic">
                    intercede for individuals, families, and nations
                  </span>
                  , sharing encouragement and unwavering faith, so that precious
                  lives are{" "}
                  <span className="text-amber-200 font-semibold italic">
                    strengthened and perfectly aligned
                  </span>{" "}
                  with God's magnificent purpose for eternity.
                </p>

                {/* Elegant Call to Action */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto px-4">
                  {/* <button
              className={`group relative w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold text-base lg:text-lg rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-amber-500/30 active:scale-[0.95] magnetic-button transition-all duration-1000 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <span className="relative z-10 text-white">
                Submit Prayer Request
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/20 to-amber-400/20 animate-pulse-button"></div>
            </button> */}

                  <a
                    href="https://x.com/deargodcommunit?t=YHtE4Zq4wmbDvOMgoyunJQ&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative mt-8 w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 border-2 border-amber-400/50 text-amber-300 font-semibold text-base lg:text-lg rounded-xl backdrop-blur-sm transition-all duration-500 hover:border-amber-400 hover:bg-amber-400/10 hover:scale-[1.05] active:scale-[0.95] magnetic-button transition-all duration-1000 ease-out ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: "1400ms" }}
                  >
                    <span className="relative z-10 bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-300">
                      Join Our Community
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Floating Elements */}
        <div className="absolute top-1/4 left-8 sm:left-16 w-1 h-1 bg-amber-400/40 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-8 sm:right-20 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-300/30 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-2/3 left-12 sm:left-24 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-amber-500/50 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-8 sm:right-16 w-1 h-1 bg-amber-400/40 rounded-full animate-pulse"
          style={{ animationDelay: "4.5s" }}
        ></div>

        {/* Classic Side Gradients */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-slate-900/50 sm:from-slate-900/40 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900/50 sm:from-slate-900/40 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default Mission;
