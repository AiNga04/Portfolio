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
    // Frontend - Core
    { name: "HTML5 / CSS3 / SCSS", category: "Frontend" },
    { name: "JavaScript (ES6+) / TypeScript", category: "Frontend" },

    // Frontend - Frameworks & Libs
    { name: "React.js / Next.js (App Router)", category: "Frontend" },
    { name: "Redux Toolkit / Context API", category: "Frontend" },
    { name: "TanStack Query / Axios", category: "Frontend" },

    // UI & Styling
    { name: "Tailwind CSS / Bootstrap 5", category: "Styling" },
    { name: "shadcn/ui / Ant Design / MUI", category: "Styling" },
    { name: "Framer Motion", category: "Styling" },

    // Backend (Foundation)
    { name: "Node.js / NestJS (REST API)", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "MySQL / Postgresql / MongoDB", category: "Backend" },
    { name: "JWT / RBAC", category: "Backend" },

    // Tools & DevOps
    { name: "Git / GitHub / Docker", category: "Other Skills" },
    { name: "Vercel / CI/CD concepts", category: "Other Skills" },
    { name: "Postman / Figma", category: "Other Skills" },

    // Soft Skills
    { name: "Agile / Scrum / Teamwork", category: "Other Skills" },
    { name: "Problem-Solving / Research", category: "Other Skills" },
  ],
  experience: [
    {
      role: "Undergraduate Student",
      company: "HCMUTE",
      duration: "Sep 2022 - Present",
      responsibilities: [
        "Studying Information Security with a strong focus on Web Application Security and secure system design.",
        "Developing advanced web applications to strengthen expertise in React, Next.js, and Spring Boot.",
        "Continuously improving practical skills through hands-on projects, modern frontend architecture, and secure backend integration.",
        "Actively participating in developer communities and learning new technologies.",
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Spring Boot",
        "JWT",
        "RBAC",
        "MySQL",
        "Postgresql",
        "MongoDB",
        "Node.js",
        "NestJS",
        "Redux Toolkit",
        "Context API",
        "TanStack Query",
        "Axios",
        "Bootstrap 5",
        "shadcn/ui",
        "Ant Design",
        "MUI",
        "Framer Motion",
        "Git",
        "GitHub",
        "Docker",
        "Vercel",
        "CI/CD concepts",
        "Postman",
        "Teamwork",
        "Problem-Solving",
        "Research",
      ],
      icon: "/assets/images/hcmute_logo.png",
    },
    {
      role: "Web Developer (Internship)",
      company: "FPT Software",
      duration: "Jun 2025 - Sep 2025",
      responsibilities: [
        "Learned and applied Java Spring Boot for backend development.",
        "Implemented secure authentication and authorization using Keycloak and RBAC.",
        "Gained hands-on experience with Microservices architecture and system integration.",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Keycloak",
        "Microservices",
        "RBAC",
        "Postgresql",
        "Docker",
        "Agile",
        "Scrum",
        "Teamwork",
        "Problem-Solving",
      ],
      icon: "/assets/images/fpt_logo.webp",
    },
    {
      role: "Frontend Developer (Freelance)",
      company: "viec24h.vn",
      duration: "Jun 2025 - Aug 2025",
      responsibilities: [
        "Developed and maintained complex dashboard interfaces using React and Next.js.",
        "Optimized frontend performance and ensured responsive design across all devices.",
        "Collaborated with clients to deliver user-centric features and intuitive UX.",
      ],
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Axios",
        "shadcn/ui",
      ],
    },
    {
      role: "Web Developer (Internship)",
      company: "BiziBusiness",
      duration: "May 2025 - Jun 2025",
      responsibilities: [
        "Developed and customized websites using WordPress to meet marketing agency requirements.",
        "Managed content updates and optimized site performance for results-driven marketing.",
        "Collaborated with the design team to implement responsive and visually appealing layouts.",
      ],
      tech: ["WordPress", "PHP", "CSS", "HTML"],
    },
  ],
  projects: [
    {
      title: "Zyna E-Commerce Frontend",
      description:
        "High-performance e-learning & shopping platform interface. Built with Next.js 16, React Query, and Tailwind for a seamless, production-ready user experience.",
      tech: ["Next.js", "React Query", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/AiNga04/Fe-Ecommerce",
      liveUrl: "https://github.com/AiNga04/Fe-Ecommerce",
      image: "/projects/ecommerce-fe.png",
    },
    {
      title: "Zyna E-Commerce Backend",
      description:
        "Scalable RESTful API for E-commerce featuring granular RBAC, JWT authentication, and high-performance database management with Spring Boot.",
      tech: ["Spring Boot", "MySQL", "JWT", "RBAC", "Microservices"],
      githubUrl: "https://github.com/AiNga04/Be-Ecommerce",
      liveUrl: "https://github.com/AiNga04/Be-Ecommerce",
      image: "/projects/ecommerce-be.png",
    },
    {
      title: "E2EE_SHIELD SDK",
      description:
        "Security-focused SDK for end-to-end encryption on API transmissions based on Zero Trust principles. Protects sensitive data with modern cryptographic standards.",
      tech: ["Security", "API", "Zero Trust", "TypeScript"],
      githubUrl: "https://github.com/AiNga04/E2EE_SHIELD",
      liveUrl: "https://github.com/AiNga04/E2EE_SHIELD",
      image: "/projects/security.png",
    },
    {
      title: "Wanderlust Travel Masterclass",
      description:
        "Premium travel discovery platform with smooth animations and responsive flight/hotel booking interfaces. Built with Tailwind CSS and modern JS.",
      tech: ["Tailwind CSS", "JavaScript", "HTML", "SCSS"],
      githubUrl: "https://github.com/AiNga04/11_Tailwind_Travel",
      liveUrl: "https://ainga04.github.io/11_Tailwind_Travel/",
      image: "/projects/travel.png",
    },
    {
      title: "Movie Zone Production",
      description:
        "Attractive movie streaming website with smart filtering features. Provides a seamless viewing experience with a sleek, dark-themed production interface.",
      tech: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/AiNga04/8_Movie_Zone",
      liveUrl: "https://ainga04.github.io/8_Movie_Zone/",
      image: "/projects/movie.png",
    },
    {
      title: "Online Course Platform",
      description:
        "Modern e-learning platform featuring smart course filtering and an instructional UI designed for optimal learning efficiency and user engagement.",
      tech: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/AiNga04/6_Bootstrap_CourseSales",
      liveUrl: "https://ainga04.github.io/6_Bootstrap_CourseSales",
      image: "/projects/learning.png",
    },
  ],
  contact: {
    email: "ainga01012004@gmail.com",
    linkedin: "https://www.linkedin.com/in/nga-tr%C6%B0%C6%A1ng-bb62202ab/",
    github: "https://github.com/AiNga04",
    cvUrl: "/resume.pdf", // USER: Place your resume.pdf in the public/ folder
  },
};
