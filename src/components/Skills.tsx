import React, { useState } from "react";
import { Code2, Cpu, Wrench, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<string>("All");

  const icons: Record<string, React.ReactNode> = {
    Languages: <Code2 className="w-4 h-4 text-[#38BDF8]" />,
    Core: <Cpu className="w-4 h-4 text-[#38BDF8]" />,
    Tools: <Wrench className="w-4 h-4 text-[#38BDF8]" />,
  };

  const categoriesToShow =
    activeTab === "All"
      ? skills.categories
      : skills.categories.filter((cat) => cat.title === activeTab);

  return (
    <section id="skills" className="py-24 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 scroll-mt-20 relative overflow-hidden">
      {/* Subtle blue background ambient glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#2563EB]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fade-In-Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#38BDF8] font-semibold tracking-wider">
                {skills.sectionIndex}
              </span>
              <span className="h-px w-8 bg-[#38BDF8]/50" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#94A3B8] text-slate-500">
                Technical Competencies
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 tracking-tight">
              {skills.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent font-bold">
                {skills.titleAccent}
              </span>
            </h2>
            <p className="text-sm text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 mt-2">
              Technologies and theoretical foundations I apply to build software.
            </p>
          </div>

          {/* Interactive Filter Tabs in Blue & White Style */}
          <div className="flex items-center gap-1 p-1 bg-[#0D1527] dark:bg-[#0D1527] bg-slate-100 rounded-lg border border-[#1E293B] dark:border-[#1E293B] border-slate-200 self-start sm:self-auto shadow-inner">
            {["All", "Languages", "Core", "Tools"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#2563EB] text-white font-semibold shadow-[0_0_15px_rgba(56,189,248,0.45)]"
                    : "text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 hover:text-white dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3 Categories Grid with Staggered Fade-In-Up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {categoriesToShow.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="p-6 rounded-2xl bg-[#0D1527] dark:bg-[#0D1527] bg-white border border-[#1E293B] dark:border-[#1E293B] border-slate-200 hover:border-[#38BDF8]/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {icons[category.title] || <Layers className="w-4 h-4 text-[#38BDF8]" />}
                      <h3 className="font-display font-semibold text-lg text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#94A3B8]/70 uppercase tracking-wider">
                      {category.skills.length} Skills
                    </span>
                  </div>

                  <p className="text-xs text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Cards / Pills */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#070B14] dark:bg-[#070B14] bg-slate-50 border border-[#1E293B] dark:border-[#1E293B] border-slate-200 group-hover:border-[#1E293B] hover:!border-[#38BDF8]/60 hover:!shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display font-medium text-sm text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900">
                            {skill.name}
                          </span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#2563EB]/20 dark:bg-[#2563EB]/20 bg-blue-100 text-[#38BDF8] border border-[#38BDF8]/30">
                            {skill.badge || skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-[#94A3B8]/80 dark:text-[#94A3B8]/80 text-slate-500 font-normal">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Subtle Pill Chips */}
                <div className="mt-6 pt-4 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name + "-chip"}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-[#131E36] dark:bg-[#131E36] bg-slate-100 text-[#BAE6FD] border border-[#1E293B]"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
