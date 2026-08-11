import { CVData } from "@/types";

export const cvData: CVData = {
  name: "TRƯƠNG ÁI NGA",
  title: "Fullstack Web Developer",
  roles: ["Web Developer", "HCMUTE Student", "Fullstack Web Developer"],
  tagline:
    "I build responsive web applications with React, Next.js, and Spring Boot, with a strong interest in secure authentication, clean UI, and practical full-stack architecture.",
  avatar: "/assets/images/Ái Nga.jpg",
  about: {
    summary:
      "I am an Information Security student at HCMUTE focused on full-stack web development. I work mainly with React, Next.js, TypeScript, Spring Boot, and relational databases to build practical web applications with clean interfaces and maintainable code.",
    strengths: [
      "Component-Oriented",
      "Responsive Design",
      "Performance-Aware",
      "Detail-Oriented",
    ],
    goal: "My security background helps me pay close attention to authentication, authorization, and safe data handling. I enjoy building features that are not only easy to use, but also designed with secure flows such as JWT, RBAC, and API validation in mind.",
  },
  education: {
    school: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
    degree: "B.Eng. in Information Security",
    duration: "2022 - 2026",
    focus:
      "Information Security major with practical training in secure web applications, backend systems, and modern full-stack development.",
    coursework: [
      "Web Programming",
      "Web Application Security",
      "Network Security",
      "Database Systems",
    ],
    focusAreas: [
      "Full-stack Web Development",
      "Application Security",
      "Secure API Design",
      "Backend System Design",
    ],
    activities:
      "GPA 8.12/10 (3.34/4.0). Completed all degree requirements and awaiting graduation confirmation.",
    icon: "/assets/images/hcmute_logo.png",
  },
  skills: [
    { name: "React.js / Next.js", category: "Frontend" },
    { name: "TypeScript / JavaScript", category: "Frontend" },
    { name: "TanStack Query / Axios", category: "Frontend" },

    { name: "Tailwind CSS / shadcn/ui", category: "Styling" },
    { name: "Ant Design / MUI", category: "Styling" },
    { name: "Responsive UI / Motion", category: "Styling" },

    { name: "Spring Boot / Java", category: "Backend" },
    { name: "NestJS / Node.js", category: "Backend" },
    { name: "PostgreSQL / Redis", category: "Backend" },
    { name: "JWT / RBAC", category: "Backend" },

    { name: "Git / GitHub / Docker", category: "Other Skills" },
    { name: "Postman / Figma", category: "Other Skills" },
    { name: "VNPay / MinIO / SMTP", category: "Other Skills" },
    { name: "Agile / Teamwork", category: "Other Skills" },
  ],
  experience: [
    {
      role: "Web Developer (Internship)",
      company: "FPT Software",
      duration: "Jun 2025 - Sep 2025",
      responsibilities: [
        "Developed backend features with Java Spring Boot in a microservices-oriented environment.",
        "Implemented authentication and authorization flows using Keycloak and RBAC.",
        "Worked with PostgreSQL, Docker, and Agile/Scrum practices during project development.",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Keycloak",
        "Microservices",
        "RBAC",
        "PostgreSQL",
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
        "Built responsive dashboard interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
        "Integrated REST APIs and improved data loading flows with Axios and reusable UI components.",
        "Collaborated with clients to refine user flows and deliver practical dashboard features.",
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
      title: "LensHub Digital Rental",
      description:
        "Graduation thesis full-stack rental platform with AI eKYC verification, VNPay checkout, RBAC dashboards, encrypted API payloads, and complete rental workflows.",
      tech: ["AI eKYC", "VNPay", "RBAC", "E2EE", "Rental Workflow"],
      githubUrl: "https://github.com/AiNga04/digital-rental",
      liveUrl: "https://www.lenshub.shop/",
      image: "/projects/digital-rental.png",
      badge: "Graduation Thesis",
      highlights: ["AI eKYC", "VNPay", "RBAC", "E2EE"],
      featured: true,
    },
    {
      title: "Zyna E-Commerce Frontend",
      description:
        "Frontend for an e-commerce and learning platform with product browsing, responsive pages, reusable UI components, and API-driven data flows built with Next.js and React Query.",
      tech: ["Next.js", "React Query", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/AiNga04/Fe-Ecommerce",
      liveUrl: "https://github.com/AiNga04/Fe-Ecommerce",
      image: "/projects/ecommerce-fe.png",
    },
    {
      title: "Zyna E-Commerce Backend",
      description:
        "RESTful backend for e-commerce features, including JWT authentication, RBAC-based authorization, product/order APIs, and relational database management with Spring Boot.",
      tech: ["Spring Boot", "MySQL", "JWT", "RBAC", "Microservices"],
      githubUrl: "https://github.com/AiNga04/Be-Ecommerce",
      liveUrl: "https://github.com/AiNga04/Be-Ecommerce",
      image: "/projects/ecommerce-be.png",
    },
    {
      title: "E2EE_SHIELD SDK",
      description:
        "Security-focused SDK concept for protecting API transmissions with end-to-end encryption principles, secure request handling, and a Zero Trust-inspired design approach.",
      tech: ["Security", "API", "Zero Trust", "TypeScript"],
      githubUrl: "https://github.com/AiNga04/E2EE_SHIELD",
      liveUrl: "https://github.com/AiNga04/E2EE_SHIELD",
      image: "/projects/security.png",
    },
    {
      title: "Wanderlust Travel Masterclass",
      description:
        "Responsive travel landing and booking interface with destination sections, flight/hotel UI patterns, smooth interactions, and Tailwind-based styling.",
      tech: ["Tailwind CSS", "JavaScript", "HTML", "SCSS"],
      githubUrl: "https://github.com/AiNga04/11_Tailwind_Travel",
      liveUrl: "https://ainga04.github.io/11_Tailwind_Travel/",
      image: "/projects/travel.png",
    },
    {
      title: "Movie Zone Production",
      description:
        "Movie browsing interface with a dark theme, category filtering, responsive layouts, and polished card-based presentation for media content.",
      tech: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/AiNga04/8_Movie_Zone",
      liveUrl: "https://ainga04.github.io/8_Movie_Zone/",
      image: "/projects/movie.png",
    },
    {
      title: "Online Course Platform",
      description:
        "Course sales interface with course cards, filtering sections, responsive Bootstrap layouts, and a clear learning-focused user experience.",
      tech: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/AiNga04/6_Bootstrap_CourseSales",
      liveUrl: "https://ainga04.github.io/6_Bootstrap_CourseSales",
      image: "/projects/learning.png",
    },
  ],
  contact: {
    email: "ainga01012004@gmail.com",
    phone: "0376600545",
    address: "Thủ Đức, Viet Nam",
    linkedin: "https://www.linkedin.com/in/nga-tr%C6%B0%C6%A1ng-bb62202ab/",
    github: "https://github.com/AiNga04",
    cvUrl: "/cv/truong-ai-nga-resume.pdf",
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
