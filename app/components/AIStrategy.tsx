"use client";

import { useState } from "react";
import { BusinessStage, StrategyResult } from "../types";

export default function AIStrategy() {
  const [stage, setStage] = useState<BusinessStage>(BusinessStage.SERIES_A);
  const [challenge, setChallenge] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challenge.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/strategy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stage, challenge }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate strategy");
      }

      setResult(data as StrategyResult);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to generate strategy. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-strategy" className="py-24 relative overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(124,77,255,0.3)] bg-[rgba(124,77,255,0.05)] mb-6">
            <span className="text-[#b39ddb] text-sm font-medium">
              Instant AI Insights
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            AI-Powered{" "}
            <span className="gradient-text">Strategy Architect</span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-xl mx-auto">
            Input your business stage and primary challenge to receive a
            high-level strategic roadmap instantly.
          </p>
        </div>

        {/* Tool card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Stage */}
              <div>
                <label className="block text-[#4fc3f7] text-sm font-semibold mb-3">
                  Company Stage
                </label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value as BusinessStage)}
                  className="w-full bg-[rgba(79,195,247,0.05)] border border-[rgba(79,195,247,0.2)] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[rgba(79,195,247,0.5)] transition-colors appearance-none cursor-pointer"
                >
                  {Object.values(BusinessStage).map((s) => (
                    <option key={s} value={s} className="bg-[#0d1b2e]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Empty for grid alignment on larger screens */}
              <div className="hidden sm:block" />
            </div>

            {/* Challenge */}
            <div>
              <label className="block text-[#b39ddb] text-sm font-semibold mb-3">
                Primary Challenge
              </label>
              <textarea
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                placeholder="e.g., Scaling our core payment engine for international markets while maintaining PCI-DSS compliance..."
                rows={4}
                required
                className="w-full bg-[rgba(79,195,247,0.05)] border border-[rgba(79,195,247,0.15)] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4a5568] focus:outline-none focus:border-[rgba(79,195,247,0.5)] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !challenge.trim()}
              className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
                loading || !challenge.trim()
                  ? "bg-[rgba(79,195,247,0.1)] text-[#8892b0] cursor-not-allowed"
                  : "bg-gradient-to-r from-[#4fc3f7] to-[#7c4dff] text-white hover:opacity-90 hover:scale-[1.01] shadow-lg shadow-[rgba(79,195,247,0.2)]"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyzing Business Dynamics...
                </span>
              ) : (
                "Generate AI Strategy Roadmap ✨"
              )}
            </button>
          </form>

          {/* Error */}
          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center text-sm">
              {error}
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="mt-10 bg-[rgba(79,195,247,0.03)] rounded-2xl border border-[rgba(79,195,247,0.15)] p-8">
              <h3 className="text-xl font-black text-white mb-8 pb-4 border-b border-[rgba(79,195,247,0.15)]">
                {result.title}
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Roadmap */}
                <div>
                  <h4 className="text-[#4fc3f7] font-bold uppercase text-xs tracking-widest mb-4">
                    Priority Action Roadmap
                  </h4>
                  <ol className="space-y-3">
                    {result.roadmap.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#4fc3f7] to-[#7c4dff] text-white text-xs flex items-center justify-center font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-[#ccd6f6] text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="space-y-8">
                  {/* Key Focus Areas */}
                  <div>
                    <h4 className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-4">
                      Key Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.priorityItems.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm rounded-full font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Risk Mitigation */}
                  <div>
                    <h4 className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-4">
                      Risk Mitigation
                    </h4>
                    <ul className="space-y-2">
                      {result.potentialPitfalls.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-[#8892b0] text-sm"
                        >
                          <span className="text-orange-400 flex-shrink-0">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[rgba(79,195,247,0.04)] border border-[rgba(79,195,247,0.1)] rounded-xl">
                <p className="text-xs text-[#8892b0] text-center">
                  This AI-generated roadmap is for directional guidance. For a
                  full deep-dive strategy session,{" "}
                  <button
                    onClick={() =>
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-[#4fc3f7] hover:underline font-medium"
                  >
                    book a consultation →
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
