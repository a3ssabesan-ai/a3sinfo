"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: "15+", label: "Years Fintech Experience" },
  { value: "50+", label: "Products Launched" },
  { value: "200M+", label: "Users Impacted" },
  { value: "Series A→IPO", label: "Full Journey Support" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <div
        className="orb orb-blue"
        style={{
          width: 600,
          height: 600,
          top: "-20%",
          right: "-10%",
          background: "rgba(79,195,247,0.1)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="orb orb-purple"
        style={{
          width: 500,
          height: 500,
          bottom: "10%",
          left: "-5%",
          background: "rgba(124,77,255,0.1)",
          filter: "blur(100px)",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-float absolute border border-[rgba(79,195,247,0.15)] rounded-lg"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              top: `${10 + i * 13}%`,
              left: `${5 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(79,195,247,0.3)] bg-[rgba(79,195,247,0.05)] mb-8">
            <div className="w-2 h-2 rounded-full bg-[#4fc3f7] animate-pulse" />
            <span className="text-[#4fc3f7] text-sm font-medium">
              Fintech &bull; Product Management &bull; IT Consulting
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
            Scaling Innovation{" "}
            <span className="gradient-text">from Series A</span>
            <br />
            to{" "}
            <span className="gradient-text">Public Market</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#8892b0] max-w-2xl mb-10 leading-relaxed">
            A3S bridges complex financial requirements and world-class product
            experiences. We bring 15+ years of fintech expertise to help you
            build, scale, and dominate.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-[#4fc3f7] to-[#7c4dff] text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[rgba(79,195,247,0.3)] text-base"
            >
              Start Your Journey
            </button>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 border border-[rgba(79,195,247,0.3)] text-[#4fc3f7] font-semibold rounded-xl hover:bg-[rgba(79,195,247,0.08)] transition-all hover:scale-105 text-base"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 text-center transition-all hover:border-[rgba(79,195,247,0.4)] hover:scale-105"
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#8892b0] font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
    </section>
  );
}
