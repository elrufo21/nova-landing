export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  features?: string[];
  href?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: 'equipo-completo' | 'instalacion' | 'mantenimiento' | 'reparacion';
  description?: string;
  image?: string;
  year?: string;
  location?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
