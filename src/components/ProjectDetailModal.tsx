import React, { useState } from "react";
import { X, ExternalLink, Github, Copy, Check, FileCode } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0D1527] dark:bg-[#0D1527] bg-white border border-[#1E293B] dark:border-[#1E293B] border-slate-200 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(37,99,235,0.3)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#070B14]">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-base text-white dark:text-white text-slate-900">
              {project.title}
            </span>
            {project.role && (
              <span className="text-[11px] font-mono text-[#38BDF8] px-2 py-0.5 rounded bg-[#2563EB]/20 border border-[#38BDF8]/30 hidden sm:inline-block">
                {project.role}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs rounded-lg bg-[#2563EB] text-white font-semibold flex items-center gap-1.5 hover:bg-[#3B82F6] shadow-[0_0_12px_rgba(56,189,248,0.4)] transition-all cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs rounded-lg border border-[#1E293B] text-[#94A3B8] hover:text-white flex items-center gap-1.5 hover:border-[#38BDF8]/50 transition-colors cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 text-sm">
          {/* Description */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold mb-2">
              Overview & Architecture
            </h3>
            <p className="text-sm text-[#94A3B8] dark:text-[#94A3B8] text-slate-700 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold mb-2">
                Key Engineering Highlights
              </h3>
              <ul className="space-y-1.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-[#94A3B8] flex items-start gap-2">
                    <span className="text-[#38BDF8] mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold mb-2">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-[#070B14] border border-[#1E293B] text-xs font-mono text-[#94A3B8]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code Snippet */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                  <FileCode className="w-4 h-4 text-[#38BDF8]" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="text-xs font-mono text-[#94A3B8] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#38BDF8]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E293B] overflow-x-auto text-xs font-mono text-[#94A3B8] leading-relaxed">
                <pre>{project.codeSnippet.code}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#070B14] flex items-center justify-between text-xs text-[#94A3B8]">
          <span>Priyadarshani Raul · Student Software Project</span>
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
