import React, { useState, useEffect, useRef } from "react";

const LetterFromGold = () => {
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
            transform: translate3d(-20px, -15px, 0) rotate(1deg);
          }
          50% {
            transform: translate3d(15px, -25px, 0) rotate(-0.5deg);
          }
          75% {
            transform: translate3d(-10px, -20px, 0) rotate(0.5deg);
          }
        }

        @keyframes liquidMorph {
          0%,
          100% {
            border-radius: 65% 35% 40% 60% / 55% 40% 60% 45%;
            transform: rotate(0deg) scale(1);
          }
          20% {
            border-radius: 40% 60% 65% 35% / 45% 65% 35% 55%;
            transform: rotate(72deg) scale(1.03);
          }
          40% {
            border-radius: 70% 30% 45% 55% / 35% 75% 65% 25%;
            transform: rotate(144deg) scale(0.97);
          }
          60% {
            border-radius: 35% 65% 70% 30% / 65% 35% 45% 65%;
            transform: rotate(216deg) scale(1.02);
          }
          80% {
            border-radius: 55% 45% 75% 25% / 25% 85% 15% 75%;
            transform: rotate(288deg) scale(0.98);
          }
        }

        @keyframes prismShimmer {
          0% {
            background-position: -200% 0;
            opacity: 0.9;
          }
          50% {
            opacity: 1;
          }
          100% {
            background-position: 200% 0;
            opacity: 0.9;
          }
        }

        @keyframes holyGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 40px rgba(251, 191, 36, 0.5))
              drop-shadow(0 0 80px rgba(251, 191, 36, 0.3));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 60px rgba(251, 191, 36, 0.7))
              drop-shadow(0 0 120px rgba(251, 191, 36, 0.4))
              drop-shadow(0 0 180px rgba(251, 191, 36, 0.2));
            transform: scale(1.01);
          }
        }

        @keyframes crystalline {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) rotate(90deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-35px) rotate(270deg);
            opacity: 0.8;
          }
        }

        @keyframes heartbeatGlow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3),
              0 0 40px rgba(251, 191, 36, 0.2), 0 0 80px rgba(251, 191, 36, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.5),
              0 0 80px rgba(251, 191, 36, 0.3),
              0 0 120px rgba(251, 191, 36, 0.2);
          }
        }

        @keyframes socialPulse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.6),
              0 0 80px rgba(251, 191, 36, 0.3);
          }
        }

        .fade-in-up {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 60}px)
            rotateX(${isVisible ? 0 : 90}deg);
          transition: all 2s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .fade-in-delay-1 {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 60}px);
          transition: all 2.2s cubic-bezier(0.23, 1, 0.32, 1) 0.5s;
        }

        .fade-in-delay-2 {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 60}px);
          transition: all 2.4s cubic-bezier(0.23, 1, 0.32, 1) 1s;
        }

        .scale-in-epic {
          opacity: ${isVisible ? 1 : 0};
          transform: scale(${isVisible ? 1 : 0.6})
            rotateY(${isVisible ? 0 : 60}deg);
          transition: all 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
        }

        .liquid-morph {
          animation: liquidMorph 15s ease-in-out infinite;
        }

        .ethereal-float {
          animation: etherealFloat 10s ease-in-out infinite;
        }

        .prism-text {
          background: linear-gradient(
            120deg,
            #fbbf24 0%,
            #f59e0b 25%,
            #ffffff 45%,
            #fbbf24 65%,
            #f59e0b 85%,
            #ffffff 100%
          );
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: prismShimmer 5s ease-in-out infinite;
        }

        .holy-glow {
          animation: holyGlow 4s ease-in-out infinite alternate;
        }

        .crystalline {
          animation: crystalline 8s ease-in-out infinite;
        }

        .text-shadow-divine {
          text-shadow: 0 0 30px rgba(251, 191, 36, 0.9),
            0 0 60px rgba(251, 191, 36, 0.6), 0 0 100px rgba(251, 191, 36, 0.4),
            0 15px 30px rgba(0, 0, 0, 0.6);
        }

        .glass-divine {
          background: linear-gradient(
            145deg,
            rgba(15, 23, 42, 0.95) 0%,
            rgba(30, 41, 59, 0.9) 30%,
            rgba(15, 23, 42, 0.95) 70%,
            rgba(30, 41, 59, 0.9) 100%
          );
          backdrop-filter: blur(30px) saturate(200%);
          border: 3px solid;
          border-image: linear-gradient(
              145deg,
              rgba(251, 191, 36, 0.6) 0%,
              rgba(251, 191, 36, 0.2) 30%,
              rgba(251, 191, 36, 0.6) 70%,
              rgba(251, 191, 36, 0.2) 100%
            )
            1;
          box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.15),
            0 25px 50px rgba(0, 0, 0, 0.4), 0 0 100px rgba(251, 191, 36, 0.15);
          animation: heartbeatGlow 3s ease-in-out infinite;
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
            rgba(251, 191, 36, 0.15) 0%,
            rgba(251, 191, 36, 0.05) 30%,
            transparent 60%
          );
          opacity: ${isHovering ? 1 : 0};
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: inherit;
        }

        .glass-divine:hover {
          border-image: linear-gradient(
              145deg,
              rgba(251, 191, 36, 0.8) 0%,
              rgba(251, 191, 36, 0.4) 30%,
              rgba(251, 191, 36, 0.8) 70%,
              rgba(251, 191, 36, 0.4) 100%
            )
            1;
          box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.25),
            0 40px 80px rgba(0, 0, 0, 0.5), 0 0 150px rgba(251, 191, 36, 0.25);
          transform: translateY(-8px) scale(1.02);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .social-divine {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.9),
            rgba(245, 158, 11, 0.8)
          );
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          animation: socialPulse 4s ease-in-out infinite;
        }

        .social-divine:hover {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 1),
            rgba(245, 158, 11, 1)
          );
          transform: scale(1.2) rotate(10deg) translateY(-5px);
          box-shadow: 0 0 60px rgba(251, 191, 36, 0.8),
            0 0 100px rgba(251, 191, 36, 0.4);
        }

        .divine-gradient {
          background: linear-gradient(
            125deg,
            rgba(251, 191, 36, 0.12) 0%,
            rgba(245, 158, 11, 0.08) 25%,
            rgba(251, 191, 36, 0.12) 50%,
            rgba(245, 158, 11, 0.08) 75%,
            rgba(251, 191, 36, 0.12) 100%
          );
          background-size: 500% 500%;
          animation: divineShift 12s ease-in-out infinite;
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
            110deg,
            transparent 0%,
            rgba(251, 191, 36, 0.4) 40%,
            rgba(251, 191, 36, 0.7) 50%,
            rgba(251, 191, 36, 0.4) 60%,
            transparent 100%
          );
          background-size: 300% 100%;
          animation: highlightSweep 4s ease-in-out infinite;
        }

        @keyframes highlightSweep {
          0%,
          100% {
            background-position: -300% 0;
          }
          50% {
            background-position: 300% 0;
          }
        }

        .signature-glow {
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.6),
            0 0 40px rgba(251, 191, 36, 0.4);
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
        className="relative bg-slate-900 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        id="letter"
      >
        {/* Multi-layered Divine Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/95 to-slate-900 z-0"></div>
        <div className="absolute inset-0 divine-gradient z-0"></div>

        {/* Sacred Geometry Pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30px 30px, rgba(251,191,36,0.5) 2px, transparent 2px),
                radial-gradient(circle at 80px 80px, rgba(251,191,36,0.3) 1px, transparent 1px),
                linear-gradient(60deg, rgba(251,191,36,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "120px 120px, 160px 160px, 60px 60px",
            }}
          ></div>
        </div>

        {/* Ethereal Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-radial from-amber-400/25 via-amber-500/12 to-transparent rounded-full blur-3xl ethereal-float"></div>
          <div
            className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-gradient-radial from-amber-500/20 via-amber-400/10 to-transparent rounded-full blur-3xl ethereal-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-amber-400/8 via-transparent to-amber-400/8 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "40s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Epic Text Content */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              {/* Divine Heading */}
              <div className="mb-12 sm:mb-16 fade-in-up">
                <div className="relative">
                  <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-8 tracking-tight text-shadow-divine leading-none">
                    Letter
                    <span className="block mt-4 prism-text font-['Playfair_Display'] font-900">
                      from Gold
                    </span>
                  </h2>

                  {/* Animated Underline */}
                  <div className="relative w-48 sm:w-56 h-2 mx-auto lg:mx-0 mt-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent holy-glow rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-90"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Portrait */}
              <div className="w-full scale-in-epic lg:hidden flex justify-center mb-12">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                  {/* Multiple Glow Effects */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/30 via-amber-500/20 to-amber-600/30 liquid-morph blur-2xl"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/40 via-amber-500/30 to-amber-600/40 liquid-morph blur-xl"></div>

                  <div className="relative w-full h-full liquid-morph ethereal-float overflow-hidden border-4 border-amber-400/60 holy-glow">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Mathias Gold - Founder of Dear God"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-amber-500/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-400/10 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Divine Letter Content */}
              <div className="fade-in-delay-1">
                <div className="relative glass-divine rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden group">
                  <div className="relative z-10 space-y-6 lg:space-y-8">
                    <p className="text-xl sm:text-2xl lg:text-2xl text-amber-100 leading-relaxed font-['Inter'] font-light tracking-wide signature-glow">
                      Dear Friend in Faith,
                    </p>

                    <p className="text-lg sm:text-xl lg:text-xl text-slate-200 leading-relaxed font-['Inter'] font-light tracking-wide">
                      In a world filled with noise and constant demands, it can
                      be hard to find the space to truly pause, pray, and seek
                      God's presence.{" "}
                      <span className="highlight-divine font-medium text-white">
                        Dear God was born out of a desire to create that sacred
                        space
                      </span>
                      , a community where intercession and giving meet, and
                      where no one has to carry their burdens alone.
                    </p>

                    <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto lg:mx-0 opacity-70"></div>

                    <p className="text-lg sm:text-xl lg:text-xl text-slate-200 leading-relaxed font-['Inter'] font-light tracking-wide">
                      Through this mission, we are devoted to lifting prayers,
                      sharing encouragement, and preparing hearts for what lies
                      ahead. Our current program,{" "}
                      <span className="highlight-divine font-medium text-white">
                        100 Days of Prayer for 2026
                      </span>
                      , is one expression of this calling. But at the heart of
                      Dear God is something deeper: a commitment to stand in the
                      gap for others and to remind every soul that{" "}
                      <span className="highlight-divine font-medium text-white">
                        God still answers prayer
                      </span>
                      .
                    </p>

                    <p className="text-lg sm:text-xl lg:text-xl text-slate-200 leading-relaxed font-['Inter'] font-light tracking-wide">
                      Thank you for walking with us on this journey. Together,
                      as we intercede, believe, and hope, may we see{" "}
                      <span className="highlight-divine font-medium text-white">
                        God's power move in our lives, our families, and our
                        world
                      </span>
                      .
                    </p>

                    <div className="pt-6">
                      <p className="text-lg sm:text-xl lg:text-xl text-amber-200 leading-relaxed font-['Inter'] font-light signature-glow">
                        With grace and faith,
                        <br />
                        <span className="font-['Playfair_Display'] font-bold text-2xl">
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

              {/* Enhanced Social Media Icons */}
              <div className="fade-in-delay-2 mt-12">
                <div className="flex justify-center lg:justify-start gap-6 sm:gap-8">
                  <a
                    href="https://x.com/iamgoldmathias?t=iut0FJjTuKtQPRzU5TGp-w&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-14 h-14 flex items-center justify-center social-divine rounded-full"
                  >
                    <svg
                      className="w-7 h-7 text-white relative z-10"
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
                    className="group relative w-14 h-14 flex items-center justify-center social-divine rounded-full"
                  >
                    <svg
                      className="w-7 h-7 text-white relative z-10"
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
                    className="group relative w-14 h-14 flex items-center justify-center social-divine rounded-full"
                  >
                    <svg
                      className="w-7 h-7 text-white relative z-10"
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
            <div className="hidden lg:block w-full lg:w-2/5 scale-in-epic">
              <div className="relative w-full max-w-[500px] aspect-square mx-auto">
                {/* Multiple Glow Layers */}
                <div className="absolute -inset-16 bg-gradient-to-r from-amber-400/30 via-amber-500/20 to-amber-600/30 liquid-morph blur-3xl"></div>
                <div className="absolute -inset-12 bg-gradient-to-r from-amber-400/40 via-amber-500/30 to-amber-600/40 liquid-morph blur-2xl"></div>
                <div className="absolute -inset-6 bg-gradient-to-r from-amber-400/50 via-amber-500/40 to-amber-600/50 liquid-morph blur-xl"></div>

                <div className="relative w-full h-full liquid-morph ethereal-float overflow-hidden border-4 border-amber-400/70 holy-glow">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Mathias Gold - Founder of Dear God"
                    className="w-full h-full object-cover"
                  />
                  {/* Multiple Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-amber-500/25"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-400/12 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-amber-600/15 via-transparent to-amber-400/8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divine Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Crystalline Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`crystal-${i}`}
              className="absolute crystalline"
              style={{
                width: `${8 + (i % 5)}px`,
                height: `${8 + (i % 5)}px`,
                background: `linear-gradient(60deg, rgba(251, 191, 36, ${
                  0.7 + (i % 3) * 0.2
                }), rgba(245, 158, 11, ${0.5 + (i % 3) * 0.2}))`,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                filter: "drop-shadow(0 0 12px rgba(251, 191, 36, 0.6))",
              }}
            ></div>
          ))}

          {/* Ethereal Orbs */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full ethereal-float"
              style={{
                width: `${25 + (i % 8) * 6}px`,
                height: `${25 + (i % 8) * 6}px`,
                background: `radial-gradient(circle, rgba(251, 191, 36, ${
                  0.4 + (i % 4) * 0.1
                }) 0%, rgba(251, 191, 36, 0.15) 40%, transparent 100%)`,
                top: `${8 + i * 8}%`,
                right: `${3 + i * 7}%`,
                animationDelay: `${i * 0.8}s`,
                filter: "blur(1.5px)",
              }}
            ></div>
          ))}

          {/* Floating Cross Elements */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`cross-${i}`}
              className="absolute ethereal-float"
              style={{
                width: "20px",
                height: "20px",
                top: `${15 + i * 15}%`,
                left: `${5 + i * 12}%`,
                animationDelay: `${i * 2}s`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(45deg, rgba(251, 191, 36, 0.6), rgba(245, 158, 11, 0.4))`,
                  clipPath:
                    "polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)",
                  filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))",
                }}
              ></div>
            </div>
          ))}

          {/* Divine Light Rays */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-amber-400/20 to-transparent transform rotate-12 ethereal-float"></div>
          <div
            className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-amber-500/15 to-transparent transform -rotate-12 ethereal-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default LetterFromGold;
