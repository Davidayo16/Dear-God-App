import React, { useState, useEffect, useRef } from "react";

const CommunityAndConnection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@200;300;400;500;600&display=swap");

        @keyframes etherealFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          25% {
            transform: translate3d(-15px, -10px, 0) rotate(1deg);
          }
          50% {
            transform: translate3d(10px, -20px, 0) rotate(-0.5deg);
          }
          75% {
            transform: translate3d(-5px, -15px, 0) rotate(0.5deg);
          }
        }

        @keyframes liquidMorph {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          20% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotate(72deg) scale(1.02);
          }
          40% {
            border-radius: 70% 30% 40% 60% / 40% 70% 60% 30%;
            transform: rotate(144deg) scale(0.98);
          }
          60% {
            border-radius: 40% 70% 60% 30% / 70% 40% 50% 60%;
            transform: rotate(216deg) scale(1.01);
          }
          80% {
            border-radius: 50% 50% 80% 20% / 30% 80% 20% 70%;
            transform: rotate(288deg) scale(0.99);
          }
        }

        @keyframes prismShimmer {
          0% {
            background-position: -200% 0;
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            background-position: 200% 0;
            opacity: 0.8;
          }
        }

        @keyframes holyGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 30px rgba(251, 191, 36, 0.4))
              drop-shadow(0 0 60px rgba(251, 191, 36, 0.2));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 50px rgba(251, 191, 36, 0.6))
              drop-shadow(0 0 100px rgba(251, 191, 36, 0.3))
              drop-shadow(0 0 150px rgba(251, 191, 36, 0.1));
            transform: scale(1.02);
          }
        }

        @keyframes crystalline {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-25px) rotate(270deg);
            opacity: 0.9;
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(50px) rotateX(90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes pulseHeart {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .fade-in-up {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 50}px)
            rotateX(${isVisible ? 0 : 90}deg);
          transition: all 1.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .fade-in-delay-1 {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 50}px);
          transition: all 1.8s cubic-bezier(0.23, 1, 0.32, 1) 0.4s;
        }

        .fade-in-delay-2 {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 50}px);
          transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0.8s;
        }

        .scale-in-epic {
          opacity: ${isVisible ? 1 : 0};
          transform: scale(${isVisible ? 1 : 0.7})
            rotateY(${isVisible ? 0 : 45}deg);
          transition: all 2.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s;
        }

        .liquid-morph {
          animation: liquidMorph 12s ease-in-out infinite;
        }

        .ethereal-float {
          animation: etherealFloat 8s ease-in-out infinite;
        }

        .prism-text {
          background: linear-gradient(
            135deg,
            #fbbf24 0%,
            #f59e0b 20%,
            #ffffff 40%,
            #fbbf24 60%,
            #f59e0b 80%,
            #ffffff 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: prismShimmer 4s ease-in-out infinite;
        }

        .holy-glow {
          animation: holyGlow 3s ease-in-out infinite alternate;
        }

        .crystalline {
          animation: crystalline 6s ease-in-out infinite;
        }

        .text-shadow-divine {
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.8),
            0 0 40px rgba(251, 191, 36, 0.6), 0 0 80px rgba(251, 191, 36, 0.4),
            0 10px 20px rgba(0, 0, 0, 0.5);
        }

        .glass-divine {
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.9) 0%,
            rgba(30, 41, 59, 0.8) 50%,
            rgba(15, 23, 42, 0.9) 100%
          );
          backdrop-filter: blur(24px) saturate(180%);
          border: 2px solid;
          border-image: linear-gradient(
              135deg,
              rgba(251, 191, 36, 0.4) 0%,
              rgba(251, 191, 36, 0.1) 50%,
              rgba(251, 191, 36, 0.4) 100%
            )
            1;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 20px 40px rgba(0, 0, 0, 0.3), 0 0 80px rgba(251, 191, 36, 0.1);
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
          border-image: linear-gradient(
              135deg,
              rgba(251, 191, 36, 0.6) 0%,
              rgba(251, 191, 36, 0.3) 50%,
              rgba(251, 191, 36, 0.6) 100%
            )
            1;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 30px 60px rgba(0, 0, 0, 0.4), 0 0 120px rgba(251, 191, 36, 0.2);
          transform: translateY(-5px);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .pulse-heart {
          animation: pulseHeart 2s ease-in-out infinite;
        }

        .divine-gradient {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.1) 0%,
            rgba(245, 158, 11, 0.05) 25%,
            rgba(251, 191, 36, 0.1) 50%,
            rgba(245, 158, 11, 0.05) 75%,
            rgba(251, 191, 36, 0.1) 100%
          );
          background-size: 400% 400%;
          animation: divineShift 8s ease-in-out infinite;
        }

        @keyframes divineShift {
          0%,
          100% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }

        .highlight-divine {
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(251, 191, 36, 0.3) 45%,
            rgba(251, 191, 36, 0.5) 50%,
            rgba(251, 191, 36, 0.3) 55%,
            transparent 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-size: 200% 100%;
          animation: highlightSweep 3s ease-in-out infinite;
        }

        @keyframes highlightSweep {
          0%,
          100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-slate-900 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
         id="community"
      >
        {/* Multi-layered Divine Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900 z-0"></div>
        <div className="absolute inset-0 divine-gradient z-0"></div>

        {/* Sacred Geometry Pattern */}
        <div className="absolute inset-0 opacity-[0.02] z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25px 25px, rgba(251,191,36,0.4) 2px, transparent 2px),
                radial-gradient(circle at 75px 75px, rgba(251,191,36,0.2) 1px, transparent 1px),
                linear-gradient(45deg, rgba(251,191,36,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px, 150px 150px, 50px 50px",
            }}
          ></div>
        </div>

        {/* Ethereal Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-radial from-amber-400/20 via-amber-500/10 to-transparent rounded-full blur-3xl ethereal-float"></div>
          <div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-radial from-amber-500/15 via-amber-400/8 to-transparent rounded-full blur-3xl ethereal-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-amber-400/5 via-transparent to-amber-400/5 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "30s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Epic Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:order-2">
              {/* Divine Heading */}
              <div className="mb-12 sm:mb-16 fade-in-up">
                <div className="relative">
                  <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-8 tracking-tight text-shadow-divine leading-none">
                    Community
                    <span className="block mt-4 prism-text font-['Playfair_Display'] font-900">
                      and Connection
                    </span>
                  </h2>

                  {/* Animated Underline */}
                  <div className="relative w-48 sm:w-56 h-2 mx-auto lg:mx-0 mt-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent holy-glow rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-80"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Liquid Image */}
              <div className="w-full scale-in-epic lg:hidden flex justify-center mb-12">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  {/* Glow Effects */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/30 via-amber-500/20 to-amber-600/30 liquid-morph blur-2xl"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/40 via-amber-500/30 to-amber-600/40 liquid-morph blur-xl"></div>

                  <div className="relative w-full h-full liquid-morph ethereal-float overflow-hidden border-3 border-amber-400/50">
                    <img
                      src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                      alt="Community prayer gathering"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-amber-500/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-400/10 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Divine Description */}
              <div className="fade-in-delay-1">
                <div className="relative glass-divine rounded-3xl p-10 sm:p-12 overflow-hidden group pulse-heart">
                  <div className="relative z-10 space-y-8">
                    <p className="text-xl sm:text-2xl lg:text-3xl text-slate-100 leading-relaxed font-['Inter'] font-light tracking-wide">
                      Be part of a prayer community that believes in{" "}
                      <span className="highlight-divine font-medium">
                        interceding and giving
                      </span>
                      . Through Dear God, you'll receive encouragement, prayer
                      covering, and uplifting words that strengthen faith.
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto lg:mx-0 opacity-60"></div>

                    <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 leading-relaxed font-['Inter'] font-light">
                      Together, we stand in the gap, share God's promises, and
                      prepare for the future with{" "}
                      <span className="highlight-divine font-medium">
                        hope and confidence in Him
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Faith Statistics */}
              <div className="fade-in-delay-2 mt-12">
                <div className="grid grid-cols-3 gap-6 sm:gap-8">
                  {[
                    { number: "100+", label: "Prayer Warriors" },
                    { number: "24/7", label: "Prayer Coverage" },
                    { number: "∞", label: "God's Love" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display'] font-bold prism-text mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm sm:text-base text-slate-300 font-['Inter'] font-light tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Liquid Image */}
            <div className="hidden lg:block w-full lg:w-1/2 scale-in-epic lg:order-1">
              <div className="relative w-full max-w-[600px] aspect-square mx-auto">
                {/* Multiple Glow Layers */}
                <div className="absolute -inset-12 bg-gradient-to-r from-amber-400/25 via-amber-500/15 to-amber-600/25 liquid-morph blur-3xl"></div>
                <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/35 via-amber-500/25 to-amber-600/35 liquid-morph blur-2xl"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/45 via-amber-500/35 to-amber-600/45 liquid-morph blur-xl"></div>

                <div className="relative w-full h-full liquid-morph ethereal-float overflow-hidden border-4 border-amber-400/60 holy-glow">
                  <img
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Community prayer gathering"
                    className="w-full h-full object-cover"
                  />
                  {/* Multiple Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-amber-500/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-400/15 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-amber-600/20 via-transparent to-amber-400/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divine Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Crystalline Particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`crystal-${i}`}
              className="absolute crystalline"
              style={{
                width: `${6 + (i % 4)}px`,
                height: `${6 + (i % 4)}px`,
                background: `linear-gradient(45deg, rgba(251, 191, 36, ${
                  0.6 + (i % 3) * 0.2
                }), rgba(245, 158, 11, ${0.4 + (i % 3) * 0.2}))`,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))",
              }}
            ></div>
          ))}

          {/* Ethereal Orbs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full ethereal-float"
              style={{
                width: `${20 + (i % 6) * 5}px`,
                height: `${20 + (i % 6) * 5}px`,
                background: `radial-gradient(circle, rgba(251, 191, 36, ${
                  0.3 + (i % 3) * 0.1
                }) 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)`,
                top: `${10 + i * 12}%`,
                right: `${5 + i * 8}%`,
                animationDelay: `${i * 1.2}s`,
                filter: "blur(1px)",
              }}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommunityAndConnection;
