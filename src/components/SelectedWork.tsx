import React from "react";
import {
  ExternalLink,
  Github,
  Users,
  Clock,
  Activity,
  Stethoscope,
  Code2,
  PlayCircle,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";
import smartcareBlueImg from "../assets/images/smartcare_blue_mockup_1794422428757.jpg";

interface SelectedWorkProps {
  onOpenProjectDetail: (project: Project) => void;
  onOpenSimulator: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onOpenProjectDetail,
  onOpenSimulator,
}) => {
  const { projects } = PORTFOLIO_DATA;
  const featured = projects.featuredProject;

  const statIcons: Record<string, React.ReactNode> = {
    Users: <Users className="w-3.5 h-3.5 text-[#38BDF8]" />,
    Clock: <Clock className="w-3.5 h-3.5 text-[#60A5FA]" />,
    Activity: <Activity className="w-3.5 h-3.5 text-[#2563EB]" />,
    Stethoscope: <Stethoscope className="w-3.5 h-3.5 text-[#93C5FD]" />,
  };

  return (
    <section id="projects" className="py-24 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 scroll-mt-20 relative overflow-hidden">
      {/* Subtle blue gradient glow behind project cards */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#1D4ED8]/15 via-[#2563EB]/12 to-[#38BDF8]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fade-In-Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#38BDF8] font-semibold tracking-wider">
                {projects.sectionIndex}
              </span>
              <span className="h-px w-8 bg-[#38BDF8]/50" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#94A3B8] text-slate-500">
                Portfolio & Engineering
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 tracking-tight">
              {projects.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent font-bold">
                {projects.titleAccent}
              </span>
            </h2>
            <p className="text-sm text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 mt-2">
              Featured software applications, algorithms, and practical projects.
            </p>
          </div>
        </motion.div>

        {/* ---------------------------------------------------- */}
        {/* NO. 1 FEATURED PROJECT: SMARTCARE (Large Showcase Card with Fade-In-Up) */}
        {/* ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 rounded-2xl bg-[#0D1527] dark:bg-[#0D1527] bg-white border border-[#1E293B] dark:border-[#1E293B] border-slate-200 hover:border-[#38BDF8]/60 transition-all p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(37,99,235,0.2)] hover:shadow-[0_0_70px_rgba(56,189,248,0.3)] relative overflow-hidden group"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563EB]/15 blur-[120px] rounded-full pointer-events-none" />

          {/* Electric Blue Featured Project Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2563EB]/25 border border-[#38BDF8]/50 text-[#BAE6FD] text-xs font-mono font-semibold uppercase tracking-wider shadow-[0_0_12px_rgba(56,189,248,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              <span>{featured.featuredBadge}</span>
            </div>

            <span className="text-xs font-mono text-[#94A3B8] dark:text-[#94A3B8] text-slate-600">
              Role: <strong className="text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900">{featured.role}</strong>
            </span>
          </div>

          {/* 2-Column Showcase: Left Image Mockup, Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Phone / App Preview Mockup (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="w-full relative rounded-[20px] overflow-hidden border border-[#1E293B] dark:border-[#1E293B] border-slate-300 shadow-[0_12px_45px_rgba(7,11,20,0.9)] bg-[#070B14] p-2.5 group-hover:border-[#38BDF8]/60 group-hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] transition-all">
                {/* LIVE DEMO Floating Badge in Royal Electric Blue */}
                <div className="absolute top-5 right-5 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-[0_0_16px_rgba(56,189,248,0.6)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  <span>LIVE DEMO</span>
                </div>

                {/* Cover Image in Blue & White Aesthetic */}
                <div className="rounded-[16px] overflow-hidden bg-[#070B14] flex items-center justify-center">
                  <img
                    src={smartcareBlueImg}
                    alt="SMARTCARE Hospital Crowd & OPD Management App Preview"
                    className="w-full h-auto object-contain max-h-[380px] rounded-[16px] transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Subtitle Bar below screenshot */}
                <div className="mt-2.5 px-3 py-2 rounded-lg bg-[#0D1527] border border-[#1E293B] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span>OPD & Patient Management</span>
                  <span className="text-[#38BDF8] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]" />
                    Online & Active
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Title, Description, 4 Live Stats, Features, Buttons (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 tracking-tight mb-3">
                  {featured.title}
                </h3>
                <p className="text-sm sm:text-base text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 leading-relaxed font-normal">
                  {featured.description}
                </p>
              </div>

              {/* 4 Live Stats Cards */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]/70 mb-2.5">
                  Live System Telemetry
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {featured.stats?.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-xl bg-[#070B14] dark:bg-[#070B14] bg-slate-50 border border-[#1E293B] dark:border-[#1E293B] border-slate-200"
                    >
                      <div className="flex items-center gap-1 text-[11px] text-[#94A3B8] dark:text-[#94A3B8] text-slate-500 mb-1">
                        {statIcons[stat.icon || ""] || <Activity className="w-3 h-3 text-[#38BDF8]" />}
                        <span className="truncate">{stat.label}</span>
                      </div>
                      <div className="font-display font-bold text-sm sm:text-base text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 tracking-tight">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Pills */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]/70 mb-2">
                  Key Modules & Features
                </div>
                <div className="flex flex-wrap gap-2">
                  {featured.features?.map((feat) => (
                    <span
                      key={feat}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-[#131E36] dark:bg-[#131E36] bg-slate-100 text-[#BAE6FD] dark:text-[#BAE6FD] text-blue-900 border border-[#1E293B] dark:border-[#1E293B] border-slate-200 hover:border-[#38BDF8]/60 transition-colors"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#94A3B8] pt-1">
                <span className="text-[#38BDF8] font-semibold">Tech:</span>
                {featured.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-[#070B14] dark:bg-[#070B14] bg-slate-100 text-[#94A3B8] border border-[#1E293B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons in Electric Royal Blue */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] text-white font-display font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_30px_rgba(56,189,248,0.65)] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onOpenProjectDetail(featured)}
                  className="px-4 py-2.5 rounded-lg border border-[#1E293B] dark:border-[#1E293B] border-slate-300 bg-[#0D1527] dark:bg-[#0D1527] bg-white hover:bg-[#131E36] text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 font-display font-medium text-xs sm:text-sm tracking-wide shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:border-[#38BDF8]/50 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>View Code</span>
                </button>

                <button
                  onClick={onOpenSimulator}
                  className="px-4 py-2.5 rounded-lg border border-[#38BDF8]/40 bg-[#2563EB]/20 hover:bg-[#2563EB]/30 text-[#BAE6FD] font-display font-medium text-xs sm:text-sm tracking-wide shadow-[0_0_16px_rgba(56,189,248,0.25)] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <PlayCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Test Crowd Simulator</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ---------------------------------------------------- */}
        {/* 3 OTHER PROJECTS GRID with Staggered Fade-In-Up */}
        {/* ---------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-[#0D1527] dark:bg-[#0D1527] bg-white border border-[#1E293B] dark:border-[#1E293B] border-slate-200 hover:border-[#38BDF8]/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Project Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 group-hover:text-[#38BDF8] transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-[#94A3B8]/80 mt-0.5">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8]/60 shrink-0">
                    {project.role}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 mb-6 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#070B14] dark:bg-[#070B14] bg-slate-100 text-[#94A3B8] border border-[#1E293B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: GitHub Link & View Details */}
              <div className="pt-4 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 flex items-center justify-between">
                <a
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#94A3B8] dark:text-[#94A3B8] text-slate-500 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>GitHub Repository</span>
                </a>

                <button
                  onClick={() => onOpenProjectDetail(project)}
                  className="text-xs font-medium text-[#38BDF8] hover:text-white hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
