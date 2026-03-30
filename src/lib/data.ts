import { CVData } from "@/types";

export const cvData: CVData = {
  name: "TRƯƠNG ÁI NGA",
  title: "Fullstack Developer",
  roles: ["Web Developer", "HCMUTE Student", "Fullstack Developer"],
  tagline:
    "Hi, I'm Trương Ái Nga, a passionate full-stack developer! I specialize in building end-to-end web applications with professional frontend interfaces and robust backend systems.",
  avatar: "/assets/images/Ái Nga.jpg",
  about: {
    summary:
      "I specialize in modern full-stack development, bridging the gap between elegant user interfaces and scalable server-side architectures. With expertise in React, Next.js, and TypeScript on the frontend, combined with Spring Boot and Node.js on the backend, I build seamless, production-ready applications.",
    strengths: [
      "Component-Oriented",
      "Responsive Design",
      "Performance-Aware",
      "Detail-Oriented",
    ],
    goal: "I also prioritize security across the full-stack, implementing robust authentication with JWT/RBAC, protecting against XSS/CSRF, and ensuring secure data handling from the browser to the database. I believe great user experiences must be both visually refined and fundamentally secure at every layer.",
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
      role: "Web Developer (Freelance)",
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
    phone: "+84 376 600 545",
    address: "Di An, Binh Duong, Viet Nam",
    linkedin: "https://www.linkedin.com/in/nga-tr%C6%B0%C6%A1ng-bb62202ab/",
    github: "https://github.com/AiNga04",
    cvUrl: "/cv/resume.pdf",
  },
  hobbies: [
    { name: "Reading Technology Blogs", icon: "book" },
    { name: "Go for a walk after many hours of work", icon: "walk" },
    { name: "Listening to Music", icon: "music" },
  ],
  socials: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/truong.ai.nga.2025/",
      description:
        "Don't miss the opportunity to learn and connect with me on Facebook!",
      icon: "/assets/icons/facebook-3d.png",
      color: "#1877F2",
    },
    {
      platform: "Github",
      url: "https://github.com/AiNga04",
      description:
        "Explore open source projects and connect with me on GitHub!",
      icon: "/assets/icons/github-3d.png",
      color: "#6e5494",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/ainga_76",
      description: "Follow the latest updates and connect via Instagram!",
      icon: "/assets/icons/instagram-3d.png",
      color: "#E4405F",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/nga-tr%C6%B0%C6%A1ng-bb62202ab/",
      description:
        "Professional networking and industry connections on LinkedIn!",
      icon: "/assets/icons/linkedin-3d.png",
      color: "#0A66C2",
    },
  ],
};
