"use client";

const ticker = [
  "FINTECH",
  "PRODUCT",
  "STRATEGY",
  "IT ARCHITECTURE",
  "SCALING",
  "COMPLIANCE",
  "INNOVATION",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-0 lg:pt-48 lg:pb-0 overflow-hidden bg-slate-50"
    >
      {/* Soft blur orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-indigo-100 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center pb-20 lg:pb-32">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Expertise in Fintech &amp; SaaS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Scaling Innovation from
            <br />
            <span className="gradient-text">Series A to Public Market</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            A3S Consulting provides top-tier Product Management and IT
            Consulting. We specialize in hyper-growth startups and public
            enterprises looking to modernize their digital infrastructure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1"
            >
              Start Your Consultation
            </button>
            <button
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-slate-200 bg-white py-6 overflow-hidden">
        <div
          className="flex gap-12 items-center whitespace-nowrap"
          style={{ animation: "ticker 20s linear infinite" }}
        >
          {[...ticker, ...ticker].map((word, i) => (
            <span
              key={i}
              className="text-sm font-bold tracking-widest uppercase text-slate-400"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
