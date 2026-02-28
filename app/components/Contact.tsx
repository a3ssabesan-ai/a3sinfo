"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    stage: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          bottom: "0%",
          right: "-10%",
          background: "rgba(79,195,247,0.07)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(79,195,247,0.3)] bg-[rgba(79,195,247,0.05)] mb-6">
              <span className="text-[#4fc3f7] text-sm font-medium">
                Get in Touch
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] mb-6">
              Ready to{" "}
              <span className="gradient-text">Scale Your</span>{" "}
              Fintech?
            </h2>

            <p className="text-[#8892b0] text-lg mb-10 leading-relaxed">
              Whether you&apos;re a Series A startup defining your product roadmap
              or a public company navigating digital transformation, we&apos;re here
              to help. Let&apos;s talk.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "a3ssabesar@gmail.com",
                  href: "mailto:a3ssabesar@gmail.com",
                },
                {
                  icon: "🌍",
                  label: "Coverage",
                  value: "US · Europe · Asia",
                  href: null,
                },
                {
                  icon: "💼",
                  label: "Model",
                  value: "Remote-First, Embedded Consulting",
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[#8892b0] text-xs mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-[#4fc3f7] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4 text-sm">
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Response within 24 hours",
                  "Free 30-minute strategy call",
                  "No long-term commitments required",
                  "NDA available upon request",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#8892b0] text-sm">
                    <span className="text-[#4fc3f7] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="glass-card rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-white font-black text-2xl mb-4">
                  Message Received!
                </h3>
                <p className="text-[#8892b0] text-base leading-relaxed mb-6 max-w-sm">
                  Thank you for reaching out. Our team will review your message
                  and get back to you within 24 hours with next steps.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      company: "",
                      stage: "",
                      message: "",
                    });
                  }}
                  className="px-6 py-3 border border-[rgba(79,195,247,0.3)] text-[#4fc3f7] rounded-xl hover:bg-[rgba(79,195,247,0.08)] transition-colors text-sm font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 space-y-5"
              >
                <h3 className="text-white font-bold text-lg mb-2">
                  Tell Us About Your Company
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8892b0] text-xs font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-[rgba(79,195,247,0.05)] border border-[rgba(79,195,247,0.15)] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4a5568] focus:outline-none focus:border-[rgba(79,195,247,0.5)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8892b0] text-xs font-medium mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-[rgba(79,195,247,0.05)] border border-[rgba(79,195,247,0.15)] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4a5568] focus:outline-none focus:border-[rgba(79,195,247,0.5)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#8892b0] text-xs font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Fintech Inc."
                    className="w-full bg-[rgba(79,195,247,0.05)] border border-[rgba(79,195,247,0.15)] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4a5568] focus:outline-none focus:border-[rgba(79,195,247,0.5)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#8892b0] text-xs font-medium mb-2">
                    Company Stage
                  </label>
                  <select
                    name="stage"
                    value={form.stage}
                    onChange={handleChange}
                    className="w-full bg-[rgba(79,195,247,0.05)] border border-[rgba(79,195,247,0.15)] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[rgba(79,195,247,0.5)] transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#0d1b2e]">
                      Select your stage
                    </option>
                    <option value="series-a" className="bg-[#0d1b2e]">
                      Series A
                    </option>
                    <option value="series-b" className="bg-[#0d1b2e]">
                      Series B
                    </option>
                    <option value="series-c" className="bg-[#0d1b2e]">
                      Series C+
                    </option>
                    <option value="pre-ipo" className="bg-[#0d1b2e]">
                      Pre-IPO
                    </option>
                    <option value="public" className="bg-[#0d1b2e]">
                      Public Company
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#8892b0] text-xs font-medium mb-2">
                    How Can We Help? *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your current challenges and what you're trying to achieve..."
                    className="w-full bg-[rgba(79,195,247,0.05)] border border-[rgba(79,195,247,0.15)] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4a5568] focus:outline-none focus:border-[rgba(79,195,247,0.5)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
                    loading
                      ? "bg-[rgba(79,195,247,0.2)] text-[#8892b0] cursor-not-allowed"
                      : "bg-gradient-to-r from-[#4fc3f7] to-[#7c4dff] text-white hover:opacity-90 hover:scale-[1.01] shadow-lg shadow-[rgba(79,195,247,0.2)]"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>

                <p className="text-[#8892b0] text-xs text-center">
                  By submitting, you agree to our Privacy Policy. We never
                  share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
