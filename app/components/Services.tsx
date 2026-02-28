"use client";

const services = [
  {
    icon: "📋",
    title: "Product Management",
    description:
      "End-to-end product lifecycle management, from ideation through post-launch optimization. We build roadmaps, prioritize features using proven frameworks, and drive cross-functional alignment.",
    tags: ["Roadmapping", "OKRs", "Feature Prioritization", "Market Launch"],
    color: "#4fc3f7",
  },
  {
    icon: "💻",
    title: "IT Consulting",
    description:
      "Legacy system modernization, cloud architecture design, and technology stack selection. We help your engineering team move faster without sacrificing quality or security.",
    tags: ["Cloud Migration", "API Design", "Tech Stack", "DevOps"],
    color: "#7c4dff",
  },
  {
    icon: "💳",
    title: "Fintech Strategy",
    description:
      "Deep domain expertise across payments, lending, digital banking, and wealthtech. We translate complex financial requirements into competitive product advantages.",
    tags: ["Payments", "Lending", "Digital Banking", "Wealthtech"],
    color: "#4fc3f7",
  },
  {
    icon: "📈",
    title: "Series A–C Scaling",
    description:
      "Navigate the challenging transition from product-market fit to growth-stage operations. We provide guidance on team structure, process optimization, and investor expectations.",
    tags: ["PMF", "Team Building", "Process Design", "Fundraising"],
    color: "#7c4dff",
  },
  {
    icon: "🏛️",
    title: "Public Company Ops",
    description:
      "Governance frameworks, stability engineering, and continuous innovation programs for publicly listed companies navigating the demands of quarterly reporting.",
    tags: ["Governance", "SOX", "Investor Relations", "Growth"],
    color: "#4fc3f7",
  },
  {
    icon: "🛡️",
    title: "Compliance & Security",
    description:
      "Security-first development practices and global financial compliance standards. We ensure your product is audit-ready for PCI-DSS, SOC2, GDPR, PSD2, and more.",
    tags: ["PCI-DSS", "SOC2", "GDPR", "PSD2"],
    color: "#7c4dff",
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
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            What We{" "}
            <span className="gradient-text">Do Best</span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            Comprehensive consulting and advisory services designed specifically
            for technology-driven financial services companies.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-7 hover:border-[rgba(79,195,247,0.4)] transition-all duration-300 hover:-translate-y-2 group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-all group-hover:scale-110"
                style={{
                  background: `rgba(${service.color === "#4fc3f7" ? "79,195,247" : "124,77,255"},0.1)`,
                  border: `1px solid rgba(${service.color === "#4fc3f7" ? "79,195,247" : "124,77,255"},0.2)`,
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
                      background: `rgba(${service.color === "#4fc3f7" ? "79,195,247" : "124,77,255"},0.08)`,
                      color: service.color,
                      border: `1px solid rgba(${service.color === "#4fc3f7" ? "79,195,247" : "124,77,255"},0.15)`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
