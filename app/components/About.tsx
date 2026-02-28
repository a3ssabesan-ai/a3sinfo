"use client";

import Image from "next/image";

const pillars = [
  "Strategic product architecture for high-volume Fintech platforms.",
  "Compliance-first product design for global financial regulations.",
  "Scaling product organizations from Series A to C and beyond.",
  "Digital product transformation for established public enterprises.",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          top: "20%",
          left: "-10%",
          background: "rgba(124,77,255,0.08)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-[rgba(79,195,247,0.15)]">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800&h=800"
                alt="Fintech Product Strategy Session"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                unoptimized
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 glass-card rounded-2xl p-5 shadow-xl hidden md:block">
              <div className="gradient-text text-4xl font-black">15+</div>
              <div className="text-[#8892b0] text-xs font-medium leading-tight mt-1">
                Years of Fintech<br />Product Strategy
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(124,77,255,0.3)] bg-[rgba(124,77,255,0.05)] mb-6">
              <span className="text-[#b39ddb] text-sm font-medium">
                About A3S
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] mb-6">
              Specialized{" "}
              <span className="gradient-text">Fintech Product</span>{" "}
              Consulting
            </h2>

            <p className="text-[#8892b0] text-lg mb-6 leading-relaxed">
              At A3S Consulting, we provide high-impact product strategy and
              execution guidance derived from the front lines of global financial
              technology. Our expertise spans the entire growth lifecycle — from
              initial market entry at Series A to the rigorous operational
              demands of public listed companies.
            </p>

            <div className="space-y-4 mb-10">
              {pillars.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(79,195,247,0.1)] border border-[rgba(79,195,247,0.3)] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-[#4fc3f7]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[#ccd6f6] font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-4 border-[#4fc3f7] pl-6 py-2">
              <p className="text-[#8892b0] italic text-base leading-relaxed">
                &ldquo;We bridge the gap between complex financial requirements
                and world-class product experiences.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
