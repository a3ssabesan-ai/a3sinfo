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
    <section
      id="ai-strategy"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Subtle orbs on dark bg */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">
            Instant AI Insights
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI-Powered Strategy Architect
          </p>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Input your current business stage and primary challenge to receive a
            high-level strategic roadmap instantly.
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-800/50 rounded-3xl border border-slate-700 p-8 md:p-12 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Company Stage
                </label>
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value as BusinessStage)}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  {Object.values(BusinessStage).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Primary Challenge
              </label>
              <textarea
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                placeholder="e.g., Scaling our core payment engine for international markets while maintaining PCI-DSS compliance..."
                rows={3}
                required
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 placeholder-slate-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !challenge.trim()}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Analyzing Business Dynamics...
                </>
              ) : (
                "Generate AI Strategy Roadmap"
              )}
            </button>
          </form>

          {error && (
            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center text-sm">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-12 bg-slate-900/50 rounded-2xl border border-slate-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-slate-700">
                {result.title}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Roadmap */}
                <div>
                  <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">
                    Priority Action Roadmap
                  </h4>
                  <ul className="space-y-3">
                    {result.roadmap.map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm">
                        <span className="text-blue-500 font-bold flex-shrink-0">
                          {i + 1}.
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-8">
                  {/* Focus areas */}
                  <div>
                    <h4 className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-4">
                      Key Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.priorityItems.map((item, i) => (
                        <span
                          key={i}
                          className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-500/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Risks */}
                  <div>
                    <h4 className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-4">
                      Risk Mitigation
                    </h4>
                    <ul className="space-y-2">
                      {result.potentialPitfalls.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-slate-400 text-sm"
                        >
                          <span className="text-orange-500 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                <p className="text-xs text-slate-500 text-center">
                  This AI-generated roadmap is for directional guidance. For a
                  full deep-dive strategy session,{" "}
                  <button
                    onClick={() =>
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-blue-400 hover:underline font-medium"
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
