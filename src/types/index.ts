export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Styling" | "Other Skills";
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export interface CVData {
  name: string;
  title: string;
  roles: string[];
  tagline: string;
  avatar: string;
  about: {
    summary: string;
    strengths: string[];
    goal: string;
  };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    cvUrl: string;
  };
}
