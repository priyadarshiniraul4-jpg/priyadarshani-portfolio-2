import React from "react";
import { GraduationCap, Terminal, CheckCircle2, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 scroll-mt-20 relative overflow-hidden">
      {/* Subtle Blue Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2563EB]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fade-In-Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#38BDF8] font-semibold tracking-wider">
              {about.sectionIndex}
            </span>
            <span className="h-px w-8 bg-[#38BDF8]/50" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#94A3B8] text-slate-500">
              Background & Academics
            </span>
          </div>

          {/* Heading with Cyan-Blue Gradient Accent Word */}
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 tracking-tight mb-8">
            {about.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent font-bold">
              {about.titleAccent}
            </span>
          </h2>
        </motion.div>

        {/* 2-Column Layout with Scroll Fade-In-Up */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Bio & Education List (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-800 leading-relaxed font-normal">
                {about.bio}
              </p>
              <p className="text-sm sm:text-base text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 leading-relaxed font-normal">
                {about.secondaryBio}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 pt-2">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Based in Angul, Odisha, India</span>
              </div>
            </div>

            {/* Education List */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
                <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900">
                  Education & Qualifications
                </h3>
              </div>

              <div className="space-y-3">
                {about.education.map((item, i) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="p-4 rounded-xl bg-[#0D1527] dark:bg-[#0D1527] bg-white border border-[#1E293B] dark:border-[#1E293B] border-slate-200 hover:border-[#38BDF8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all group"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <div className="font-display font-semibold text-base text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 group-hover:text-[#38BDF8] transition-colors">
                        {item.degree}
                      </div>
                      <div className="font-mono text-xs text-[#38BDF8] font-semibold">
                        {item.score}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#94A3B8] dark:text-[#94A3B8] text-slate-500 font-mono">
                      <span>{item.institution}</span>
                      <span>{item.timeline}</span>
                    </div>
                    {item.details && (
                      <p className="text-xs text-[#94A3B8]/80 dark:text-[#94A3B8]/80 text-slate-600 mt-2 font-normal">
                        {item.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Currently Learning Box (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0D1527] dark:bg-[#0D1527] bg-white border border-[#1E293B] dark:border-[#1E293B] border-slate-200 shadow-[0_0_30px_rgba(7,11,20,0.8)] relative overflow-hidden group hover:border-[#38BDF8]/60 transition-all">
              {/* Subtle top-right corner glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#2563EB]/15 blur-2xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-[#38BDF8]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-semibold">
                  Growth Roadmap
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 mb-3 leading-snug">
                {about.currentlyLearning.headline}
              </h3>

              <p className="text-xs text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 mb-6 leading-relaxed">
                {about.currentlyLearning.focusQuote}
              </p>

              {/* Learning Track Cards */}
              <div className="space-y-4">
                {about.currentlyLearning.topics.map((topic, idx) => (
                  <motion.div
                    key={topic.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.25 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-800">
                        {topic.name}
                      </span>
                      <span className="font-mono text-[#38BDF8] text-[11px]">
                        {topic.progress}%
                      </span>
                    </div>
                    {/* Progress Bar in Electric Cyan-Blue */}
                    <div className="h-1.5 w-full bg-[#070B14] dark:bg-[#070B14] bg-slate-100 rounded-full overflow-hidden border border-[#1E293B]/60">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${topic.progress}%` }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#38BDF8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                      />
                    </div>
                    <p className="text-[11px] text-[#94A3B8]/80 dark:text-[#94A3B8]/80 text-slate-500 leading-normal">
                      {topic.detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 flex items-center gap-2 text-xs text-[#94A3B8]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <span>Daily problem solving & code review practice</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
