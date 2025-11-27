export interface Project {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  details: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  title: string;
  date: string;
}

export interface Patent {
  title: string;
  id: string;
  year: string;
}

export interface Publication {
  title: string;
  journal: string;
  date: string;
}