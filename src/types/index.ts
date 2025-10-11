// ============================================
// Tipos para Servicios
// ============================================

export interface Service {
  id: string;
  title: string;
  category: 'fiscal' | 'contable' | 'consultoria' | 'nomina';
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: ProcessStep[];
  pricing: Pricing;
  icon: string;
  featured?: boolean;
  relatedServices?: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Pricing {
  type: 'monthly' | 'project' | 'per-unit' | 'hourly';
  from?: number;
  description: string;
}

// ============================================
// Tipos para WordPress/Blog
// ============================================

export interface WordPressPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage?: FeaturedImage;
  categories: {
    nodes: Category[];
  };
  author: {
    node: Author;
  };
  seo?: SEOData;
}

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
}

export interface Category {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export interface Author {
  name: string;
  avatar: {
    url: string;
  };
  description?: string;
}

export interface SEOData {
  title: string;
  metaDesc: string;
  opengraphImage?: {
    sourceUrl: string;
  };
}

// ============================================
// Tipos para Formularios
// ============================================

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}

// ============================================
// Tipos para Testimonios
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
  location?: string;
}

// ============================================
// Tipos para KPIs/Estadísticas
// ============================================

export interface Stat {
  id: string;
  value: string | number;
  label: string;
  icon?: string;
  suffix?: string;
  prefix?: string;
}

// ============================================
// Tipos para FAQ
// ============================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ============================================
// Tipos para Miembros del Equipo
// ============================================

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}

// ============================================
// Tipos para Navegación
// ============================================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ============================================
// Tipos para SEO
// ============================================

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}