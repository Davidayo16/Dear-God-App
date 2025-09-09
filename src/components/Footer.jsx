import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // "success", "error", or ""
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

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
              drop-shadow(0 0 100px rgba(251, 191, 36, 0.3));
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

        @keyframes pulseSubmit {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.6);
          }
        }

        @keyframes successGlow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 197, 94, 0.8),
              0 0 80px rgba(34, 197, 94, 0.4);
          }
        }

        @keyframes errorPulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(239, 68, 68, 0.8),
              0 0 80px rgba(239, 68, 68, 0.4);
          }
        }

        .fade-in-up {
          opacity: ${isVisible ? 1 : 0};
          transform: translateY(${isVisible ? 0 : 50}px);
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

        .liquid-morph {
          animation: liquidMorph 12s ease-in-out infinite;
        }
        .ethereal-float {
          animation: etherealFloat 8s ease-in-out infinite;
        }
        .crystalline {
          animation: crystalline 6s ease-in-out infinite;
        }
        .holy-glow {
          animation: holyGlow 3s ease-in-out infinite alternate;
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

        .text-shadow-divine {
          text-shadow: 0 0 20px rgba(251, 191, 36, 0.8),
            0 0 40px rgba(251, 191, 36, 0.6), 0 0 80px rgba(251, 191, 36, 0.4);
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

        .divine-input {
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.8) 0%,
            rgba(30, 41, 59, 0.6) 100%
          );
          border: 2px solid rgba(251, 191, 36, 0.3);
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        .divine-input:focus {
          border-color: rgba(251, 191, 36, 0.7);
          box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.1),
            0 0 30px rgba(251, 191, 36, 0.3);
          outline: none;
        }

        .submit-button {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.9),
            rgba(245, 158, 11, 0.8)
          );
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .submit-button:hover:not(:disabled) {
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 1),
            rgba(245, 158, 11, 1)
          );
          transform: translateY(-2px) scale(1.05);
          animation: pulseSubmit 2s ease-in-out infinite;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-state {
          animation: successGlow 2s ease-in-out infinite;
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.9),
            rgba(16, 185, 129, 0.8)
          ) !important;
        }

        .error-state {
          animation: errorPulse 2s ease-in-out infinite;
          background: linear-gradient(
            135deg,
            rgba(239, 68, 68, 0.9),
            rgba(220, 38, 38, 0.8)
          ) !important;
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
      `}</style>

      <footer
        ref={sectionRef}
        className="relative bg-slate-900 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Multi-layered Divine Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/90 to-slate-900 z-0"></div>
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
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Newsletter Signup Section */}
            <div className="text-center mb-16 fade-in-up">
              <div className="relative  rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden group mx-auto max-w-4xl">
                <div className="relative z-10">
                  {/* Divine Heading */}
                  <div className="mb-8">
                    <h3 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight text-shadow-divine">
                      Stay Connected with
                      <span className="block mt-2 prism-text font-['Playfair_Display'] font-900">
                        Dear God Community
                      </span>
                    </h3>
                    <div className="w-32 h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto holy-glow"></div>
                  </div>

                  {/* Description */}
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-['Inter'] font-light tracking-wide mb-8 max-w-2xl mx-auto">
                    Join our prayer community and receive updates about the 100
                    Days of Prayer for 2026, faith encouragement, and
                    testimonies of God's faithfulness.
                  </p>

                  {/* Email Signup Form */}
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                      <div className="flex-1 relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="divine-input w-full px-6 py-4 lg:py-5 text-white placeholder-slate-400 rounded-xl font-['Inter'] text-base lg:text-lg"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting || !email}
                        className={`submit-button px-8 lg:px-10 py-4 lg:py-5 text-white font-semibold text-base lg:text-lg rounded-xl transition-all duration-400 ${
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
                      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                        <p className="text-green-400 font-['Inter'] font-medium">
                          Thank you! You've successfully joined our prayer
                          community. Expect updates about our 100 Days of Prayer
                          for 2026 and more.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                        <p className="text-red-400 font-['Inter'] font-medium">
                          Something went wrong. Please try again or contact us
                          directly.
                        </p>
                      </div>
                    )}

                    {submitStatus === "invalid" && (
                      <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                        <p className="text-yellow-400 font-['Inter'] font-medium">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center md:text-left">
                {/* About */}
                {/* <div>
                  <h4 className="font-['Playfair_Display'] text-xl font-bold text-amber-400 mb-4">
                    About Dear God
                  </h4>
                  <p className="text-slate-400 font-['Inter'] font-light leading-relaxed">
                    A community of prayer warriors interceding, believing, and
                    preparing hearts for God's greater works.
                  </p>
                </div> */}

                {/* Connect */}
                {/* <div>
                  <h4 className="font-['Playfair_Display'] text-xl font-bold text-amber-400 mb-4">
                    Connect With Us
                  </h4>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      href="https://www.facebook.com/share/1BDcMLfNyy/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-amber-400/20 hover:bg-amber-400/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.06 3.75 9.24 8.66 9.91v-7h-2.6v-2.91h2.6v-2.22c0-2.58 1.53-4 3.88-4 1.12 0 2.08.08 2.36.12v2.74h-1.62c-1.27 0-1.52.61-1.52 1.5v1.97h3.04l-.4 2.91h-2.64v7c4.91-.67 8.66-4.85 8.66-9.91 0-5.5-4.46-9.96-9.96-9.96z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/iamgoldmathias?t=iut0FJjTuKtQPRzU5TGp-w&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-amber-400/20 hover:bg-amber-400/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/iamgoldmathias?igsh=N3VkYzRqeWkxNHZ5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-amber-400/20 hover:bg-amber-400/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.16c3.21 0 3.58.01 4.84.07 1.17.06 1.81.25 2.23.42.56.22.96.49 1.38.91.42.42.69.82.91 1.38.17.42.36 1.06.42 2.23.06 1.26.07 1.63.07 4.84s-.01 3.58-.07 4.84c-.06 1.17-.25 1.81-.42 2.23-.22.56-.49.96-.91 1.38-.42.42-.82.69-1.38.91-.42.17-1.06.36-2.23.42-1.26.06-1.63.07-4.84.07s-3.58-.01-4.84-.07c-1.17-.06-1.81-.25-2.23-.42-.56-.22-.96-.49-1.38-.91-.42-.42-.69-.82-.91-1.38-.17-.42-.36-1.06-.42-2.23-.06-1.26-.07-1.63-.07-4.84s.01-3.58.07-4.84c.06-1.17.25-1.81.42-2.23.22-.56.49-.96.91-1.38.42-.42.82-.69 1.38-.91.42-.17 1.06-.36 2.23-.42 1.26-.06 1.63-.07 4.84-.07zm0-2.16c-3.25 0-3.66.01-4.94.07-1.29.06-2.17.27-2.94.58-.8.32-1.48.77-2.15 1.44s-1.12 1.35-1.44 2.15c-.31.77-.52 1.65-.58 2.94-.06 1.28-.07 1.69-.07 4.94s.01 3.66.07 4.94c.06 1.29.27 2.17.58 2.94.32.8.77 1.48 1.44 2.15s1.35 1.12 2.15 1.44c.77.31 1.65.52 2.94.58 1.28.06 1.69.07 4.94.07s3.66-.01 4.94-.07c1.29-.06 2.17-.27 2.94-.58.8-.32 1.48-.77 2.15-1.44s1.12-1.35 1.44-2.15c.31-.77.52-1.65.58-2.94.06-1.28.07-1.69.07-4.94s-.01-3.66-.07-4.94c-.06-1.29-.27-2.17-.58-2.94-.32-.8-.77-1.48-1.44-2.15s-1.35-1.12-2.15-1.44c-.77-.31-1.65-.52-2.94-.58-1.28-.06-1.69-.07-4.94-.07z" />
                        <path d="M12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8z" />
                        <circle cx="18.41" cy="5.59" r="1.44" />
                      </svg>
                    </a>
                  </div>
                </div> */}

                {/* Mission */}
                {/* <div>
                  <h4 className="font-['Playfair_Display'] text-xl font-bold text-amber-400 mb-4">
                    Our Mission
                  </h4>
                  <p className="text-slate-400 font-['Inter'] font-light leading-relaxed">
                    Standing in the gap, lifting burdens together, and preparing
                    hearts for God's greater works.
                  </p>
                </div> */}
              </div>
            </div>

            {/* Copyright */}
            <div className="fade-in-delay-2 mt-12 pt-8 border-t border-amber-400/20 text-center">
              <p className="text-slate-500 font-['Inter'] font-light">
                © 2024 Dear God Community. Made with faith and love. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Divine Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Crystalline Particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`crystal-${i}`}
              className="absolute crystalline"
              style={{
                width: `${6 + (i % 4) * 2}px`,
                height: `${6 + (i % 4) * 2}px`,
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

          {/* Sacred Cross Symbols */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`cross-${i}`}
              className="absolute text-amber-400/20 ethereal-float font-['Playfair_Display'] text-2xl select-none"
              style={{
                top: `${15 + i * 10}%`,
                left: `${5 + i * 12}%`,
                animationDelay: `${i * 0.8}s`,
                transform: `rotate(${Math.random() * 45}deg)`,
              }}
            >
              ✝
            </div>
          ))}

          {/* Floating Halos */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`halo-${i}`}
              className="absolute rounded-full border-2 border-amber-400/10 ethereal-float"
              style={{
                width: `${40 + (i % 3) * 20}px`,
                height: `${40 + (i % 3) * 20}px`,
                top: `${20 + i * 15}%`,
                right: `${10 + i * 10}%`,
                animationDelay: `${i * 1.5}s`,
                background: `radial-gradient(circle, rgba(251, 191, 36, 0.05) 0%, transparent 70%)`,
              }}
            ></div>
          ))}

          {/* Divine Light Rays */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute ethereal-float"
              style={{
                width: "2px",
                height: `${100 + i * 50}px`,
                background: `linear-gradient(to bottom, rgba(251, 191, 36, ${
                  0.3 - i * 0.05
                }), transparent)`,
                top: `${10 + i * 20}%`,
                left: `${20 + i * 25}%`,
                transformOrigin: "top center",
                transform: `rotate(${15 + i * 30}deg)`,
                animationDelay: `${i * 2}s`,
                filter: "blur(1px)",
              }}
            ></div>
          ))}

          {/* Heavenly Sparkles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute crystalline"
              style={{
                width: "4px",
                height: "4px",
                background: "rgba(251, 191, 36, 0.8)",
                borderRadius: "50%",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                filter: "drop-shadow(0 0 6px rgba(251, 191, 36, 0.8))",
              }}
            ></div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
