import { Project, Experience, Education, Certification, Achievement, Patent, Publication } from './types';
import {
  Code,
  Cpu,
  Database,
  GitBranch,
  Layout,
  Terminal,
  PenTool,
  Globe
} from 'lucide-react';

export const HERO_CONTENT = {
  name: "Abinesh Muthu A",
  title: "Product Designer and Machine Learning Dev",
  tagline: "Building intelligent systems, meaningful digital experiences, and innovative solutions.",
  description: "Aspiring Mechanical Engineer, ML researcher, and full-stack developer passionate about solving real-world problems through technology.",
  location: "Tirunelveli, Tamil Nadu",
  email: "abineshmuthua@gmail.com",
  phone: "+91 70943 12695",
  linkedin: "Abinesh Muthu A",
  linkedinUrl: "https://www.linkedin.com/in/abinesh-muthu-a-66338928a/",
  githubUrl: "https://github.com/Abinesh0708"
};

export const ABOUT_CONTENT = [
  "I'm currently pursuing B.E. Mechanical Engineering at Amrita College of Engineering and Technology, Nagercoil, where I’ve built a strong foundation in engineering principles, machine learning, and product development.",
  "My expertise spans across Machine Learning, Python Development, Web Development, UI/UX Design, and Research & Innovation.",
  "I’m passionate about applying technology-driven solutions to practical challenges — whether it's designing alloys using ML, developing sustainable bioplastics, or creating seamless digital interfaces."
];

export const EDUCATION: Education[] = [
  {
    degree: "B.E. Mechanical Engineering",
    institution: "Amrita College of Engineering and Technology, Nagercoil",
    details: "CGPA: 7.5",
    period: "2022–2026"
  },
  {
    degree: "Full Stack Development Program",
    institution: "NxtWave CCBP 4.0 Academy",
    details: "Ongoing Specialized Training",
    period: "Ongoing"
  },
  {
    degree: "HSC",
    institution: "Balakrishna Matriculation Hr. Sec. School, Vadakkankulam",
    details: "53%",
    period: "Completed"
  },
  {
    degree: "SSLC",
    institution: "Balakrishna Matriculation Hr. Sec. School, Vadakkankulam",
    details: "85%",
    period: "Completed"
  }
];

export const SKILLS = {
  programming: [
    { name: "Python", icon: Terminal },
    { name: "JavaScript", icon: Code },
    { name: "HTML/CSS", icon: Globe },
    { name: "SQL / MySQL", icon: Database },
    { name: "Git & GitHub", icon: GitBranch },
  ],
  frameworks: [
    { name: "Bootstrap", icon: Layout },
    { name: "Figma", icon: PenTool },
    { name: "VS Code", icon: Cpu },
    { name: "Google Colab", icon: Cpu },
  ],
  core: [
    "Research & Development",
    "Machine Learning",
    "Front-End Development",
    "UI/UX Design",
    "Problem-Solving"
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "Generative AI Chatbot",
    description: "Built an interactive chatbot integrating OpenAI APIs and Hugging Face to deliver conversational AI experiences.",
    tags: ["Python", "OpenAI API", "Hugging Face", "AI"]
  },
  {
    title: "Podcast Generator (Speech Synthesis)",
    description: "Developed an AI-driven text-to-speech application that converts input text into generated podcasts automatically.",
    tags: ["AI", "Speech Synthesis", "Python", "Audio Processing"]
  },
  {
    title: "ML for Alloy Optimization",
    description: "Implemented ML models including SVM, Decision Tree, Random Forest, and XGBoost to predict martensite start temperature (Ms) for Cu–Al–Mn SMA alloy design.",
    tags: ["Machine Learning", "SVM", "XGBoost", "Materials Science"]
  },
  {
    title: "Starch-Based Bioplastic Research",
    description: "Conducted R&D on eco-friendly, starch-based bioplastics with a focus on sustainable material formulation and application.",
    tags: ["R&D", "Sustainability", "Material Science"]
  }
];

export const INTERNSHIPS: Experience[] = [
  {
    role: "UI/UX Design Intern",
    company: "Zidio Development",
    location: "Remote",
    period: "Aug–Sep 2024",
    description: [
      "Designed user interfaces",
      "Improved design workflows",
      "Strengthened usability and visual consistency"
    ]
  },
  {
    role: "Web Development Intern",
    company: "AK Infopark",
    location: "Nagercoil",
    period: "Mar 2024",
    description: [
      "Built responsive front-end features",
      "Gained exposure to backend development"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "UI/UX Design Training", issuer: "Zidio Development", date: "Aug–Sep 2024" },
  { name: "Build Your Own Responsive Website", issuer: "NxtWave CCBP 4.0 Academy", date: "Nov 2024" },
  { name: "Introduction to Database", issuer: "NxtWave CCBP 4.0 Academy", date: "Jun 2025" },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Best Student Award", date: "2022–2024" },
  { title: "2nd Prize — IoT & AI Hackathon (IBM/Naan Mudhalvan)", date: "Nov 2024" },
  { title: "1st Prize — National Agri Startup Conclave", date: "Aug 2023" },
];

export const PATENTS: Patent[] = [
  { title: "Bio-Degradable Plastic Plantation", id: "Application No: 202341069379 A", year: "2023" },
  { title: "Gas Stove with Storage Cabin", id: "Design No: 397816-001", year: "2023" },
];

export const PUBLICATIONS: Publication[] = [
  { title: "A Comprehensive Study on Robotics Integration in Manufacturing Systems", journal: "J.S. University", date: "Dec 2023" }
];