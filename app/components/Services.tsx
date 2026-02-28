"use client";

const services = [
  {
    title: "Product Management",
    description:
      "End-to-end product lifecycle management. From roadmap strategy to feature prioritization and market-ready launches.",
    color: "#4fc3f7",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    tags: ["Roadmapping", "OKRs", "Feature Prioritization", "Market Launch"],
  },
  {
    title: "IT Consulting",
    description:
      "Modernizing legacy systems and architecting scalable cloud solutions. Expert advice on tech stack selection and development workflows.",
    color: "#7c4dff",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tags: ["Cloud Migration", "API Design", "Tech Stack", "DevOps"],
  },
  {
    title: "Fintech Strategy",
    description:
      "Deep domain expertise across payments, lending, and digital banking. Navigating Series A–C scaling challenges with precision.",
    color: "#4fc3f7",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tags: ["Payments", "Lending", "Digital Banking", "Wealthtech"],
  },
  {
    title: "Series A–C Scaling",
    description:
      "Hands-on guidance for startups transitioning from product-market fit to hyper-scale. Team structure and process optimization.",
    color: "#7c4dff",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    tags: ["PMF", "Team Building", "Process Design", "Fundraising"],
  },
  {
    title: "Public Company Ops",
    description:
      "Operational excellence for listed companies. Ensuring governance, stability, and continuous innovation at scale.",
    color: "#4fc3f7",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tags: ["Governance", "SOX", "Investor Relations", "Growth"],
  },
  {
    title: "Compliance & Security",
    description:
      "Security-first development practices and global financial compliance standards. Audit-ready for PCI-DSS, SOC2, GDPR, and PSD2.",
    color: "#7c4dff",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    tags: ["PCI-DSS", "SOC2", "GDPR", "PSD2"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          top: "10%",
          right: "-10%",
          background: "rgba(79,195,247,0.06)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(79,195,247,0.3)] bg-[rgba(79,195,247,0.05)] mb-6">
            <span className="text-[#4fc3f7] text-sm font-medium">
              Our Offerings
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Comprehensive Solutions for{" "}
            <span className="gradient-text">Digital Growth</span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            Tailored consulting services designed to solve the unique challenges
            of modern technology-driven financial businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const isBlue = service.color === "#4fc3f7";
            const rgb = isBlue ? "79,195,247" : "124,77,255";
            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 group cursor-default hover:border-[rgba(79,195,247,0.4)]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${rgb},0.1)`,
                    border: `1px solid rgba(${rgb},0.2)`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-3">
                  {service.title}
                </h3>

                <p className="text-[#8892b0] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs rounded-md font-medium"
                      style={{
                        background: `rgba(${rgb},0.08)`,
                        color: service.color,
                        border: `1px solid rgba(${rgb},0.15)`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
