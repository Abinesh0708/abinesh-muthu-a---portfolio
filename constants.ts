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
  title: "Product Designer",
  tagline: "I transform complex ideas into simple, user-first interfaces through thoughtful research, design strategy, and visual clarity.",
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
    id: "google-pay-redesign",
    title: "Google Pay Redesign",
    description: "A comprehensive redesign of the Google Pay interface, focusing on enhanced user experience, intuitive navigation, and a modern aesthetic. This project reimagines the payment flow to be more seamless and visually engaging.",
    tags: ["UI/UX Design", "Figma", "Mobile App"],
    image: "/imgs/google-pay.png",
    sections: [
      {
        title: "Project Overview",
        content: "This project focuses on redesigning the Google Pay home screen to create a more visually engaging, intuitive, and structured money-management experience. The goal was to reduce clutter, improve feature discoverability, and introduce a modern aesthetic that enhances user comfort and confidence while performing financial activities."
      },
      {
        title: "Problem Statement",
        content: [
          "Though Google Pay is widely used, its home screen contains dense content and inconsistent spacing that can feel overwhelming to users. Important features like People, Bills, and Recharge often get visually crowded, reducing the ease of navigation.",
          "The redesign aims to solve:",
          "• Lack of visual hierarchy",
          "• Overly compact layout",
          "• Low personalization",
          "• Limited emotional touch",
          "• Repetitive icons and grouping"
        ]
      },
      {
        title: "UX Goals",
        content: [
          "• Improve readability with clear visual spacing",
          "• Build stronger hierarchy to guide user flow",
          "• Create a calming interface with theme-based design",
          "• Highlight essential features for faster actions",
          "• Make the UI feel personal and warm rather than utility-heavy"
        ]
      },
      {
        title: "Design Decisions",
        content: [
          "✔ 4.1 Background & Personalization",
          "A calm sunset-themed artwork was added to bring emotional warmth. This gives the payment app a modern, premium feel and breaks the monotony of flat dark background.",
          "✔ 4.2 Action Button Improvements",
          "Quick actions like Scan QR, Pay Anyone, Bank Transfer, Mobile Recharge are redesigned with:",
          "• Modern gradient icons",
          "• Increased spacing",
          "• Uniform card-style backgrounds",
          "• Better recognizability",
          "✔ 4.3 People Section Optimization",
          "The contacts area was redesigned with:",
          "• Larger initials",
          "• Clean circular shape",
          "• Better spacing between users",
          "• Consistent typography",
          "This improves scanning speed and reduces visual stress.",
          "✔ 4.4 Bills & Recharge Section",
          "All service icons are grouped with better structure:",
          "• Mobile Recharge",
          "• DTH / Cable TV",
          "• Electricity",
          "• Broadband / Landline",
          "Each icon is visually balanced and aligned under a clear category heading."
        ]
      },
      {
        title: "UI Enhancements",
        content: [
          "• Rounded cards for improved friendliness",
          "• Consistent shadow depth to create layering",
          "• Well-defined spacing rules for a premium look",
          "• Smooth color gradients for icons",
          "• Clean typography for readability"
        ]
      },
      {
        title: "Outcome",
        content: [
          "The redesigned Google Pay interface feels:",
          "• More modern",
          "• More breathable",
          "• More emotionally appealing",
          "• Easier to scan",
          "• Better structured for daily usage"
        ]
      }
    ],
    gallery: [
      "/imgs/gpay-ui-1.png",
      "/imgs/gpay-ui-2.png"
    ]
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