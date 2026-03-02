import { CVData } from "@/types";

export const cvData: CVData = {
  name: "Your Name",
  title: "Frontend Developer",
  tagline:
    "Building premium, performant, and user-centric web experiences with modern technologies.",
  about: {
    summary:
      "I am a passionate Frontend Developer specialized in React, Next.js, and TypeScript. I focus on creating visually stunning and highly functional web applications that provide exceptional user experiences.",
    strengths: [
      "Clean Code Enthusiast",
      "UI/UX Driven",
      "Performance Minded",
      "Strong Problem Solver",
    ],
    goal: "My goal is to leverage my skills in modern web development to build scalable products that make a positive impact on users worldwide.",
  },
  skills: [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Redux", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "SCSS", category: "Styling" },
    { name: "Framer Motion", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "Postman", category: "Tools" },
  ],
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "2022 - Present",
      responsibilities: [
        "Leading the frontend development of a high-traffic e-commerce platform.",
        "Optimizing application performance, reducing TTI by 40%.",
        "Mentoring junior developers and implementing code review processes.",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    },
    {
      role: "Frontend Developer",
      company: "Creative Web Solutions",
      duration: "2020 - 2022",
      responsibilities: [
        "Developed responsive and interactive user interfaces for various clients.",
        "Collaborated with UI/UX designers to implement pixel-perfect designs.",
        "Integrated RESTful APIs and managed application state efficiently.",
      ],
      tech: ["React", "Redux", "SCSS", "JavaScript"],
    },
  ],
  projects: [
    {
      title: "E-Commerce Suite",
      description:
        "A comprehensive e-commerce platform with real-time inventory management and advanced analytics.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/projects/ecommerce.png",
    },
    {
      title: "Design System Pro",
      description:
        "A scalable and accessible design system implemented with React and optimized for accessibility.",
      tech: ["React", "Tailwind CSS", "Storybook"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: "/projects/design-system.png",
    },
  ],
  contact: {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  },
};
