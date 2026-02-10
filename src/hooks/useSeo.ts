import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface UseSeoOptions {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: 'website' | 'article';
}

export function useSeo(options: UseSeoOptions) {
  const location = useLocation();

  useEffect(() => {
    // Default SEO configuration
    const defaultConfig = {
      siteName: 'NOVA ASCENSORES E.I.R.L.',
      siteUrl: 'https://www.novaascensores.com',
      defaultImage: '/og-image.jpg',
      defaultKeywords: 'ascensores perú, fabricación de ascensores, instalación de ascensores, mantenimiento de ascensores, nova ascensores, transporte vertical'
    };

    // Clean up existing meta tags first
    cleanupMetaTags();

    // Set page title
    const fullTitle = options.title === defaultConfig.siteName 
      ? options.title 
      : `${options.title} | ${defaultConfig.siteName}`;
    document.title = fullTitle;

    // Set or create description meta
    if (options.description) {
      setMetaTag('description', options.description);
    }
    
    // Set keywords
    const keywords = options.keywords || defaultConfig.defaultKeywords;
    setMetaTag('keywords', keywords);

    // Set canonical URL
    const fullCanonical = options.canonical 
      ? `${defaultConfig.siteUrl}${options.canonical}`
      : `${defaultConfig.siteUrl}${location.pathname}`;
    setLinkTag('canonical', fullCanonical);

    // Set Open Graph tags
    const fullOgImage = options.ogImage 
      ? `${defaultConfig.siteUrl}${options.ogImage}`
      : `${defaultConfig.siteUrl}${defaultConfig.defaultImage}`;

    setMetaProperty('og:type', options.type || 'website');
    setMetaProperty('og:title', fullTitle);
    setMetaProperty('og:description', options.description || '');
    setMetaProperty('og:image', fullOgImage);
    setMetaProperty('og:url', fullCanonical);
    setMetaProperty('og:site_name', defaultConfig.siteName);

    // Set Twitter Card tags
    setMetaProperty('twitter:card', 'summary_large_image');
    setMetaProperty('twitter:title', fullTitle);
    setMetaProperty('twitter:description', options.description || '');
    setMetaProperty('twitter:image', fullOgImage);

    // Set additional meta tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', defaultConfig.siteName);
    setMetaTag('language', 'es');
    setMetaTag('geo.region', 'PE');
    setMetaTag('geo.placename', 'Perú');

    // Set favicon
    setLinkTag('icon', '/favicon.svg', 'image/svg+xml');
    setLinkTag('icon', '/favicon.png', 'image/png');

    // Cleanup function
    return () => {
      cleanupMetaTags();
    };
  }, [options, location.pathname]);
}

// Helper functions
function setMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function setMetaProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function setLinkTag(rel: string, href: string, type?: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    if (type) {
      link.type = type;
    }
    document.head.appendChild(link);
  }
  link.href = href;
}

function cleanupMetaTags() {
  // Remove meta tags that we manage
  const metaTags = [
    'meta[name="description"]',
    'meta[name="keywords"]',
    'meta[name="robots"]',
    'meta[name="author"]',
    'meta[name="language"]',
    'meta[name="geo.region"]',
    'meta[name="geo.placename"]',
    'meta[property^="og:"]',
    'meta[property^="twitter:"]'
  ];

  metaTags.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => el.remove());
  });

  // Remove link tags that we manage
  const linkTags = [
    'link[rel="canonical"]',
    'link[rel="icon"]'
  ];

  linkTags.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => el.remove());
  });
}
