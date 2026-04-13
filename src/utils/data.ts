import type { Service, Project, Testimonial, BlogPost, WorkflowStep, Stat } from '../types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Residential Construction',
    description: 'Premium home construction services with attention to detail and quality craftsmanship for lasting value.',
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Commercial Construction',
    description: 'Large-scale commercial projects delivered on time and within budget with professional expertise.',
    icon: '🏢',
  },
  {
    id: 3,
    title: 'Industrial Projects',
    description: 'Specialized industrial construction for manufacturing facilities and infrastructure development.',
    icon: '🏭',
  },
  {
    id: 4,
    title: 'Architecture Design',
    description: 'Innovative architectural designs that balance aesthetics, functionality, and sustainability.',
    icon: '📐',
  },
  {
    id: 5,
    title: 'Renovation Services',
    description: 'Professional renovation services to modernize and enhance existing structures.',
    icon: '🔧',
  },
  {
    id: 6,
    title: 'Project Management',
    description: 'Expert project management ensuring timely delivery and exceptional quality standards.',
    icon: '📊',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Modern Office Complex',
    location: 'Downtown City Center',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    category: 'commercial',
    description: 'A state-of-the-art office complex with sustainable design features.',
  },
  {
    id: 2,
    title: 'Luxury Residential',
    location: 'Beachfront Area',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f7c6e7ce?w=800&h=600&fit=crop',
    category: 'residential',
    description: 'Luxury beachfront homes with premium finishes and modern architecture.',
  },
  {
    id: 3,
    title: 'Industrial Warehouse',
    location: 'Logistics District',
    image: 'https://images.unsplash.com/photo-1504328213606-18bbc8c9d7d1?w=800&h=600&fit=crop',
    category: 'industrial',
    description: 'Modern warehouse facility with advanced logistics infrastructure.',
  },
  {
    id: 4,
    title: 'Shopping Center',
    location: 'Suburb Plaza',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    category: 'commercial',
    description: 'Multi-level shopping center with modern retail facilities.',
  },
  {
    id: 5,
    title: 'Residential Community',
    location: 'Peaceful Neighborhood',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    category: 'residential',
    description: 'Community housing development with parks and amenities.',
  },
  {
    id: 6,
    title: 'Manufacturing Plant',
    location: 'Industrial Zone',
    image: 'https://images.unsplash.com/photo-1513215311855-4f94ce7ce183?w=800&h=600&fit=crop',
    category: 'industrial',
    description: 'High-tech manufacturing facility with cutting-edge systems.',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Initial meeting to understand your vision and project requirements.',
    icon: '💬',
  },
  {
    id: 2,
    title: 'Planning',
    description: 'Detailed planning and design development for your project.',
    icon: '📋',
  },
  {
    id: 3,
    title: 'Contract',
    description: 'Formal agreement with transparent terms and pricing.',
    icon: '📝',
  },
  {
    id: 4,
    title: 'Construction',
    description: 'Expert execution with regular updates and quality checks.',
    icon: '👷',
  },
  {
    id: 5,
    title: 'Handover',
    description: 'Project completion and handover with full support.',
    icon: '✅',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'Outstanding work! The team exceeded our expectations and delivered a beautiful, functional space on time and within budget.',
    author: 'Sarah Johnson',
    role: 'Real Estate Developer',
    avatar: '👩‍💼',
  },
  {
    id: 2,
    quote: 'Professional, reliable, and meticulous attention to detail. We will definitely work with them again on future projects.',
    author: 'Michael Chen',
    role: 'Corporate Manager',
    avatar: '👨‍💼',
  },
  {
    id: 3,
    quote: 'The team brought our vision to life with exceptional craftsmanship and innovative solutions. Highly recommended!',
    author: 'Emma Williams',
    role: 'Homeowner',
    avatar: '👩',
  },
  {
    id: 4,
    quote: 'Expert management and skilled workers. They handled our complex industrial project flawlessly from start to finish.',
    author: 'Robert Martinez',
    role: 'Factory Owner',
    avatar: '👨‍🔧',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Sustainable Building Practices in Modern Construction',
    excerpt: 'Explore the latest eco-friendly building techniques that reduce environmental impact.',
    image: 'https://images.unsplash.com/photo-1452860908935-57ecc72f00b0?w=400&h=300&fit=crop',
    date: '2024-04-10',
    category: 'Sustainability',
  },
  {
    id: 2,
    title: 'The Future of Smart Buildings',
    excerpt: 'Discover how IoT and AI are transforming commercial construction and building management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    date: '2024-04-08',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Safety Standards in Modern Construction Sites',
    excerpt: 'Learn about the latest safety protocols and standards ensuring worker protection.',
    image: 'https://images.unsplash.com/photo-1504328213606-18bbc8c9d7d1?w=400&h=300&fit=crop',
    date: '2024-04-05',
    category: 'Safety',
  },
];

export const STATS: Stat[] = [
  { label: 'Years of Experience', value: 25, suffix: '+' },
  { label: 'Completed Projects', value: 150, suffix: '+' },
  { label: 'Team Members', value: 85, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
];

export const PARTNERS = [
  { name: 'BuildTech', logo: '🏗️' },
  { name: 'SafeConstruct', logo: '🛡️' },
  { name: 'GreenBuild', logo: '🌱' },
  { name: 'ProDesign', logo: '🎨' },
  { name: 'SmartSystems', logo: '📱' },
  { name: 'Quality Certified', logo: '✨' },
];
