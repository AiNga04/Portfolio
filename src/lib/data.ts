import { CVData } from "@/types";

export const cvData: CVData = {
  name: "TRƯƠNG ÁI NGA",
  title: "Frontend Developer",
  roles: ["Frontend Developer", "HCMUTE Student", "Passionate Tech Learner"],
  tagline:
    "Hi, I'm Trương Ái Nga, a passionate web developer! I specialize in front-end development with a keen interest in creating intuitive and user-friendly web applications.",
  avatar: "/assets/images/Ái Nga.jpg",
  about: {
    summary:
      "I specialize in modern frontend development with React, Next.js, and TypeScript, building scalable and user-focused web applications. With strong fundamentals in HTML, CSS, and JavaScript, I emphasize clean architecture, performance optimization, and responsive UI design.",
    strengths: [
      "Component-Oriented",
      "Responsive Design",
      "Performance-Aware",
      "Detail-Oriented",
    ],
    goal: "I also prioritize security in frontend development by implementing best practices against XSS attacks, managing authentication flows securely, optimizing data handling, and collaborating effectively with backend systems. I believe great user experiences must be both visually refined and technically secure.",
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
