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
    ],
    sourceCode: "https://github.com/Abinesh0708"
  },
  {
    id: "organizo-task-tracker",
    title: "Organizo – Smart Personal Task Tracker",
    description: "A productivity app to help users stay organized effortlessly.",
    tags: ["UI/UX Design", "Productivity", "Mobile App"],
    image: "/imgs/organizo.png",
    sections: [
      {
        title: "Project Overview",
        content: "Organizo is a mobile task-management app designed to simplify planning and help users stay on top of their daily activities. The goal of the project was to create a clean, intuitive, and visually engaging interface that makes task tracking feel effortless. The design integrates a dark theme with vibrant gradients, offering both aesthetics and usability. The app includes essential productivity features such as categories, calendars, statistics, and user profile customization."
      },
      {
        title: "Problem Statement",
        content: [
          "Most task-tracking apps are cluttered and overwhelming. Users struggle with:",
          "• Too many features that slow them down",
          "• Poor visual hierarchy",
          "• Confusing navigation",
          "• Lack of motivation to check or update tasks",
          "The challenge was to create a minimal yet powerful tool that increases productivity without overwhelming the user."
        ]
      },
      {
        title: "Design Goals",
        content: [
          "1. Simple and Clean UI: Reduce complexity and present information clearly.",
          "2. Powerful Categorization: Allow users to group tasks into meaningful sections.",
          "3. Engaging Dark Theme + Gradient: Ensure comfortable usage, especially at night, while giving the app a bold visual identity.",
          "4. Quick Navigation: Use a five-tab bottom bar for instant access to key features.",
          "5. Visual Motivation: Provide streaks, stats, and progress tracking to keep users consistent."
        ]
      },
      {
        title: "User Flow",
        content: [
          "1. Onboarding → Dashboard: Users start with a welcoming screen and a clear CTA: Get Started.",
          "2. Dashboard → Categories: They see high-level summaries and can explore categorized tasks.",
          "3. Categories → Individual Task Lists: Each category contains tasks with status indicators.",
          "4. Calendar → Daily Overview: A visual scheduler helps users plan tasks by date.",
          "5. Statistics → Productivity Insights: Users track streaks, task completion rate, and weekly habits.",
          "6. Profile → Personal Preferences: Theme switching, notification controls, and account settings."
        ]
      },
      {
        title: "UI Screens & Design Breakdown",
        content: [
          "1. Dashboard – “Stay Organized Effortlessly”",
          "The dashboard acts as the hero screen, designed with:",
          "• A deep purple-to-black gradient for a modern look",
          "• A bold headline to set tone",
          "• Clean subtext for quick context",
          "• Soft-glow CTA button: Get Started",
          "• A minimal bottom nav bar",
          "This visual style builds trust and invites users into the experience.",
          "2. Categories Screen",
          "Key features:",
          "• Six well-defined category cards",
          "• Task count displayed under each category",
          "• Rounded containers with soft borders",
          "• Purple accents for hierarchy",
          "Purpose: Help users quickly classify tasks to reduce mental load.",
          "3. Task List (Work Category)",
          "Highlights:",
          "• Filter chips (Work, Study, Life, Priority) for fast sorting",
          "• Checkbox system to mark task completion",
          "• Colored indicators for task type or urgency",
          "• Structured layout: Task title + Subtext description",
          "This screen ensures users can manage individual tasks smoothly.",
          "4. Calendar Screen",
          "Features:",
          "• Monthly calendar with highlighted selected date",
          "• Horizontal navigation between months",
          "• Daily timeline view showing scheduled activities",
          "• Activity icons for quick recognition",
          "• Smooth spacing and clear layout for time management",
          "The layout encourages daily discipline and long-term planning.",
          "5. Statistics Screen",
          "What users see:",
          "• Task completion metrics",
          "• Overall productivity score",
          "• Weekly charts",
          "• Current streak (days of consistency)",
          "• Graphs with soft curves matching the app’s visual identity",
          "This screen keeps users motivated and helps them visualize improvement.",
          "6. Profile Screen",
          "Contains:",
          "• Avatar illustration",
          "• User membership badge (Premium User)",
          "• Toggles for light/dark mode & notifications",
          "• Account-related quick actions (Password, Subscription, Logout)",
          "This customization empowers the user and builds trust."
        ]
      },
      {
        title: "Visual Design System",
        content: [
          "Color Palette",
          "• Dark Black: #0E0E11",
          "• Purple Gradient: #6D28D9 → #9333EA",
          "• White for text: #FFFFFF",
          "• Accent Green: #32FF9C (for completion status)",
          "Typography",
          "• Bold, geometric sans-serif",
          "• Clear hierarchy between titles, subtitles, and small labels",
          "Iconography",
          "• Linear, modern icons",
          "• Universal symbols for calendar, tasks, profile, etc.",
          "Spacing & Layout",
          "• Generous padding",
          "• Rounded corners for soft, approachable feel",
          "• Balanced visual weight across elements"
        ]
      },
      {
        title: "UX Decisions & Rationale",
        content: [
          "Dark Theme First: Chosen to reduce eye strain and give a premium feel.",
          "Gradient Usage: Purple gradients convey creativity, focus, and calm.",
          "Clear Navigation: The bottom bar ensures users can access all core features instantly.",
          "Quick Actions (Create Todo / Create Category): Floating buttons simplify interactions and reduce user effort.",
          "Progress Motivation: Streaks, stats, and weekly habits are proven methods to encourage consistency."
        ]
      },
      {
        title: "Final Outcome",
        content: [
          "Organizo successfully delivers a clean, intuitive, and powerful task-tracking experience.",
          "The UI feels modern, while the UX ensures the app remains simple for everyday use.",
          "This project showcases:",
          "✔ Strong visual design",
          "✔ Thoughtful interaction patterns",
          "✔ Focus on usability",
          "✔ Cohesive branding",
          "✔ Clear information architecture",
          "Perfect for demonstrating your UI/UX expertise in mobile productivity apps."
        ]
      },
      {
        title: "Conclusion",
        content: "Organizo solves the clutter and overwhelm found in traditional task apps by offering a beautiful, focused, and functional design system. The final experience empowers users to stay productive with ease while enjoying a premium, dark-themed interface."
      }
    ],
    gallery: [
      "/imgs/organizo-ui-1.png",
      "/imgs/organizo-ui-2.png"
    ]
  },
  {
    id: "tech-innovators",
    title: "Web Design",
    description: "A corporate landing page design for a tech consultancy firm, focusing on modern aesthetics and clear service presentation.",
    tags: ["UI/UX Design", "Web Design", "Corporate"],
    image: "/imgs/tech-innovators.png",
    sections: [
      {
        title: "Project Overview",
        content: "The goal of this project was to design a modern, clean, and professional website for an IT solutions company. The website includes three core pages: Landing Page (Company overview, expertise, case studies, testimonials), About Page (Company journey, core values, leadership), and Services Page (Full list of expert IT services). The focus was on creating a trust-building, easy-to-navigate, and visually consistent interface that highlights the company’s strengths and enhances user credibility."
      },
      {
        title: "Problem Statement",
        content: [
          "Many IT service websites are overloaded with content and lack a clear structure. Users often find it difficult to:",
          "• Understand the company’s offerings quickly",
          "• Trust the brand due to outdated design",
          "• Navigate between different sections",
          "• Get essential information without scrolling too much",
          "This project aims to solve these challenges through a minimal, structured, and user-friendly design approach."
        ]
      },
      {
        title: "UX Goals",
        content: [
          "• Make the website simple, intuitive, and information-focused",
          "• Increase trust and brand value through visual consistency",
          "• Organize services and expertise in a way that’s easily digestible",
          "• Improve user decision-making by placing CTAs strategically",
          "• Ensure readability and visual hierarchy across all pages"
        ]
      },
      {
        title: "Research Summary",
        content: [
          "Target Users:",
          "• Business owners looking for IT solutions",
          "• Startup founders needing digital transformation",
          "• IT procurement managers evaluating vendors",
          "• Enterprise clients searching for specialized services",
          "User Needs Identified:",
          "• ✔ Clear explanation of services",
          "• ✔ Visible company credibility (experience, values, leadership)",
          "• ✔ Proof of work (case studies, testimonials)",
          "• ✔ A quick way to contact or hire the company"
        ]
      },
      {
        title: "Information Architecture",
        content: [
          "The website follows a clean IA structure:",
          "Home → Expertise → Featured Services → Case Studies → Testimonials → CTA (Get Started)",
          "About Page → Company Intro → Journey Timeline → Core Values → Leadership Section → Footer Navigation",
          "Services Page → Individual service cards → Short descriptions for easier scanning → CTA to contact → Footer",
          "This structure reduces cognitive load and ensures clarity."
        ]
      },
      {
        title: "Wireframing",
        content: [
          "Low-fidelity wireframes were used to plan:",
          "• Page hierarchy",
          "• Section spacing",
          "• CTA positioning",
          "• Content distribution",
          "Focus was placed on white space, balance, and readability."
        ]
      },
      {
        title: "UI Design Decisions",
        content: [
          "Color Palette:",
          "• White + Light Gray: Clean, modern, professional",
          "• Purple Accent: Premium, tech-forward, attention-grabbing",
          "Typography:",
          "• Clear sans-serif fonts for high readability",
          "• Large headings to create strong hierarchy",
          "• Comfortable line spacing for long-form content",
          "Components Used:",
          "• Cards for services and team members",
          "• Hero section with soft gradients and abstract 3D shapes",
          "• Rounded CTAs for modern aesthetic",
          "• Consistent spacing & grid"
        ]
      }
    ],
    gallery: [
      "/imgs/web-design-1.png",
      "/imgs/web-design-2.png"
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