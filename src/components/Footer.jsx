import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { debounce } from "lodash";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    submissionType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // "success", "error", "invalid", or ""
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const dropdownRef = useRef(null);

  const submissionOptions = [
    { value: "testimony", label: "Share a Testimony", icon: "🙌" },
    { value: "prayer_request", label: "Prayer Request", icon: "🙏" },
    { value: "contact_us", label: "Contact Us", icon: "💬" },
  ];

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmissionTypeSelect = (option) => {
    handleInputChange("submissionType", option.value);
    setIsDropdownOpen(false);
  };

  const getSelectedOption = () => {
    return submissionOptions.find(
      (option) => option.value === formData.submissionType
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setSubmitStatus("invalid");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }

    if (!formData.submissionType) {
      setSubmitStatus("invalid");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedOption = getSelectedOption();
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        submission_type: selectedOption.label,
        user_message: formData.message,
        submission_date: new Date().toLocaleString(),
        to_email: "client@deargod.com",
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_losh0yk",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_f3o7guj",
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "JdaLwYqdT0AbkiVja"
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        submissionType: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus(""), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDescription = () => {
    const selectedOption = getSelectedOption();
    if (!selectedOption) {
      return "Connect with our prayer community. Share your testimony, request prayer, or get in touch with us.";
    }

    switch (selectedOption.value) {
      case "testimony":
        return "Share how God has moved in your life and encourage others with your testimony of His faithfulness.";
      case "prayer_request":
        return "Submit your prayer request and let our community stand with you in faith and intercession.";
      case "contact_us":
        return "Get in touch with our team. We'd love to hear from you and answer any questions you may have.";
      default:
        return "Connect with our prayer community. Share your testimony, request prayer, or get in touch with us.";
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

        .divine-dropdown {
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(251, 191, 36, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .divine-dropdown:hover {
          border-color: rgba(251, 191, 36, 0.5);
        }

        .dropdown-menu {
          background: rgba(15, 23, 42, 0.98);
          border: 1px solid rgba(251, 191, 36, 0.4);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .dropdown-option {
          transition: all 0.2s ease;
        }

        .dropdown-option:hover {
          background: rgba(251, 191, 36, 0.1);
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
            {/* Contact Form Section */}
            <div className="text-center mb-12 fade-in-up">
              <div className="relative glass-divine rounded-2xl p-6 sm:p-8 lg:p-10 group mx-auto max-w-4xl">
                <div className="relative z-10">
                  {/* Heading */}
                  <div className="mb-6">
                    <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight text-shadow-divine">
                      Connect with
                      <span className="block mt-1 prism-text font-900">
                        Dear God Community
                      </span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto holy-glow"></div>
                  </div>

                  {/* Dynamic Description */}
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-['Inter'] font-light mb-8 max-w-2xl mx-auto">
                    {getDescription()}
                  </p>

                  {/* Contact Form */}
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto space-y-4"
                  >
                    {/* Name and Submission Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Input */}
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Your full name"
                          className="divine-input w-full px-4 py-3 text-white placeholder-slate-400 rounded-lg font-['Inter'] text-sm sm:text-base"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* Submission Type Dropdown */}
                      <div className="relative" ref={dropdownRef}>
                        <div
                          className="divine-dropdown w-full px-4 py-3 text-white rounded-lg font-['Inter'] text-sm sm:text-base flex items-center justify-between"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          <span
                            className={
                              formData.submissionType
                                ? "text-white"
                                : "text-slate-400"
                            }
                          >
                            {formData.submissionType
                              ? getSelectedOption().label
                              : "Select purpose"}
                          </span>
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>

                        {isDropdownOpen && (
                          <div className="dropdown-menu absolute top-full left-0 right-0 mt-1 rounded-lg z-50 overflow-hidden">
                            {submissionOptions.map((option) => (
                              <div
                                key={option.value}
                                className="dropdown-option px-4 py-3 text-white cursor-pointer flex items-center gap-3 font-['Inter'] text-sm sm:text-base"
                                onClick={() =>
                                  handleSubmissionTypeSelect(option)
                                }
                              >
                                <span className="text-lg">{option.icon}</span>
                                <span>{option.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Your email address"
                        className="divine-input w-full px-4 py-3 text-white placeholder-slate-400 rounded-lg font-['Inter'] text-sm sm:text-base"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="relative">
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder={
                          formData.submissionType === "testimony"
                            ? "Share your testimony of God's goodness..."
                            : formData.submissionType === "prayer_request"
                            ? "Share your prayer request..."
                            : formData.submissionType === "contact_us"
                            ? "Your message..."
                            : "Your message..."
                        }
                        rows={4}
                        className="divine-input w-full px-4 py-3 text-white placeholder-slate-400 rounded-lg font-['Inter'] text-sm sm:text-base resize-none"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-2">
                      <button
                        type="submit"
                        disabled={
                          isSubmitting ||
                          !formData.name ||
                          !formData.email ||
                          !formData.submissionType ||
                          !formData.message
                        }
                        className={`submit-button px-8 py-3 text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 min-w-[160px] ${
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
                            ? "Sent Successfully!"
                            : submitStatus === "error"
                            ? "Try Again"
                            : submitStatus === "invalid"
                            ? "Please Check Form"
                            : "Send Message"}
                        </span>
                      </button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <p className="text-green-400 font-['Inter'] text-sm font-medium text-center">
                          Thank you! Your message has been sent successfully.
                          We'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 font-['Inter'] text-sm font-medium text-center">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    )}

                    {submitStatus === "invalid" && (
                      <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="text-yellow-400 font-['Inter'] text-sm font-medium text-center">
                          Please fill in all fields with valid information.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
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
