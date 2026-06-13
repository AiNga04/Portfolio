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
  icon?: string;
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  focus: string;
  coursework: string[];
  focusAreas: string[];
  activities: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export interface Social {
  platform: string;
  url: string;
  description: string;
  icon: string;
  color: string;
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
  education: Education;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  contact: {
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;
    cvUrl: string;
  };
  socials: Social[];
  hobbies: { name: string; icon: string }[];
}
