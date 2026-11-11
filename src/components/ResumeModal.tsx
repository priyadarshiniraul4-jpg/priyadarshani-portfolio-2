import React, { useState } from "react";
import { X, Printer, Copy, Check, Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile, about, skills, projects } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resumePlainText = `
PRIYADARSHANI RAUL
Location: Angul, Odisha, India | Email: ${profile.email}
GitHub: ${profile.github} | LinkedIn: ${profile.linkedin}

PROFILE SUMMARY
${profile.subtext}

EDUCATION
• B.Tech, Computer Science - Pursuing | Angul, Odisha
• Class 12, CHSE (Science) - 2023-25 | 73%
• Class 10, HSE - 2022-23 | 70%

TECHNICAL SKILLS
• Programming Languages: Python, C, HTML, CSS
• Core Fundamentals: Data Structures & Algorithms, Object-Oriented Programming (OOP), Problem Solving
• Development Tools: VS Code, Git, GitHub, Canva

FEATURED PROJECTS
1. SMARTCARE — Predictive Hospital Crowd & OPD Management System
   Role: Creator / Frontend Developer
   Live Demo: https://radiant-zuccutto-b94214.netlify.app
   Tech Stack: HTML, CSS, JavaScript, AI Prediction UI, Netlify
   Description: Smart hospital web application predicting OPD and Emergency crowd in real-time. Reduced patient wait times with virtual queues and QR token check-in.

2. Python Internship Project
   Role: Python Developer Intern
   Tech: Python, File Handling, CSV/JSON Processing
   Description: Engineered automated batch file parsing, validation, and structured data extraction system with error-handling routines.

3. Personal Portfolio Website
   Tech: HTML, CSS, JavaScript, Responsive UI
   Description: Modern white and blue themed personal portfolio showcasing technical competencies and projects.

4. DSA Mini Project in C
   Tech: C, Data Structures, Linked Lists, Merge Sort
   Description: Student Record Management System with dynamic memory allocation, binary search, and sorting.
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0D1527] dark:bg-[#0D1527] bg-white border border-[#1E293B] dark:border-[#1E293B] border-slate-200 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(37,99,235,0.3)] overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#070B14]">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-sm sm:text-base text-white dark:text-white text-slate-900">
              Priyadarshani Raul — Curriculum Vitae
            </span>
            <span className="text-xs font-mono text-[#38BDF8] px-2 py-0.5 rounded bg-[#2563EB]/20 border border-[#38BDF8]/30">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs rounded-lg border border-[#1E293B] dark:border-[#1E293B] border-slate-200 text-[#94A3B8] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#38BDF8]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] text-white font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 print:text-black print:bg-white font-sans text-sm">
          {/* Header */}
          <div className="border-b border-[#1E293B] dark:border-[#1E293B] border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-white dark:text-white text-slate-950 tracking-tight">
              Priyadarshani Raul
            </h1>
            <p className="text-sm text-[#38BDF8] font-medium mt-1">
              B.Tech Computer Science Student · Aspiring Software Engineer
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#38BDF8]" />
                Angul, Odisha, India
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#38BDF8]" />
                {profile.email}
              </span>
              <span>GitHub: priyadarshiniraul</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {about.education.map((edu) => (
                <div key={edu.degree} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <div className="font-semibold text-white dark:text-white text-slate-900">{edu.degree}</div>
                    <div className="text-[#94A3B8] dark:text-[#94A3B8] text-slate-500 text-xs">{edu.institution}</div>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <div className="text-[#38BDF8]">{edu.score}</div>
                    <div className="text-[#94A3B8]/70">{edu.timeline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#070B14] dark:bg-[#070B14] bg-slate-50 border border-[#1E293B]">
                <div className="font-semibold text-white dark:text-white text-slate-900 mb-1">Languages</div>
                <div className="text-[#94A3B8] dark:text-[#94A3B8] text-slate-700">Python, C, HTML, CSS</div>
              </div>
              <div className="p-3 rounded-xl bg-[#070B14] dark:bg-[#070B14] bg-slate-50 border border-[#1E293B]">
                <div className="font-semibold text-white dark:text-white text-slate-900 mb-1">Core Concepts</div>
                <div className="text-[#94A3B8] dark:text-[#94A3B8] text-slate-700">Data Structures, Algorithms, OOP, Problem Solving</div>
              </div>
              <div className="p-3 rounded-xl bg-[#070B14] dark:bg-[#070B14] bg-slate-50 border border-[#1E293B]">
                <div className="font-semibold text-white dark:text-white text-slate-900 mb-1">Tools & Platforms</div>
                <div className="text-[#94A3B8] dark:text-[#94A3B8] text-slate-700">VS Code, Git, GitHub, Netlify, Canva</div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold mb-3">
              Projects & Experience
            </h2>
            <div className="space-y-4">
              {/* SMARTCARE */}
              <div className="border border-[#38BDF8]/40 p-3.5 rounded-xl bg-[#2563EB]/10 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                <div className="flex justify-between items-baseline mb-1">
                  <div className="font-semibold text-white dark:text-white text-slate-900 text-sm">
                    SMARTCARE — Predictive Hospital Crowd & OPD Management System
                  </div>
                  <span className="text-[11px] font-mono text-[#38BDF8]">Creator / Frontend Developer</span>
                </div>
                <p className="text-xs text-[#94A3B8] dark:text-[#94A3B8] text-slate-700 mb-2">
                  {projects.featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-1 text-[11px] font-mono text-[#94A3B8]/80">
                  <span>Tech: HTML, CSS, JavaScript, Netlify</span>
                  <span>·</span>
                  <a href={projects.featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#38BDF8] underline">
                    Live Demo Link
                  </a>
                </div>
              </div>

              {/* Other projects */}
              {projects.otherProjects.map((p) => (
                <div key={p.id} className="p-3 rounded-xl border border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#070B14]/50">
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="font-semibold text-white dark:text-white text-slate-900 text-sm">{p.title}</div>
                    <span className="text-[11px] font-mono text-[#94A3B8]/70">{p.role}</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] dark:text-[#94A3B8] text-slate-700 mb-1.5">
                    {p.description}
                  </p>
                  <div className="text-[11px] font-mono text-[#94A3B8]/60">
                    Tech: {p.techTags.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#070B14] flex items-center justify-between text-xs text-[#94A3B8]">
          <span>Angul, Odisha · Ready for Internship Opportunities</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-white bg-[#2563EB]/30 hover:bg-[#2563EB]/50 border border-[#38BDF8]/30 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
