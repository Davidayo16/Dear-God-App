import React, { useState, useEffect } from "react";

const Hero = () => {
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
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-10 sm:pt-10 md:pt-10 lg:pt-10 min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced ambient lighting effects with drift animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-amber-500/8 rounded-full blur-3xl animate-drift-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 lg:w-96 lg:h-96 bg-blue-500/4 rounded-full blur-3xl animate-drift-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/3 rounded-full blur-2xl animate-pulse-gentle"></div>

        {/* Dynamic spotlight following cursor */}
        <div
          className="absolute w-96 h-96 bg-amber-400/5 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Enhanced grid pattern with subtle animation */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0 animate-grid-shift"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] animate-noise"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Main content container with entrance animation */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex items-center py-10 pt-24 sm:py-18 md:py-18">
        <div className="w-full max-w-7xl mx-auto text-center">
          {/* Hero title with enhanced typography and stagger animation */}
          <div className="mb-4 lg:mb-10">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white mb-6 leading-[0.85] tracking-tight">
              <span
                className={`inline-block transition-all duration-1000 ease-out ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                How Can We
              </span>
              <span
                className={`block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm animate-text-glow transition-all duration-1000 ease-out ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Pray for You
              </span>
              <span
                className={`block mt-2 transition-all duration-1000 ease-out ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                Today?
              </span>
            </h1>
            <div
              className={`w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full shadow-lg shadow-amber-500/30 animate-shimmer transition-all duration-1000 ease-out ${
                isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            ></div>
          </div>

          {/* Enhanced description with original content */}
          <div className="mb-12 max-w-4xl mx-auto px-4">
            <p
              className={`text-lg sm:text-xl lg:text-1xl text-slate-300 leading-relaxed font-light tracking-wide transition-all duration-1000 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              Dear God is a place of fellowship and faith. Here, burdens are
              carried together in prayer, joy is multiplied through
              encouragement, and hope is stirred as we believe God for greater
              things. Through special journeys like the 100 Days of Prayer for
              2026, we walk hand in hand, seeking God's heart and lifting one
              another in love.
            </p>
          </div>

          {/* Enhanced CTA buttons with magnetic and ripple effects */}
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
              href="https://www.facebook.com/share/1BDcMLfNyy/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 border-2 border-amber-400/50 text-amber-300 font-semibold text-base lg:text-lg rounded-xl backdrop-blur-sm transition-all duration-500 hover:border-amber-400 hover:bg-amber-400/10 hover:scale-[1.05] active:scale-[0.95] magnetic-button transition-all duration-1000 ease-out ${
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

      {/* Enhanced floating particles with sacred symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Refined particle system */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-complex opacity-60"
            style={{
              width: `${6 + (i % 4) * 2}px`,
              height: `${6 + (i % 4) * 2}px`,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0.2) 70%, transparent 100%)"
                  : "radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, rgba(251, 191, 36, 0.1) 70%, transparent 100%)",
              top: `${10 + i * 7}%`,
              left: `${3 + i * 8}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i * 0.5}s`,
            }}
          ></div>
        ))}

        {/* Sacred cross symbols */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`cross-${i}`}
            className="absolute text-amber-400/20 animate-float-gentle"
            style={{
              fontSize: "64px",
              top: `${25 + i * 20}%`,
              right: `${15 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            ✚
          </div>
        ))}
      </div>

      {/* Gentle scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-400/60 animate-bounce-gentle transition-all duration-1000 ease-out ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "1600ms" }}
      >
        <div className="w-6 h-10 border-2 border-amber-400/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400/60 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>

      {/* Subtle bottom fade for smooth section transition */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes drift-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -15px);
          }
          50% {
            transform: translate(-5px, -10px);
          }
          75% {
            transform: translate(-15px, 5px);
          }
        }

        @keyframes drift-reverse {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-12px, 8px);
          }
          50% {
            transform: translate(8px, 15px);
          }
          75% {
            transform: translate(15px, -10px);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes float-complex {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-15px) translateX(5px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-25px) translateX(10px) rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-10px) translateX(5px) rotate(270deg);
            opacity: 0.8;
          }
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.4;
          }
        }

        @keyframes text-glow {
          0%,
          100% {
            filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.5));
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes pulse-button {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @keyframes scroll-indicator {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        @keyframes grid-shift {
          0%,
          100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(1px) translateY(1px);
          }
        }

        @keyframes noise {
          0%,
          100% {
            opacity: 0.01;
          }
          50% {
            opacity: 0.02;
          }
        }

        .animate-drift-slow {
          animation: drift-slow 20s ease-in-out infinite;
        }
        .animate-drift-reverse {
          animation: drift-reverse 25s ease-in-out infinite;
        }
        .animate-drift-reverse {
          animation: drift-reverse 25s ease-in-out infinite;
        }
        .animate-float-complex {
          animation: float-complex infinite ease-in-out;
        }
        .animate-float-gentle {
          animation: float-gentle infinite ease-in-out;
        }
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(251, 191, 36, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-pulse-button {
          animation: pulse-button 3s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 1.5s ease-in-out infinite;
        }
        .animate-grid-shift {
          animation: grid-shift 10s ease-in-out infinite;
        }
        .animate-noise {
          animation: noise 8s ease-in-out infinite;
        }

        .magnetic-button {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .magnetic-button:hover {
          transform: scale(1.05) translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
