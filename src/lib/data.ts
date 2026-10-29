import { CVData } from "@/types";

export const cvData: CVData = {
  name: "TRƯƠNG ÁI NGA",
  title: "Fullstack Web Developer",
  roles: ["Fullstack Web Developer", "React & Next.js Developer", "Java & Spring Boot Developer"],
  tagline:
    "I build responsive, secure web applications with React.js, Next.js, TypeScript, and Spring Boot, from user-friendly interfaces to RESTful APIs and role-based authentication.",
  avatar: "/assets/images/ai-nga.jpg",
  about: {
  "summary": "I am a Fullstack Web Developer with a background in Information Security at HCMUTE and hands-on experience with React.js, Next.js, TypeScript, Java, and Spring Boot. I completed a Web Developer internship at FPT Software and have built fullstack projects covering e-commerce, camera rental workflows, and secure API communication.",
  "strengths": [
    "Responsive UI",
    "RESTful API Integration",
    "JWT & RBAC",
    "Fullstack Development"
  ],
  "goal": "I am seeking a Fullstack Developer opportunity to build scalable, secure, and user-friendly web applications. My experience includes PostgreSQL and Redis, payment and identity verification integrations, and secure application design."
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
      "GPA 3.34/4.0. Completed all degree requirements and awaiting graduation confirmation.",
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
    "name": "JWT Authentication Handling",
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
    "name": "Git / Docker / Linux",
    "category": "Tools & Workflow"
  },
  {
    "name": "CI/CD / Postman",
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
    "description": "Graduation thesis covering customer and admin interfaces, equipment availability, rental orders, deposits, device serial management, and overdue or damage fees.",
    "tech": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "VNPay",
      "FPT AI eKYC"
    ],
    "githubUrl": "https://github.com/AiNga04/digital-rental",
    "liveUrl": "https://www.lenshub.shop/",
    "image": "/projects/digital-rental.png",
    "badge": "Graduation Thesis",
    "highlights": [
      "Customer, staff, admin, and super admin access with RBAC.",
      "VNPay payments, FPT AI eKYC, and MinIO file storage.",
      "E2EE SDK integration using ECDH, HKDF-SHA256, and AES-256-GCM."
    ],
    "featured": true
  },
  {
    "title": "Zyna E-Commerce Frontend",
    "role": "Frontend Developer",
    "duration": "Nov 25, 2025 - Mar 22, 2026",
    "description": "Responsive customer and admin interfaces for product browsing, shopping cart, checkout, order tracking, product management, and user profiles.",
    "tech": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Axios",
      "Framer Motion"
    ],
    "githubUrl": "https://github.com/AiNga04/Fe-Ecommerce",
    "image": "/projects/ecommerce-fe.png",
    "badge": "Personal Project",
    "highlights": [
      "Role-based dashboards for admin, staff, shipper, and customer.",
      "RESTful API integration and caching with Axios and TanStack Query.",
      "Next.js App Router, SSR, and Zustand for performance and state management."
    ]
  },
  {
    "title": "Zyna E-Commerce Backend",
    "role": "Backend Developer",
    "duration": "Oct 28, 2025 - Present",
    "description": "RESTful APIs for a fashion e-commerce platform using Spring Boot and layered architecture, with modules for products, orders, inventory, vouchers, and shipping.",
    "tech": [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Docker",
      "VNPay API"
    ],
    "githubUrl": "https://github.com/AiNga04/Be-Ecommerce",
    "image": "/projects/ecommerce-be.png",
    "badge": "Personal Project",
    "highlights": [
      "JWT authentication and RBAC with Spring Security.",
      "VNPay payment processing for online transactions.",
      "Redis caching to optimize data retrieval and application performance."
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
    phone: "0376600545",
    address: "Thủ Đức, Viet Nam",
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
