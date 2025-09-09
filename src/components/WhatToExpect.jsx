import React from "react";

const WhatToExpect = () => {
  const expectations = [
    {
      title: "Prayer Covering",
      description: "Consistent intercession for your needs, hopes, and future.",
      icon: (
        <svg
          className="w-12 h-12 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      ),
    },
    {
      title: "Encouragement",
      description:
        "Uplifting words, Scriptures, and reminders of God’s promises.",
      icon: (
        <svg
          className="w-12 h-12 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ),
    },
    {
      title: "Community Support",
      description: "Knowing you are not alone, but part of a family of faith.",
      icon: (
        <svg
          className="w-12 h-12 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Programs of Prayer",
      description:
        "Special seasons like our 100 Days of Prayer for 2026, focused on interceding for breakthroughs and direction.",
      icon: (
        <svg
          className="w-12 h-12 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Generosity in Action",
      description:
        "A culture of giving that reflects God’s love in practical ways.",
      icon: (
        <svg
          className="w-12 h-12 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Define CSS animations and styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap");

        @keyframes fadeInUp {
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
          animation: fadeInUp 1s ease-out forwards;
        }

        .fade-in-delay-1 {
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.2s forwards;
        }

        .fade-in-delay-2 {
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.4s forwards;
        }

        .fade-in-delay-3 {
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.6s forwards;
        }
      `}</style>

      <section
        className="relative bg-slate-900 py-16 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
        id="what-to-expect"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 shadow-inner shadow-amber-500/10"
          style={{
            backgroundImage: `url('/images/expect.jpg')`,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-amber-900/50 to-slate-900/60 z-5"></div>

        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.05] z-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="mb-8 sm:mb-12 fade-in-up">
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                What to Expect
                <span className="block mt-2 bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                  When You Connect
                </span>
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full shadow-lg shadow-amber-500/30"></div>
            </div>

            {/* Introductory Text */}
            <div className="mb-12 sm:mb-16 fade-in-delay-1">
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-sans font-light tracking-wide max-w-3xl mx-auto">
                Joining the Dear God community means stepping into a space of
                faith, support, and love. Here’s what you can look forward to:
              </p>
            </div>

            {/* Expectations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 fade-in-delay-2">
              {expectations.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-slate-900/90 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-6 sm:p-8 text-left shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {item.icon}
                    <h3 className="ml-4 text-xl sm:text-2xl font-sans font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-slate-300 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            {/* <div className="mt-12 sm:mt-16 fade-in-delay-3">
              <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-base sm:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/25 active:scale-[0.98]">
                <span className="relative z-10">Join Us Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div> */}
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${3 + (i % 3)}px`,
                height: `${3 + (i % 3)}px`,
                backgroundColor: `rgba(251, 191, 36, ${0.2 + i * 0.05})`,
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            ></div>
          ))}
          {[...Array(5)].map((_, i) => (
            <div
              key={`right-${i}`}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${3 + (i % 3)}px`,
                height: `${3 + (i % 3)}px`,
                backgroundColor: `rgba(251, 191, 36, ${0.2 + i * 0.05})`,
                top: `${25 + i * 12}%`,
                right: `${10 + i * 12}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + i * 0.4}s`,
              }}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhatToExpect;
