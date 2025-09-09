import React, { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";

const LetterFromGold = () => {
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
          border-radius: 1.5rem;
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

        .social-divine {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.9),
            rgba(245, 158, 11, 0.8)
          );
          transition: all 0.3s ease-out;
        }

        .social-divine:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
        }

        .signature-glow {
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.9),
            rgba(245, 158, 11, 0.7)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        id="letter"
      >
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800/90 z-0"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, rgba(251,191,36,0.4) 2px, transparent 2px)`,
            backgroundSize: "120px 120px",
          }}
        ></div>

        {/* Reduced Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-radial from-amber-400/15 to-transparent rounded-full blur-lg ethereal-float"></div>
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-lg ethereal-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <div className="mb-10 fade-in-up">
                <div className="relative">
                  <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 tracking-tight text-shadow-divine">
                    Letter
                    <span className="block mt-3 prism-text font-900">
                      from Gold
                    </span>
                  </h2>
                  <div className="w-40 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto lg:mx-0 mt-6 holy-glow"></div>
                </div>
              </div>

              {/* Mobile Portrait */}
              <div className="w-full scale-in lg:hidden flex justify-center mb-10">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-lg"></div>
                  <div className="relative w-full h-full border-2 border-amber-400/40 holy-glow overflow-hidden rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Mathias Gold - Founder of Dear God"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Letter Content */}
              <div className="fade-in-delay-1">
                <div className="relative glass-divine rounded-2xl p-6 sm:p-8 lg:p-10 group">
                  <div className="space-y-4 lg:space-y-6">
                    <p className="text-lg sm:text-xl lg:text-2xl text-amber-100 leading-relaxed font-['Inter'] font-light signature-glow">
                      Dear Friend in Faith,
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-['Inter'] font-light">
                      In a world filled with noise and constant demands, it can
                      be hard to find the space to truly pause, pray, and seek
                      God's presence.{" "}
                      <span className="font-medium text-amber-300">
                        Dear God was born out of a desire to create that sacred
                        space
                      </span>
                      , a community where intercession and giving meet, and
                      where no one has to carry their burdens alone.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto lg:mx-0 opacity-60"></div>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-['Inter'] font-light">
                      Through this mission, we are devoted to lifting prayers,
                      sharing encouragement, and preparing hearts for what lies
                      ahead. Our current program,{" "}
                      <span className="font-medium text-amber-300">
                        100 Days of Prayer for 2026
                      </span>
                      , is one expression of this calling. But at the heart of
                      Dear God is something deeper: a commitment to stand in the
                      gap for others and to remind every soul that{" "}
                      <span className="font-medium text-amber-300">
                        God still answers prayer
                      </span>
                      .
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-['Inter'] font-light">
                      Thank you for walking with us on this journey. Together,
                      as we intercede, believe, and hope, may we see{" "}
                      <span className="font-medium text-amber-300">
                        God's power move in our lives, our families, and our
                        world
                      </span>
                      .
                    </p>
                    <div className="pt-4">
                      <p className="text-base sm:text-lg lg:text-xl text-amber-200 leading-relaxed font-['Inter'] font-light signature-glow">
                        With grace and faith,
                        <br />
                        <span className="font-['Playfair_Display'] font-bold text-xl lg:text-2xl">
                          Mathias Gold
                        </span>
                        <br />
                        <span className="text-amber-300/80">
                          Founder of Dear God
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="fade-in-delay-2 mt-10">
                <div className="flex justify-center lg:justify-start gap-4 sm:gap-6">
                  <a
                    href="https://x.com/iamgoldmathias?t=iut0FJjTuKtQPRzU5TGp-w&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center social-divine rounded-full"
                  >
                    <svg
                      className="w-6 h-6 text-white relative z-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/16tLSAvuw5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center social-divine rounded-full"
                  >
                    <svg
                      className="w-6 h-6 text-white relative z-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.06 3.75 9.24 8.66 9.91v-7h-2.6v-2.91h2.6v-2.22c0-2.58 1.53-4 3.88-4 1.12 0 2.08.08 2.36.12v2.74h-1.62c-1.27 0-1.52.61-1.52 1.5v1.97h3.04l-.4 2.91h-2.64v7c4.91-.67 8.66-4.85 8.66-9.91 0-5.5-4.46-9.96-9.96-9.96z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/iamgoldmathias?igsh=N3VkYzRqeWkxNHZ5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 flex items-center justify-center social-divine rounded-full"
                  >
                    <svg
                      className="w-6 h-6 text-white relative z-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.16c3.21 0 3.58.01 4.84.07 1.17.06 1.81.25 2.23.42.56.22.96.49 1.38.91.42.42.69.82.91 1.38.17.42.36 1.06.42 2.23.06 1.26.07 1.63.07 4.84s-.01 3.58-.07 4.84c-.06 1.17-.25 1.81-.42 2.23-.22.56-.49.96-.91 1.38-.42.42-.82.69-1.38.91-.42.17-1.06.36-2.23.42-1.26.06-1.63.07-4.84.07s-3.58-.01-4.84-.07c-1.17-.06-1.81-.25-2.23-.42-.56-.22-.96-.49-1.38-.91-.42-.42-.69-.82-.91-1.38-.17-.42-.36-1.06-.42-2.23-.06-1.26-.07-1.63-.07-4.84s.01-3.58.07-4.84c.06-1.17.25-1.81.42-2.23.22-.56.49-.96.91-1.38.42-.42.82-.69 1.38-.91.42-.17 1.06-.36 2.23-.42 1.26-.06 1.63-.07 4.84-.07zm0-2.16c-3.25 0-3.66.01-4.94.07-1.29.06-2.17.27-2.94.58-.8.32-1.48.77-2.15 1.44s-1.12 1.35-1.44 2.15c-.31.77-.52 1.65-.58 2.94-.06 1.28-.07 1.69-.07 4.94s.01 3.66.07 4.94c.06 1.29.27 2.17.58 2.94.32.8.77 1.48 1.44 2.15s1.35 1.12 2.15 1.44c.77.31 1.65.52 2.94.58 1.28.06 1.69.07 4.94.07s3.66-.01 4.94-.07c1.29-.06 2.17-.27 2.94-.58.8-.32 1.48-.77 2.15-1.44s1.12-1.35 1.44-2.15c.31-.77.52-1.65.58-2.94.06-1.28.07-1.69.07-4.94s-.01-3.66-.07-4.94c-.06-1.29-.27-2.17-.58-2.94-.32-.8-.77-1.48-1.44-2.15s-1.35-1.12-2.15-1.44c-.77-.31-1.65-.52-2.94-.58-1.28-.06-1.69-.07-4.94-.07z" />
                      <path d="M12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8z" />
                      <circle cx="18.41" cy="5.59" r="1.44" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Portrait */}
            <div className="hidden lg:block w-full lg:w-2/5 scale-in">
              <div className="relative w-full max-w-[400px] aspect-square mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-lg"></div>
                <div className="relative w-full h-full border-2 border-amber-400/50 holy-glow overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Mathias Gold - Founder of Dear God"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
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
          {[...Array(3)].map((_, i) => (
            <div
              key={`cross-${i}`}
              className="absolute ethereal-float"
              style={{
                width: "16px",
                height: "16px",
                top: `${25 + i * 20}%`,
                left: `${15 + i * 20}%`,
                animationDelay: `${i * 1}s`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `rgba(251, 191, 36, 0.5)`,
                  clipPath:
                    "polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LetterFromGold;
