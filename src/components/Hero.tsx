import React from "react";
import { ArrowDown, FileDown } from "lucide-react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onViewWork }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Subtle azure-blue gradient glow behind the Hero section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-br from-[#1D4ED8]/25 via-[#2563EB]/18 to-[#38BDF8]/12 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Status Badge with Electric Cyan-Blue Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#38BDF8]/40 bg-[#2563EB]/15 text-[#BAE6FD] text-xs font-medium tracking-wide mb-8 shadow-[0_0_16px_rgba(56,189,248,0.25)] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0284C7]"></span>
            </span>
            <span className="font-mono uppercase tracking-wider">{profile.statusBadge}</span>
          </motion.div>

          {/* Big Headline with White and Blue Gradient Word */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 mb-6 text-balance"
          >
            {profile.headlinePrefix}{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent font-bold drop-shadow-[0_0_24px_rgba(56,189,248,0.35)]">
              {profile.headlineAccent}
            </span>{" "}
            {profile.headlineSuffix}
          </motion.h1>

          {/* Subtext in Cool Silver-Slate */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 leading-relaxed font-normal mb-10 max-w-2xl"
          >
            {profile.subtext}
          </motion.p>

          {/* CTA Buttons in White & Electric Blue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <button
              onClick={onViewWork}
              className="px-6 py-3 rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] text-white font-display font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_30px_rgba(56,189,248,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-6 py-3 rounded-lg border border-[#1E293B] dark:border-[#1E293B] border-slate-300 bg-[#0D1527] dark:bg-[#0D1527] bg-white hover:bg-[#131E36] dark:hover:bg-[#131E36] hover:border-[#38BDF8]/50 text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 font-display font-medium text-sm sm:text-base tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all flex items-center gap-2 group cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors" />
              <span>Download Resume</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl">
            {profile.heroStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 group p-2 rounded-lg transition-colors hover:bg-[#0D1527]/50"
              >
                <div className="w-1.5 h-8 bg-gradient-to-b from-[#38BDF8] to-[#1D4ED8] rounded-full shrink-0 group-hover:scale-y-110 shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-transform" />
                <div>
                  <div className="font-display font-bold text-xl sm:text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 uppercase tracking-wider font-mono">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
