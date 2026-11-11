import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#070B14]/90 dark:bg-[#070B14]/90 bg-white/95 backdrop-blur-md border-b border-[#1E293B] dark:border-[#1E293B] border-slate-200 shadow-[0_4px_30px_rgba(7,11,20,0.7)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-1.5 font-display font-semibold text-sm sm:text-base tracking-wider uppercase whitespace-nowrap shrink-0 group transition-colors"
        >
          <span className="text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 group-hover:text-blue-200 transition-colors">
            PRIYADARSHANI
          </span>
          <span className="text-[#38BDF8] font-bold">/ PORTFOLIO</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Zone: Theme Toggle + "Let's Talk" */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg border border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#0D1527]/60 dark:bg-[#0D1527]/60 bg-slate-100 text-[#94A3B8] dark:text-[#94A3B8] text-slate-700 hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] hover:border-[#38BDF8]/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all cursor-pointer"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#38BDF8]" /> : <Moon className="w-4 h-4 text-[#2563EB]" />}
          </button>

          {/* "Let's Talk" Royal Electric Blue Button with White Text */}
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs sm:text-sm font-medium tracking-wide text-white bg-[#2563EB] hover:bg-[#3B82F6] rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_28px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 font-display cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg border border-[#1E293B] dark:border-[#1E293B] border-slate-200 text-[#94A3B8] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B14] dark:bg-[#070B14] bg-white border-b border-[#1E293B] dark:border-[#1E293B] border-slate-200 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#94A3B8] dark:text-[#94A3B8] text-slate-800 hover:text-[#38BDF8] dark:hover:text-[#38BDF8] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]/70">Theme</span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-2 text-xs text-[#94A3B8] px-3 py-1.5 rounded border border-[#1E293B]"
              >
                {darkMode ? <Sun className="w-3.5 h-3.5 text-[#38BDF8]" /> : <Moon className="w-3.5 h-3.5 text-[#2563EB]" />}
                <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
