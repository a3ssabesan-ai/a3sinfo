"use client";

const pillars = [
  {
    icon: "🏗️",
    title: "Strategic Product Architecture",
    description:
      "High-volume fintech platform design that scales from thousands to millions of transactions without technical debt accumulation.",
  },
  {
    icon: "🔐",
    title: "Compliance-Focused Design",
    description:
      "Deep expertise in PCI-DSS, SOC2, GDPR, PSD2, and global financial regulations baked into product DNA from day one.",
  },
  {
    icon: "🚀",
    title: "Growth-Stage Scaling",
    description:
      "Proven playbooks for scaling product organizations from Series A through B, C, and public market readiness.",
  },
  {
    icon: "🌐",
    title: "Digital Transformation",
    description:
      "Legacy system modernization and cloud migration for established enterprises seeking competitive digital advantages.",
  },
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
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(124,77,255,0.3)] bg-[rgba(124,77,255,0.05)] mb-6">
              <span className="text-[#b39ddb] text-sm font-medium">
                About A3S
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] mb-6">
              15+ Years of{" "}
              <span className="gradient-text">Fintech Product</span>{" "}
              Strategy
            </h2>

            <p className="text-[#8892b0] text-lg mb-6 leading-relaxed">
              A3S Consulting was founded on a single belief: exceptional
              financial products require both deep domain expertise and
              world-class engineering culture. We don&apos;t just consult —
              we embed ourselves in your product organization and drive
              measurable outcomes.
            </p>

            <p className="text-[#8892b0] text-base mb-10 leading-relaxed">
              From architecting payment rails serving millions of daily users to
              guiding startups through their Series A pitch decks, our team has
              been in the trenches at every stage of the fintech growth journey.
            </p>

            {/* Key metrics */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "US", desc: "Headquarters" },
                { value: "Remote-First", desc: "Global Strategy" },
                { value: "US · EU · Asia", desc: "Markets Served" },
              ].map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[#4fc3f7] font-bold text-lg">{m.value}</span>
                  <span className="text-[#8892b0] text-xs">{m.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — pillars */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 hover:border-[rgba(79,195,247,0.4)] transition-all hover:-translate-y-1 cursor-default"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-[#8892b0] text-xs leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
