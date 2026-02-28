"use client";

import { useState } from "react";

const companyStages = [
  "Series A ($1M–$10M)",
  "Series B ($10M–$50M)",
  "Series C ($50M–$200M)",
  "Growth Stage (Pre-IPO)",
  "Public Company",
];

const challenges = [
  "Product-Market Fit",
  "Team Scaling",
  "Technical Debt",
  "Compliance & Regulation",
  "International Expansion",
  "Digital Transformation",
  "M&A Integration",
];

function generateRoadmap(stage: string, challenge: string): string[] {
  const stageNum = companyStages.indexOf(stage);
  const baseRoadmap: Record<string, string[]> = {
    "Product-Market Fit": [
      "Conduct deep customer discovery interviews (30+ sessions)",
      "Map competitive landscape across 3 time horizons",
      "Define North Star metric and leading indicators",
      "Build rapid iteration framework with 2-week sprint cycles",
      "Establish product analytics stack (Mixpanel, Amplitude, or Heap)",
    ],
    "Team Scaling": [
      "Audit current team structure and identify capability gaps",
      "Design org chart for 2x headcount with clear career ladders",
      "Implement Product Manager onboarding program (90-day plan)",
      "Create documentation culture and product knowledge base",
      "Establish cross-functional product squads aligned to business outcomes",
    ],
    "Technical Debt": [
      "Conduct comprehensive architecture review and debt inventory",
      "Prioritize refactoring by customer impact and risk surface",
      "Implement strangler fig pattern for gradual legacy migration",
      "Introduce engineering quality KPIs (test coverage, DORA metrics)",
      "Allocate 20–30% sprint capacity to technical debt systematically",
    ],
    "Compliance & Regulation": [
      "Map all applicable regulatory frameworks (PCI, SOC2, GDPR, PSD2)",
      "Conduct gap analysis against current product and engineering practices",
      "Embed compliance champion in each product squad",
      "Build automated compliance testing into CI/CD pipeline",
      "Establish quarterly compliance review and audit readiness program",
    ],
    "International Expansion": [
      "Analyze target markets for regulatory, cultural, and technical requirements",
      "Design multi-jurisdiction data architecture (localization, residency)",
      "Build localization framework with RTL and multi-currency support",
      "Partner with local compliance counsel in each target market",
      "Create market entry go-to-market playbook with local distribution",
    ],
    "Digital Transformation": [
      "Assess current technology landscape and create transformation roadmap",
      "Identify quick-win digitization opportunities for immediate ROI",
      "Design cloud-native target architecture aligned to business strategy",
      "Establish Center of Excellence for digital practices and tooling",
      "Create change management program with executive sponsorship",
    ],
    "M&A Integration": [
      "Conduct technical due diligence on acquired company stack",
      "Map product portfolio overlap and consolidation opportunities",
      "Design 90-180-365 day integration milestones with clear ownership",
      "Harmonize engineering practices, tooling, and deployment processes",
      "Communicate integration roadmap to customers and retain key talent",
    ],
  };

  const stageModifiers = [
    "Focus on velocity and experimentation over process",
    "Begin formalizing processes while maintaining startup speed",
    "Invest heavily in platform and infrastructure scalability",
    "Optimize for predictability and board-level reporting",
    "Prioritize governance, stability, and systematic innovation",
  ];

  const roadmap = baseRoadmap[challenge] || baseRoadmap["Product-Market Fit"];
  const modifier = stageNum >= 0 ? `\n[Stage Context] ${stageModifiers[stageNum]}` : "";

  return [
    ...roadmap,
    ...(modifier ? [modifier] : []),
  ];
}

export default function AIStrategy() {
  const [stage, setStage] = useState("");
  const [challenge, setChallenge] = useState("");
  const [roadmap, setRoadmap] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (!stage || !challenge) return;
    setLoading(true);
    setGenerated(false);

    setTimeout(() => {
      setRoadmap(generateRoadmap(stage, challenge));
      setLoading(false);
      setGenerated(true);
    }, 1800);
  };

  return (
    <section id="ai-strategy" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(124,77,255,0.06)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(124,77,255,0.3)] bg-[rgba(124,77,255,0.05)] mb-6">
            <span className="text-[#b39ddb] text-sm font-medium">
              AI-Powered Tool
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Generate Your{" "}
            <span className="gradient-text">Strategic Roadmap</span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-xl mx-auto">
            Tell us your stage and primary challenge. Get an instant,
            actionable strategic roadmap tailored to your situation.
          </p>
        </div>

        {/* Tool card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Stage selector */}
            <div>
              <label className="block text-[#4fc3f7] text-sm font-semibold mb-3">
                Company Stage
              </label>
              <div className="flex flex-col gap-2">
                {companyStages.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStage(s)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      stage === s
                        ? "bg-[rgba(79,195,247,0.15)] border border-[rgba(79,195,247,0.5)] text-[#4fc3f7]"
                        : "border border-[rgba(79,195,247,0.1)] text-[#8892b0] hover:border-[rgba(79,195,247,0.3)] hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Challenge selector */}
            <div>
              <label className="block text-[#b39ddb] text-sm font-semibold mb-3">
                Primary Challenge
              </label>
              <div className="flex flex-col gap-2">
                {challenges.map((c) => (
                  <button
                    key={c}
                    onClick={() => setChallenge(c)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      challenge === c
                        ? "bg-[rgba(124,77,255,0.15)] border border-[rgba(124,77,255,0.5)] text-[#b39ddb]"
                        : "border border-[rgba(124,77,255,0.1)] text-[#8892b0] hover:border-[rgba(124,77,255,0.3)] hover:text-white"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!stage || !challenge || loading}
            className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
              !stage || !challenge || loading
                ? "bg-[rgba(79,195,247,0.1)] text-[#8892b0] cursor-not-allowed"
                : "bg-gradient-to-r from-[#4fc3f7] to-[#7c4dff] text-white hover:opacity-90 hover:scale-[1.01] shadow-lg shadow-[rgba(79,195,247,0.2)]"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Generating Roadmap...
              </span>
            ) : (
              "Generate Strategic Roadmap ✨"
            )}
          </button>

          {/* Results */}
          {generated && roadmap.length > 0 && (
            <div className="mt-8 p-6 rounded-2xl bg-[rgba(79,195,247,0.04)] border border-[rgba(79,195,247,0.15)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#4fc3f7] animate-pulse" />
                <h3 className="text-white font-bold text-base">
                  Strategic Roadmap: {stage} · {challenge}
                </h3>
              </div>
              <ol className="space-y-3">
                {roadmap.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    {item.startsWith("\n") ? (
                      <div className="mt-2 pt-3 border-t border-[rgba(79,195,247,0.15)] w-full">
                        <p className="text-[#b39ddb] text-sm italic">
                          {item.trim()}
                        </p>
                      </div>
                    ) : (
                      <>
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#4fc3f7] to-[#7c4dff] text-white text-xs flex items-center justify-center font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-[#ccd6f6] text-sm leading-relaxed">
                          {item}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-4 border-t border-[rgba(79,195,247,0.15)]">
                <p className="text-[#8892b0] text-xs text-center">
                  Want a custom deep-dive?{" "}
                  <button
                    onClick={() =>
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-[#4fc3f7] hover:underline font-medium"
                  >
                    Schedule a consultation →
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
