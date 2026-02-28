"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(79,195,247,0.1)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4fc3f7] to-[#7c4dff] rounded-lg opacity-20" />
                <div className="absolute inset-0 border border-[rgba(79,195,247,0.4)] rounded-lg" />
                <span className="relative text-[#4fc3f7] font-black text-sm tracking-widest">
                  A3S
                </span>
              </div>
              <div>
                <div className="text-white font-bold text-sm">A3S Consulting</div>
                <div className="text-[#8892b0] text-xs">& Business Services</div>
              </div>
            </div>
            <p className="text-[#8892b0] text-sm leading-relaxed max-w-xs">
              Specialized IT consulting and product management for fintech
              companies scaling from Series A to public markets.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Product Management",
                "IT Consulting",
                "Fintech Strategy",
                "Compliance & Security",
                "Series A–C Scaling",
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() =>
                      document
                        .querySelector("#services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-[#8892b0] hover:text-[#4fc3f7] text-xs transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:a3ssabesan@gmail.com"
                  className="text-[#8892b0] hover:text-[#4fc3f7] text-xs transition-colors"
                >
                  a3ssabesan@gmail.com
                </a>
              </li>
              <li className="text-[#8892b0] text-xs">Remote-First</li>
              <li className="text-[#8892b0] text-xs">US · Europe · Asia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(79,195,247,0.1)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8892b0] text-xs">
            © {year} A3S Consulting and Business Services. All rights reserved.
          </p>
          <p className="text-[#8892b0] text-xs">
            Scaling Innovation from Series A to Public Market
          </p>
        </div>
      </div>
    </footer>
  );
}
