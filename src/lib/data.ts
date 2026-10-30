import { CVData } from "@/types";

export const cvData: CVData = {
  name: "TRƯƠNG ÁI NGA",
  title: "Fullstack Web Developer",
  roles: ["Fullstack Web Developer", "React & Next.js Developer", "Java & Spring Boot Developer"],
  tagline:
    "Fresher Fullstack Developer building secure web applications with Java, Spring Boot, Next.js, and TypeScript, with hands-on experience deploying Docker-based applications on AWS EC2.",
  avatar: "/assets/images/ai-nga.jpg",
  about: {
  "summary": "I am a Fresher Fullstack Developer with hands-on experience in Java, Spring Boot, Next.js, and TypeScript, including a Web Developer internship at FPT Software. My Information Security background supports my work on secure authentication, payment integration, and practical full-stack applications.",
  "strengths": [
    "End-to-End Workflows",
    "Secure Authentication",
    "Server & UI State",
    "Docker & AWS EC2"
  ],
  "goal": "I have built and deployed full-stack applications with Docker on AWS EC2, automated delivery with GitHub Actions, and integrated VNPay, FPT AI eKYC, and MinIO. I am seeking a Fullstack Developer opportunity where I can contribute to reliable web applications and continue developing my engineering skills."
},
  education: {
    school: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
    degree: "Major: Information Security",
    duration: "2022 - 2026",
    focus:
      "Information Security major with practical training in secure web applications, backend systems, and modern full-stack development.",
    focusAreas: [
      "Full-stack Web Development",
      "Application Security",
      "Secure API Design",
      "Backend System Design",
    ],
    activities:
      "GPA 3.34/4.0. Major: Information Security.",
    icon: "/assets/images/hcmute_logo.png",
  },
  skills: [
  {
    "name": "React.js / Next.js",
    "category": "Front-end"
  },
  {
    "name": "TypeScript / JavaScript",
    "category": "Front-end"
  },
  {
    "name": "HTML5 / CSS3 / SCSS",
    "category": "Front-end"
  },
  {
    "name": "Tailwind CSS / Responsive UI",
    "category": "Front-end"
  },
  {
    "name": "TanStack Query",
    "category": "State Management & API Integration"
  },
  {
    "name": "Zustand",
    "category": "State Management & API Integration"
  },
  {
    "name": "Axios / RESTful API",
    "category": "State Management & API Integration"
  },
  {
    "name": "JWT / Refresh-Token Handling",
    "category": "State Management & API Integration"
  },
  {
    "name": "Java / Spring Boot",
    "category": "Back-end"
  },
  {
    "name": "Spring Security",
    "category": "Back-end"
  },
  {
    "name": "Node.js / NestJS",
    "category": "Back-end"
  },
  {
    "name": "RESTful API / JWT / RBAC",
    "category": "Back-end"
  },
  {
    "name": "PostgreSQL / MySQL",
    "category": "Database & storage"
  },
  {
    "name": "Redis / MinIO",
    "category": "Database & storage"
  },
  {
    "name": "VNPay API",
    "category": "Payment & Security Integration"
  },
  {
    "name": "FPT AI eKYC",
    "category": "Payment & Security Integration"
  },
  {
    "name": "E2EE Concepts",
    "category": "Payment & Security Integration"
  },
  {
    "name": "Git / Docker / Linux / AWS EC2",
    "category": "Tools & Workflow"
  },
  {
    "name": "CI/CD / GitHub Actions / Postman",
    "category": "Tools & Workflow"
  },
  {
    "name": "Agile / Scrum",
    "category": "Tools & Workflow"
  }
],
  experience: [
  {
    "role": "Web Developer (Internship)",
    "company": "FPT Software",
    "duration": "Jun 2025 - Sep 2025",
    "responsibilities": [
      "Developed backend features using Java and Spring Boot in a microservices-oriented environment.",
      "Implemented authentication and role-based authorization using Keycloak and RBAC.",
      "Worked with PostgreSQL and Docker during application development.",
      "Collaborated with team members in an Agile/Scrum environment to implement and maintain web application features."
    ],
    "tech": [
      "Java",
      "Spring Boot",
      "Keycloak",
      "Microservices",
      "RBAC",
      "PostgreSQL",
      "Docker",
      "Agile/Scrum"
    ],
    "icon": "/assets/images/fpt_logo.webp"
  }
],
  projects: [
  {
    "title": "Digital Rental - Secure Camera Rental Platform",
    "role": "Fullstack Developer",
    "duration": "Feb 5, 2026 - Present",
    "description": "Graduation thesis implementing end-to-end camera rental workflows for equipment availability, deposits, device serial tracking, returns, and fee calculation.",
    "tech": [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "TanStack Query",
      "Zustand",
      "Docker",
      "AWS EC2"
    ],
    "githubUrl": "https://github.com/AiNga04/digital-rental",
    "liveUrl": "https://www.lenshub.shop/",
    "image": "/projects/digital-rental.png",
    "badge": "Graduation Thesis",
    "highlights": [
      "TanStack Query caching for server state and Zustand for authentication/loading state.",
      "Spring Security RBAC and E2EE using ECDH, HKDF-SHA256, and AES-256-GCM.",
      "VNPay payments, FPT AI eKYC verification, and MinIO object storage.",
      "Multi-stage Docker images with non-root execution and container health checks.",
      "GitHub Actions CI/CD for Docker builds, Docker Hub pushes, and AWS EC2 deployment."
    ],
    "featured": true
  },
{
  "title": "Zyna E-Commerce - Full-Stack Fashion Platform",
  "role": "Fullstack Developer",
  "duration": "Oct 28, 2025 - Mar 22, 2026",
  "description": "Full-stack fashion e-commerce platform with customer and admin interfaces, modular RESTful APIs, and complete product, inventory, checkout, order, and shipping workflows.",
  "tech": [
    "Java",
    "Spring Boot",
    "Spring Security",
    "PostgreSQL",
    "Redis",
    "Next.js",
    "TypeScript",
    "TanStack Query",
    "Zustand",
    "Axios"
  ],
  "githubUrl": "https://github.com/AiNga04/Fe-Ecommerce",
  "sourceLinks": [
    {
      "label": "Frontend",
      "url": "https://github.com/AiNga04/Fe-Ecommerce"
    },
    {
      "label": "Backend",
      "url": "https://github.com/AiNga04/Be-Ecommerce"
    }
  ],
  "image": "/projects/ecommerce-fe.png",
  "badge": "Personal Project",
  "highlights": [
    "Inventory validation and transaction management for consistent order processing.",
    "Spring Security, JWT refresh-token rotation, Redis token blacklisting, and RBAC.",
    "Axios interceptors with a refresh-token queue for concurrent 401 responses.",
    "TanStack Query caching and auto-refetching for server state, with Zustand for UI state.",
    "VNPay payments and Redis caching for backend data access."
  ]
},
    {
      badge: "Personal Project",
      title: "E2EE_SHIELD SDK",
      description:
        "Security-focused SDK concept for protecting API transmissions with end-to-end encryption principles, secure request handling, and a Zero Trust-inspired design approach.",
      tech: ["Security", "API", "Zero Trust", "TypeScript"],
      githubUrl: "https://github.com/AiNga04/E2EE_SHIELD",
      image: "/projects/security.png",
    },
    {
      badge: "Personal Project",
      title: "Wanderlust Travel Masterclass",
      description:
        "Responsive travel landing and booking interface with destination sections, flight/hotel UI patterns, smooth interactions, and Tailwind-based styling.",
      tech: ["Tailwind CSS", "JavaScript", "HTML", "SCSS"],
      githubUrl: "https://github.com/AiNga04/11_Tailwind_Travel",
      liveUrl: "https://ainga04.github.io/11_Tailwind_Travel/",
      image: "/projects/travel.png",
    },
    {
      badge: "Personal Project",
      title: "Movie Zone Production",
      description:
        "Movie browsing interface with a dark theme, category filtering, responsive layouts, and polished card-based presentation for media content.",
      tech: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/AiNga04/8_Movie_Zone",
      liveUrl: "https://ainga04.github.io/8_Movie_Zone/",
      image: "/projects/movie.png",
    },
    {
      badge: "Personal Project",
      title: "Online Course Platform",
      description:
        "Course sales interface with course cards, filtering sections, responsive Bootstrap layouts, and a clear learning-focused user experience.",
      tech: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/AiNga04/6_Bootstrap_CourseSales",
      liveUrl: "https://ainga04.github.io/6_Bootstrap_CourseSales",
      image: "/projects/learning.png",
    }
],
  contact: {
    email: "ainga01012004@gmail.com",
    phone: "+84 376 600 545",
    address: "Thu Duc, Viet Nam",
    linkedin: "https://www.linkedin.com/in/nga-tr%C6%B0%C6%A1ng-bb62202ab/",
    github: "https://github.com/AiNga04",
    cvUrl: "/cv/truong-ai-nga-resume.pdf",
  },
  hobbies: [
  {
    "name": "Exploring modern web technologies, secure application design, and developer tools.",
    "icon": "code"
  },
  {
    "name": "Designing clean, user-friendly interfaces and improving personal web projects.",
    "icon": "layout"
  }
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
