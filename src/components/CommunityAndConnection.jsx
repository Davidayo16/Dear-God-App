import React, { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";

const CommunityAndConnection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);

  // Trigger visibility when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Throttled mouse move
  useEffect(() => {
    const handleMouseMove = debounce((e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    }, 50);

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        handleMouseMove.cancel();
      };
    }
  }, []);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@200;300;400;500;600&display=swap");

        @keyframes etherealFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes crystalline {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-15px);
            opacity: 0.8;
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 20}px);
          transition: all 1s ease-out;
          will-change: opacity, transform;
        }

        .fade-in-delay-1 {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 20}px);
          transition: all 1.2s ease-out 0.2s;
          will-change: opacity, transform;
        }

        .fade-in-delay-2 {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 20}px);
          transition: all 1.4s ease-out 0.4s;
          will-change: opacity, transform;
        }

        .scale-in {
          opacity: ${isVisible ? 1 : 0};
          transform: scale(${isVisible ? 1 : 0.9});
          transition: all 1.2s ease-out 0.3s;
          will-change: opacity, transform;
        }

        .prism-text {
          background: linear-gradient(
            135deg,
            #fbbf24 0%,
            #ffffff 50%,
            #f59e0b 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .holy-glow {
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.3);
        }

        .crystalline {
          animation: crystalline 4s ease-in-out infinite;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .ethereal-float {
          animation: etherealFloat 6s ease-in-out infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .text-shadow-divine {
          text-shadow: 0 0 8px rgba(251, 191, 36, 0.5);
        }

        .glass-divine {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(251, 191, 36, 0.3);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          border-radius: 1rem;
        }

        .glass-divine::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(251, 191, 36, 0.1) 0%,
            transparent 50%
          );
          opacity: ${isHovering ? 1 : 0};
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: inherit;
        }

        .glass-divine:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease-out;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        id="community"
      >
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800/90 z-0"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(251,191,36,0.3) 2px, transparent 2px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Reduced Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-radial from-amber-400/15 to-transparent rounded-full blur-lg ethereal-float"></div>
          <div
            className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-radial from-amber-400/10 to-transparent rounded-full blur-lg ethereal-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:order-2">
              <div className="mb-8 fade-in-up">
                <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight text-shadow-divine">
                  Community
                  <span className="block mt-2 prism-text font-900">
                    and Connection
                  </span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto lg:mx-0 mt-4 holy-glow"></div>
              </div>

              {/* Mobile Image */}
              <div className="w-full scale-in lg:hidden flex justify-center mb-8">
                <div className="relative w-64 h-64">
                  <div className="absolute -inset-3 bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-lg"></div>
                  <div className="relative w-full h-full border-2 border-amber-400/40 holy-glow overflow-hidden rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Community prayer gathering"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="fade-in-delay-1">
                <div className="relative glass-divine p-6 sm:p-8 group">
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed font-['Inter'] font-light">
                      Be part of a prayer community that believes in{" "}
                      <span className="font-medium text-amber-300">
                        interceding and giving
                      </span>
                      . Through Dear God, you'll receive encouragement, prayer
                      covering, and uplifting words that strengthen faith.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-['Inter'] font-light">
                      Together, we stand in the gap, share God's promises, and
                      prepare for the future with{" "}
                      <span className="font-medium text-amber-300">
                        hope and confidence in Him
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="fade-in-delay-2 mt-8">
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { number: "100+", label: "Prayer Warriors" },
                    { number: "24/7", label: "Prayer Coverage" },
                    { number: "∞", label: "God's Love" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-['Playfair_Display'] font-bold prism-text mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300 font-['Inter'] font-light">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Image */}
            <div className="hidden lg:block w-full lg:w-1/2 scale-in lg:order-1">
              <div className="relative w-full max-w-[400px] aspect-square mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-lg"></div>
                <div className="relative w-full h-full border-2 border-amber-400/50 holy-glow overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Community prayer gathering"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={`crystal-${i}`}
              className="absolute crystalline"
              style={{
                width: `${6 + (i % 3)}px`,
                height: `${6 + (i % 3)}px`,
                background: `rgba(251, 191, 36, ${0.6 + (i % 2) * 0.2})`,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
          {[...Array(3)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full ethereal-float"
              style={{
                width: `${12 + i * 3}px`,
                height: `${12 + i * 3}px`,
                background: `radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)`,
                top: `${20 + i * 15}%`,
                right: `${10 + i * 10}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommunityAndConnection;
