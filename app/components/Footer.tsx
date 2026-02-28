"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2 tracking-tighter">
              A3S <span className="text-blue-500">Consulting</span>
            </div>
            <p className="text-sm max-w-xs">
              Specialized Product Management and IT Consulting for the Fintech
              economy.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium">
            <button
              onClick={() => scrollTo("#about")}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="text-center md:text-right">
            <div className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} A3S Consulting and Business
              Services.
            </div>
            <div className="text-xs text-slate-600 mt-1">All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
