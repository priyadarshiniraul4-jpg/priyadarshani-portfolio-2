import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Copy, Check, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const { contact } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Please fill out all fields before submitting.");
      return;
    }

    if (!formData.email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setFormError("");
    setIsSubmitting(true);

    // Simulate sending message with realistic delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <footer id="contact" className="py-24 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#070B14] dark:bg-[#070B14] bg-slate-50/50 scroll-mt-20 relative overflow-hidden">
      {/* Subtle blue background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2563EB]/12 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fade-In-Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-[#38BDF8] font-semibold tracking-wider">
            {contact.sectionIndex}
          </span>
          <span className="h-px w-8 bg-[#38BDF8]/50" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#94A3B8] dark:text-[#94A3B8] text-slate-500">
            Get in Touch
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Title, Text, Email, Socials (6 cols) with Fade-In-Up */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 tracking-tight leading-tight mb-4">
                {contact.titlePrefix}{" "}
                <span className="bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent font-bold">
                  {contact.titleAccent}
                </span>
              </h2>
              <p className="text-base text-[#94A3B8] dark:text-[#94A3B8] text-slate-600 leading-relaxed font-normal">
                {contact.text}
              </p>
            </div>

            {/* Direct Contact Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                {/* Email Action Button with Copy Feedback */}
                <div className="inline-flex items-center rounded-xl border border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#0D1527] dark:bg-[#0D1527] bg-white overflow-hidden shadow-[0_0_18px_rgba(37,99,235,0.15)]">
                  <a
                    href={`mailto:${contact.email}?subject=Internship%20Inquiry%20-%20Priyadarshani%20Raul`}
                    className="px-4 py-2.5 text-xs sm:text-sm font-mono text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 hover:text-[#38BDF8] flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#38BDF8]" />
                    <span>{contact.email}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-2.5 border-l border-[#1E293B] dark:border-[#1E293B] border-slate-200 text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all text-xs font-mono flex items-center gap-1 cursor-pointer"
                    title="Copy Email to Clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span className="text-[#38BDF8]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* GitHub & LinkedIn Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#0D1527] dark:bg-[#0D1527] bg-white text-xs sm:text-sm font-mono text-[#94A3B8] dark:text-[#94A3B8] text-slate-700 hover:text-white hover:border-[#38BDF8]/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] flex items-center gap-2 transition-all shadow-sm"
                >
                  <Github className="w-4 h-4 text-[#38BDF8]" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-[#1E293B] dark:border-[#1E293B] border-slate-200 bg-[#0D1527] dark:bg-[#0D1527] bg-white text-xs sm:text-sm font-mono text-[#94A3B8] dark:text-[#94A3B8] text-slate-700 hover:text-white hover:border-[#38BDF8]/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] flex items-center gap-2 transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-[#38BDF8]" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Location Pill */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#94A3B8] dark:text-[#94A3B8] text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Angul, Odisha, India · Available for Remote & On-Site Roles</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (6 cols) with Fade-In-Up */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1527] dark:bg-[#0D1527] bg-white border border-[#1E293B] dark:border-[#1E293B] border-slate-200 shadow-[0_0_35px_rgba(7,11,20,0.8)]">
              <h3 className="font-display font-semibold text-lg text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#94A3B8] dark:text-[#94A3B8] text-slate-500 mb-6 font-normal">
                Leave a note and I will get back to your email within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#2563EB]/20 border border-[#38BDF8]/40 text-center space-y-3 animate-in fade-in shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/30 text-[#38BDF8] mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-semibold text-base text-white dark:text-white text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#94A3B8]">
                    Thank you for reaching out. Priyadarshani Raul will respond promptly to your email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#38BDF8] hover:underline pt-2 block mx-auto cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-300 font-mono">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#070B14] dark:bg-[#070B14] bg-slate-50 border border-[#1E293B] dark:border-[#1E293B] border-slate-200 text-sm text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#2563EB] focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#070B14] dark:bg-[#070B14] bg-slate-50 border border-[#1E293B] dark:border-[#1E293B] border-slate-200 text-sm text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#2563EB] focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Priyadarshani, I loved your SMARTCARE project and would like to discuss an internship opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#070B14] dark:bg-[#070B14] bg-slate-50 border border-[#1E293B] dark:border-[#1E293B] border-slate-200 text-sm text-[#FFFFFF] dark:text-[#FFFFFF] text-slate-900 placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#2563EB] focus:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] disabled:opacity-50 text-white font-display font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_30px_rgba(56,189,248,0.65)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer Row with Fade-In-Up */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-[#1E293B] dark:border-[#1E293B] border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]/80 dark:text-[#94A3B8]/80 text-slate-500"
        >
          <div>{contact.footerText}</div>
          <div className="flex items-center gap-4">
            <span>Built with HTML, CSS & React</span>
            <span>·</span>
            <span className="text-[#38BDF8]">Modern White & Electric Blue Theme</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
