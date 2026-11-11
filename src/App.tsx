import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { SelectedWork } from "./components/SelectedWork";
import { Contact } from "./components/Contact";
import { ResumeModal } from "./components/ResumeModal";
import { SmartCareSimulatorModal } from "./components/SmartCareSimulatorModal";
import { ProjectDetailModal } from "./components/ProjectDetailModal";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Project } from "./data/portfolioData";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [simulatorOpen, setSimulatorOpen] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Sync dark class with html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle escape key to close any active modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setResumeOpen(false);
        setSimulatorOpen(false);
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleScrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollViewWork = () => {
    const projectsElem = document.getElementById("projects");
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 selection:bg-[#2563EB]/40 selection:text-[#FFFFFF] ${
        darkMode ? "bg-[#070B14] text-[#FFFFFF]" : "bg-[#F8FAFC] text-slate-900"
      }`}
    >
      {/* Scroll Progress Bar at very top of viewport */}
      <ScrollProgressBar />

      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        onOpenContact={handleScrollToContact}
      />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onViewWork={handleScrollViewWork}
        />

        {/* 2. About Me (01 / 04) */}
        <About />

        {/* 3. Skills (02 / 04) */}
        <Skills />

        {/* 4. Selected Work (03 / 04) featuring SMARTCARE */}
        <SelectedWork
          onOpenProjectDetail={(proj) => setActiveProject(proj)}
          onOpenSimulator={() => setSimulatorOpen(true)}
        />
      </main>

      {/* 5. Contact (04 / 04) & Footer */}
      <Contact />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <SmartCareSimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
