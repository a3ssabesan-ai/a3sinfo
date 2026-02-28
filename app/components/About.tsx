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
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800&h=800"
                alt="Fintech Product Strategy Session"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-white text-4xl font-bold">15+</div>
              <div className="text-blue-100 text-sm font-medium leading-tight mt-1">
                Years of Fintech
                <br />
                Product Strategy
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Specialized Fintech Product Consulting
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At A3S Consulting, we provide high-impact product strategy and
              execution guidance derived from the front lines of global financial
              technology. Our expertise spans the entire growth lifecycle — from
              initial market entry at Series A to the rigorous operational
              demands of public listed companies.
            </p>

            <div className="space-y-4 mb-8">
              {pillars.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2 italic text-slate-600">
              &ldquo;We bridge the gap between complex financial requirements
              and world-class product experiences.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
