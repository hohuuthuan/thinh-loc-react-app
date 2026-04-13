export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  category: 'residential' | 'commercial' | 'industrial';
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
