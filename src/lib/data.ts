import { CVData } from "@/types";

export const cvData: CVData = {
  name: "TRƯƠNG ÁI NGA",
  title: "Frontend Developer",
  tagline:
    "Building premium, performant, and user-centric web experiences with modern technologies.",
  about: {
    summary:
      "Dynamic, creative, and proactive. Welcome, everyone! It’s great to have you here!",
    strengths: ["Dynamic", "Creative", "Proactive", "UI/UX Driven"],
    goal: "“When you want something, all the universe conspires in helping you to achieve it”. My goal is to use my passion for frontend development to build beautiful and impactful web experiences.",
  },
  skills: [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "HTML/CSS", category: "Styling" },
    { name: "Framer Motion", category: "Styling" },
    { name: "Git", category: "Tools" },
    { name: "Vercel", category: "Tools" },
  ],
  experience: [
    {
      role: "Undergraduate Student",
      company: "HCMUTE",
      duration: "Present",
      responsibilities: [
        "Studying Information Technology with a focus on Frontend development.",
        "Building personal projects to hone skills in React and Next.js.",
        "Actively participating in developer communities and learning new technologies.",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      description:
        "A premium, production-ready personal CV/Portfolio website built with Next.js 16 and Framer Motion.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      githubUrl: "https://github.com/AiNga04",
      liveUrl: "https://example.com",
      image: "/projects/portfolio.png",
    },
  ],
  contact: {
    email: "ainga01012004@gmail.com",
    linkedin: "https://www.linkedin.com/in/nga-tr%C6%B0%C6%A1ng-bb62202ab/",
    github: "https://github.com/AiNga04",
    cvUrl: "/resume.pdf", // USER: Place your resume.pdf in the public/ folder
  },
};
