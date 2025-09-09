import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { debounce } from "lodash";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // "success", "error", "invalid", or ""
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setSubmitStatus("invalid");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        user_email: email,
        submission_date: new Date().toLocaleString(),
        to_email: "client@deargod.com", // Replace with actual client email
      };
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_losh0yk",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_f3o7guj",
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "JdaLwYqdT0AbkiVja"
      );

      setSubmitStatus("success");
      setEmail("");
      setTimeout(() => setSubmitStatus(""), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        @keyframes pulseSubmit {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
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

        .divine-input {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(251, 191, 36, 0.3);
          transition: all 0.3s ease;
        }

        .divine-input:focus {
          border-color: rgba(251, 191, 36, 0.6);
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
          outline: none;
        }

        .submit-button {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.9),
            rgba(245, 158, 11, 0.8)
          );
          transition: all 0.3s ease-out;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-1px) scale(1.02);
          animation: pulseSubmit 1.5s ease-in-out infinite;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-state {
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.9),
            rgba(16, 185, 129, 0.8)
          ) !important;
        }

        .error-state {
          background: linear-gradient(
            135deg,
            rgba(239, 68, 68, 0.9),
            rgba(220, 38, 38, 0.8)
          ) !important;
        }
      `}</style>

      <footer
        ref={sectionRef}
        className="relative bg-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800/90 z-0"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(251,191,36,0.3) 2px, transparent 2px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>

        {/* Reduced Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-radial from-amber-400/15 to-transparent rounded-full blur-lg ethereal-float"></div>
          <div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-radial from-amber-400/10 to-transparent rounded-full blur-lg ethereal-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Newsletter Signup Section */}
            <div className="text-center mb-12 fade-in-up">
              <div className="relative glass-divine rounded-2xl p-6 sm:p-8 lg:p-10 group mx-auto max-w-3xl">
                <div className="relative z-10">
                  {/* Heading */}
                  <div className="mb-6">
                    <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight text-shadow-divine">
                      Stay Connected with
                      <span className="block mt-1 prism-text font-900">
                        Dear God Community
                      </span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto holy-glow"></div>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-['Inter'] font-light mb-6 max-w-xl mx-auto">
                    Join our prayer community and receive updates about the 100
                    Days of Prayer for 2026, faith encouragement, and
                    testimonies of God's faithfulness.
                  </p>

                  {/* Email Signup Form */}
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto"
                  >
                    <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                      <div className="flex-1 relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="divine-input w-full px-4 py-3 text-white placeholder-slate-400 rounded-lg font-['Inter'] text-sm sm:text-base"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting || !email}
                        className={`submit-button px-6 py-3 text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 ${
                          submitStatus === "success"
                            ? "success-state"
                            : submitStatus === "error" ||
                              submitStatus === "invalid"
                            ? "error-state"
                            : ""
                        }`}
                      >
                        <span className="relative z-10">
                          {isSubmitting
                            ? "Sending..."
                            : submitStatus === "success"
                            ? "Subscribed!"
                            : submitStatus === "error"
                            ? "Try Again"
                            : submitStatus === "invalid"
                            ? "Invalid Email"
                            : "Join Community"}
                        </span>
                      </button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <p className="text-green-400 font-['Inter'] text-sm font-medium">
                          Thank you! You've successfully joined our prayer
                          community.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 font-['Inter'] text-sm font-medium">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    )}

                    {submitStatus === "invalid" && (
                      <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="text-yellow-400 font-['Inter'] text-sm font-medium">
                          Please enter a valid email address.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="fade-in-delay-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center md:text-left">
                {/* Uncomment if needed */}
                {/* <div>
                  <h4 className="font-['Playfair_Display'] text-lg font-bold text-amber-400 mb-3">
                    About Dear God
                  </h4>
                  <p className="text-slate-400 font-['Inter'] font-light text-sm leading-relaxed">
                    A community of prayer warriors interceding, believing, and preparing hearts for God's greater works.
                  </p>
                </div> */}

                {/* <div>
                  <h4 className="font-['Playfair_Display'] text-lg font-bold text-amber-400 mb-3">
                    Connect With Us
                  </h4>
                  <div className="flex justify-center md:justify-start gap-3">
                    <a
                      href="https://www.facebook.com/share/1BDcMLfNyy/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-amber-400/20 hover:bg-amber-400/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.06 3.75 9.24 8.66 9.91v-7h-2.6v-2.91h2.6v-2.22c0-2.58 1.53-4 3.88-4 1.12 0 2.08.08 2.36.12v2.74h-1.62c-1.27 0-1.52.61-1.52 1.5v1.97h3.04l-.4 2.91h-2.64v7c4.91-.67 8.66-4.85 8.66-9.91 0-5.5-4.46-9.96-9.96-9.96z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/iamgoldmathias?t=iut0FJjTuKtQPRzU5TGp-w&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-amber-400/20 hover:bg-amber-400/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/iamgoldmathias?igsh=N3VkYzRqeWkxNHZ5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-amber-400/20 hover:bg-amber-400/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.16c3.21 0 3.58.01 4.84.07 1.17.06 1.81.25 2.23.42.56.22.96.49 1.38.91.42.42.69.82.91 1.38.17.42.36 1.06.42 2.23.06 1.26.07 1.63.07 4.84s-.01 3.58-.07 4.84c-.06 1.17-.25 1.81-.42 2.23-.22.56-.49.96-.91 1.38-.42.42-.82.69-1.38.91-.42.17-1.06.36-2.23.42-1.26.06-1.63.07-4.84.07s-3.58-.01-4.84-.07c-1.17-.06-1.81-.25-2.23-.42-.56-.22-.96-.49-1.38-.91-.42-.42-.69-.82-.91-1.38-.17-.42-.36-1.06-.42-2.23-.06-1.26-.07-1.63-.07-4.84s.01-3.58.07-4.84c.06-1.17.25-1.81.42-2.23.22-.56.49-.96.91-1.38.42-.42.82-.69 1.38-.91.42-.17 1.06-.36 2.23-.42 1.26-.06 1.63-.07 4.84-.07zm0-2.16c-3.25 0-3.66.01-4.94.07-1.29.06-2.17.27-2.94.58-.8.32-1.48.77-2.15 1.44s-1.12 1.35-1.44 2.15c-.31.77-.52 1.65-.58 2.94-.06 1.28-.07 1.69-.07 4.94s.01 3.66.07 4.94c.06 1.29.27 2.17.58 2.94.32.8.77 1.48 1.44 2.15s1.35 1.12 2.15 1.44c.77.31 1.65.52 2.94.58 1.28.06 1.69.07 4.94.07s3.66-.01 4.94-.07c1.29-.06 2.17-.27 2.94-.58.8-.32 1.48-.77 2.15-1.44s1.12-1.35 1.44-2.15c.31-.77.52-1.65.58-2.94.06-1.28.07-1.69.07-4.94s-.01-3.66-.07-4.94c-.06-1.29-.27-2.17-.58-2.94-.32-.8-.77-1.48-1.44-2.15s-1.35-1.12-2.15-1.44c-.77-.31-1.65-.52-2.94-.58-1.28-.06-1.69-.07-4.94-.07z" />
                        <path d="M12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8z" />
                        <circle cx="18.41" cy="5.59" r="1.44" />
                      </svg>
                    </a>
                  </div>
                </div> */}

                {/* <div>
                  <h4 className="font-['Playfair_Display'] text-lg font-bold text-amber-400 mb-3">
                    Our Mission
                  </h4>
                  <p className="text-slate-400 font-['Inter'] font-light text-sm leading-relaxed">
                    Standing in the gap, lifting burdens together, and preparing hearts for God's greater works.
                  </p>
                </div> */}
              </div>
            </div>

            {/* Copyright */}
            <div className="fade-in-delay-2 mt-10 pt-6 border-t border-amber-400/20 text-center">
              <p className="text-slate-500 font-['Inter'] text-sm font-light">
                © 2024 Dear God Community. Made with faith and love. All rights
                reserved.
              </p>
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
          {[...Array(4)].map((_, i) => (
            <div
              key={`cross-${i}`}
              className="absolute text-amber-400/20 ethereal-float font-['Playfair_Display'] text-xl select-none"
              style={{
                top: `${20 + i * 15}%`,
                left: `${15 + i * 20}%`,
                animationDelay: `${i * 0.8}s`,
                transform: `rotate(${Math.random() * 30}deg)`,
              }}
            >
              ✝
            </div>
          ))}
          {[...Array(3)].map((_, i) => (
            <div
              key={`halo-${i}`}
              className="absolute rounded-full border border-amber-400/10 ethereal-float"
              style={{
                width: `${30 + (i % 2) * 10}px`,
                height: `${30 + (i % 2) * 10}px`,
                top: `${25 + i * 20}%`,
                right: `${15 + i * 15}%`,
                animationDelay: `${i * 1}s`,
                background: `radial-gradient(circle, rgba(251, 191, 36, 0.05) 0%, transparent 70%)`,
              }}
            ></div>
          ))}
          {[...Array(2)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute ethereal-float"
              style={{
                width: "1px",
                height: `${80 + i * 30}px`,
                background: `linear-gradient(to bottom, rgba(251, 191, 36, ${
                  0.25 - i * 0.05
                }), transparent)`,
                top: `${15 + i * 25}%`,
                left: `${25 + i * 30}%`,
                transformOrigin: "top center",
                transform: `rotate(${10 + i * 20}deg)`,
                animationDelay: `${i * 1.5}s`,
              }}
            ></div>
          ))}
          {[...Array(10)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute crystalline"
              style={{
                width: "3px",
                height: "3px",
                background: "rgba(251, 191, 36, 0.7)",
                borderRadius: "50%",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            ></div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
