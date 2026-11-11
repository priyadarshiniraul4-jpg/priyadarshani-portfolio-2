export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  role?: string;
  description: string;
  longDescription?: string;
  techTags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  featuredBadge?: string;
  stats?: { label: string; value: string; icon?: string; color?: string }[];
  features?: string[];
  image?: string;
  codeSnippet?: { language: string; filename: string; code: string };
  highlights?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  timeline: string;
  score: string;
  status: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    badge?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Priyadarshani Raul",
    headline: "I turn ideas into simple, useful products.",
    headlinePrefix: "I turn ideas into simple,",
    headlineAccent: "useful",
    headlineSuffix: "products.",
    subtext:
      "I'm Priyadarshani Raul, a B.Tech Computer Science student who builds clean websites and Python projects. Focused on Data Structures, Python, and Frontend Development.",
    location: "Angul, Odisha, India",
    email: "priyadarshiniraul4@gmail.com",
    github: "https://github.com/priyadarshiniraul",
    linkedin: "https://linkedin.com/in/priyadarshani-raul",
    statusBadge: "AVAILABLE FOR INTERNSHIPS",
    heroStats: [
      { label: "Projects Built", value: "4+" },
      { label: "Major Project", value: "SMARTCARE" },
      { label: "Internship", value: "1 Python" },
    ],
  },

  about: {
    title: "About Me",
    titlePrefix: "About",
    titleAccent: "Me",
    sectionIndex: "01 / 04",
    bio: "I am a B.Tech Computer Science student from Angul, Odisha. I love solving problems with Python and building clean user interfaces with HTML and CSS.",
    secondaryBio:
      "I focus on writing clean, readable code and understanding core computer science fundamentals. Whether structuring algorithms in C and Python or crafting responsive web experiences, I strive to build practical tools that solve real human challenges.",
    education: [
      {
        degree: "B.Tech, Computer Science",
        institution: "Engineering College · Angul, Odisha",
        timeline: "Pursuing",
        score: "In Progress",
        status: "Pursuing",
        details: "Focusing on Data Structures & Algorithms, Object-Oriented Programming, and Software Engineering principles.",
      },
      {
        degree: "Class 12, CHSE",
        institution: "Higher Secondary Education (Science)",
        timeline: "2023 - 25",
        score: "73%",
        status: "Completed",
        details: "Core subjects: Mathematics, Physics, Chemistry, and Information Technology.",
      },
      {
        degree: "Class 10, HSE",
        institution: "High School Board Examination",
        timeline: "2022 - 23",
        score: "70%",
        status: "Completed",
        details: "Graduated with distinction in Science and Mathematics.",
      },
    ] as Education[],
    currentlyLearning: {
      headline: "Currently Learning: Data Structures, Python Projects",
      topics: [
        {
          name: "Data Structures & Algorithms",
          detail: "Linked lists, binary search trees, stacks, queues, recursion, and Big-O efficiency.",
          progress: 80,
        },
        {
          name: "Python Applications & Scripting",
          detail: "Building automated data processing, file handling workflows, and REST API integrations.",
          progress: 85,
        },
        {
          name: "Modern Frontend UI Engineering",
          detail: "Semantic HTML5, CSS Grid/Flexbox, Tailwind CSS, component state, and responsive layouts.",
          progress: 90,
        },
      ],
      focusQuote: "Building a solid foundation in computer science through hands-on practice, code challenges, and real-world projects.",
    },
  },

  skills: {
    title: "Technical Skills",
    titlePrefix: "Technical",
    titleAccent: "Skills",
    sectionIndex: "02 / 04",
    categories: [
      {
        title: "Languages",
        description: "Core programming and markup languages I use to construct applications.",
        skills: [
          { name: "Python", level: "Proficient", description: "Scripting, file operations, logic, data processing", badge: "Primary" },
          { name: "C", level: "Intermediate", description: "Pointers, memory layout, custom data structures", badge: "Core" },
          { name: "HTML", level: "Advanced", description: "Semantic markup, accessibility, modern standards", badge: "Frontend" },
          { name: "CSS", level: "Advanced", description: "Flexbox, Grid, custom styling, responsive layouts", badge: "Frontend" },
        ],
      },
      {
        title: "Core",
        description: "Foundational computer science principles applied to write efficient software.",
        skills: [
          { name: "Data Structures & Algorithms", level: "Active Focus", description: "Arrays, lists, trees, searching & sorting algorithms", badge: "Foundational" },
          { name: "OOP (Object-Oriented Programming)", level: "Working Knowledge", description: "Classes, inheritance, encapsulation, modularity", badge: "Design" },
          { name: "Problem Solving", level: "Continuous Practice", description: "Decomposing complex problems into step-by-step algorithms", badge: "Logic" },
        ],
      },
      {
        title: "Tools",
        description: "Development tools, platforms, and utilities in my day-to-day workflow.",
        skills: [
          { name: "VS Code", level: "Daily Driver", description: "Extensions, debugging, terminal integration", badge: "Editor" },
          { name: "Git", level: "Proficient", description: "Version control, branching, committing, git workflow", badge: "VCS" },
          { name: "GitHub", level: "Proficient", description: "Repository management, open source collaboration, pages", badge: "Platform" },
          { name: "Canva", level: "Proficient", description: "UI wireframing, presentation decks, diagram design", badge: "Design" },
        ],
      },
    ] as SkillCategory[],
  },

  projects: {
    title: "Selected Work",
    titlePrefix: "Selected",
    titleAccent: "Work",
    sectionIndex: "03 / 04",
    featuredProject: {
      id: "smartcare",
      title: "SMARTCARE — Predictive Hospital Crowd & OPD Management System",
      role: "Creator / Frontend Developer",
      featuredBadge: "FEATURED PROJECT",
      liveUrl: "https://radiant-zuccutto-b94214.netlify.app",
      githubUrl: "https://github.com/priyadarshiniraul/smartcare-opd-crowd-system",
      description:
        "SMARTCARE is a smart hospital management web app that predicts OPD and Emergency crowd in real-time. It helps patients check live hospital status, book appointments, and join a virtual queue to reduce waiting time.",
      longDescription:
        "Conceived and developed as an intelligent healthcare management portal. SMARTCARE addresses severe hospital overcrowding and unpredictable OPD delays by providing transparent, real-time wait estimation and digital queue virtualization. Patients can book instant consultations, generate QR tokens, and inspect doctor availability before traveling.",
      techTags: ["HTML", "CSS", "JavaScript", "AI Prediction UI", "Netlify"],
      image: "/smartcare_blue_preview.jpg",
      stats: [
        { label: "Patients Waiting", value: "167", icon: "Users", color: "#38BDF8" },
        { label: "Average Wait Time", value: "24 min", icon: "Clock", color: "#60A5FA" },
        { label: "Hospital Crowd", value: "Moderate - 68% cap", icon: "Activity", color: "#2563EB" },
        { label: "Doctors", value: "3 Ready | 2 Busy", icon: "Stethoscope", color: "#93C5FD" },
      ],
      features: [
        "Live Hub",
        "What-If Simulator",
        "AI Voice Triage",
        "Book Appointment - Instant OPD",
        "Join Virtual Queue - QR Token",
        "Live Wait & Velocity",
      ],
      highlights: [
        "Live OPD wait calculation based on doctor queue clearance velocity",
        "Interactive What-If Crowd Simulator demonstrating load balancing",
        "QR Token generation for seamless contactless hospital check-in",
        "Fully deployed and accessible on Netlify with zero-lag interface",
      ],
      codeSnippet: {
        language: "javascript",
        filename: "crowdPredictor.js",
        code: `// SMARTCARE Real-Time OPD Queue & Wait Time Estimator
function calculateOpdWaitEstimate(activePatients, doctorsOnDuty, clearanceRatePerDoc) {
  const effectiveDoctors = Math.max(1, doctorsOnDuty.filter(d => d.status === 'Ready').length);
  const throughputPerHour = effectiveDoctors * clearanceRatePerDoc; // e.g. 12 patients/hr
  const estimatedHours = activePatients / throughputPerHour;
  const waitMinutes = Math.round(estimatedHours * 60);
  
  let crowdLevel = 'Low';
  if (activePatients > 150) crowdLevel = 'High';
  else if (activePatients > 80) crowdLevel = 'Moderate';
  
  return {
    waitMinutes,
    crowdLevel,
    capacityPercentage: Math.min(100, Math.round((activePatients / 250) * 100))
  };
}`,
      },
    } as Project,

    otherProjects: [
      {
        id: "python-internship",
        title: "Python Internship Project",
        subtitle: "Enterprise Data & File Management Engine",
        role: "Python Developer Intern",
        description:
          "A Python project built during my internship focused on robust file handling, structured data parsing, and automated record organization.",
        longDescription:
          "Engineered during my Python internship to replace manual file tracking with an automated Python pipeline. Utilizes Python's core file I/O operations, context managers, and exception handling to read, validate, filter, and export complex departmental records.",
        techTags: ["Python", "File Handling", "Data Parsing", "Automation"],
        githubUrl: "https://github.com/priyadarshiniraul/python-internship-project",
        highlights: [
          "Automated batch parsing of multi-format CSV and raw text records",
          "Implemented custom error logging and atomic safe write operations",
          "Constructed interactive CLI menu for querying and filtering records",
        ],
        codeSnippet: {
          language: "python",
          filename: "file_processor.py",
          code: `# Automated Record Parser & Validator
import csv
from pathlib import Path

def process_internship_records(input_path: str, output_path: str) -> dict:
    processed, errors = 0, 0
    with open(input_path, mode='r', encoding='utf-8') as src_file:
        reader = csv.DictReader(src_file)
        valid_rows = []
        for row in reader:
            try:
                # Validate schema and clean numeric entries
                score = float(row.get('score', 0))
                if score >= 0:
                    valid_rows.append(row)
                    processed += 1
            except ValueError:
                errors += 1
                
    return {"total_processed": processed, "rejected_records": errors}`,
        },
      },
      {
        id: "personal-portfolio",
        title: "Personal Portfolio Website",
        subtitle: "Minimalist High-Fidelity White & Blue Developer Portfolio",
        role: "Frontend Developer",
        description:
          "This responsive portfolio website engineered with clean semantic structure, deep midnight blue aesthetics, electric azure accents, and fast interactions.",
        longDescription:
          "Designed from the ground up to showcase technical competencies, academic milestones, and engineering projects. Features white and blue aesthetics, responsive layout grids, and interactive inspection modals without relying on external bloatware.",
        techTags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
        liveUrl: "#",
        githubUrl: "https://github.com/priyadarshiniraul/personal-portfolio",
        highlights: [
          "White & Electric Blue theme with azure (#2563EB) and cyan (#38BDF8) cues",
          "Fully responsive 12-column mobile and desktop fluid layout",
          "Interactive live project inspector, resume previewer, and contact engine",
        ],
        codeSnippet: {
          language: "html",
          filename: "index.html",
          code: `<!-- Semantic Portfolio Architecture -->
<header class="fixed top-0 w-full backdrop-blur-md bg-[#070B14]/90 z-50">
  <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    <a href="#" class="font-display font-bold text-white tracking-wider">
      PRIYADARSHANI <span class="text-[#38BDF8]">/ PORTFOLIO</span>
    </a>
    <nav class="hidden md:flex items-center gap-8 text-sm text-[#94A3B8]">
      <a href="#about" class="hover:text-white transition-colors">About</a>
      <a href="#skills" class="hover:text-white transition-colors">Skills</a>
      <a href="#projects" class="hover:text-white transition-colors">Projects</a>
      <a href="#contact" class="hover:text-white transition-colors">Contact</a>
    </nav>
  </div>
</header>`,
        },
      },
      {
        id: "dsa-mini-project",
        title: "DSA Mini Project in C",
        subtitle: "Student Record Management System",
        role: "Systems Programmer",
        description:
          "Student Record System built from scratch in C implementing fundamental data structures, memory allocation, and algorithmic sorting.",
        longDescription:
          "Developed to master fundamental Data Structures and pointer manipulation in C. Implements a dynamic Singly Linked List for runtime student record insertion and deletion, alongside Merge Sort for ordering students by GPA and Binary Search for instantaneous student ID lookup.",
        techTags: ["C", "Data Structures", "Linked Lists", "Sorting Algorithms"],
        githubUrl: "https://github.com/priyadarshiniraul/dsa-student-record-system-c",
        highlights: [
          "Dynamic memory management utilizing malloc, free, and pointer validation",
          "O(n log n) Merge Sort implementation on singly linked nodes",
          "Binary file persistence to save and load student data between sessions",
        ],
        codeSnippet: {
          language: "c",
          filename: "student_records.c",
          code: `// Singly Linked List Node for Student Records
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct StudentNode {
    int rollNumber;
    char name[50];
    float marks;
    struct StudentNode* next;
} StudentNode;

// Insert new student at head of record list
StudentNode* insertStudent(StudentNode* head, int roll, const char* name, float marks) {
    StudentNode* newNode = (StudentNode*)malloc(sizeof(StudentNode));
    if (!newNode) {
        printf("Memory allocation failed.\\n");
        return head;
    }
    newNode->rollNumber = roll;
    strncpy(newNode->name, name, 49);
    newNode->marks = marks;
    newNode->next = head;
    return newNode;
}`,
        },
      },
    ] as Project[],
  },

  contact: {
    title: "Let's build something together.",
    titlePrefix: "Let's build something",
    titleAccent: "together.",
    sectionIndex: "04 / 04",
    text: "Open to internships, collaborations and learning opportunities.",
    email: "priyadarshiniraul4@gmail.com",
    github: "https://github.com/priyadarshiniraul",
    linkedin: "https://linkedin.com/in/priyadarshani-raul",
    footerText: "© 2026 Priyadarshani Raul · Angul, Odisha",
  },
};
