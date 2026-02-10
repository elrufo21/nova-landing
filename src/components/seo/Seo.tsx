import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { SEOProps } from "@/types";
import { SEO_CONFIG } from "@/constants/company";

interface SeoComponentProps extends SEOProps {
  type?: 'website' | 'article';
}

export function Seo({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage,
  type = 'website' 
}: SeoComponentProps) {
  const location = useLocation();

  useEffect(() => {
    // Clean up existing meta tags first
    cleanupMetaTags();

    // Set page title
    const fullTitle = title === SEO_CONFIG.siteName 
      ? title 
      : `${title} | ${SEO_CONFIG.siteName}`;
    document.title = fullTitle;

    // Set or create description meta
    setMetaTag('description', description);
    
    // Set keywords
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Set canonical URL
    const fullCanonical = canonical 
      ? `${SEO_CONFIG.siteUrl}${canonical}`
      : `${SEO_CONFIG.siteUrl}${location.pathname}`;
    setLinkTag('canonical', fullCanonical);

    // Set Open Graph tags
    const fullOgImage = ogImage 
      ? `${SEO_CONFIG.siteUrl}${ogImage}`
      : `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`;

    setMetaProperty('og:type', type);
    setMetaProperty('og:title', fullTitle);
    setMetaProperty('og:description', description);
    setMetaProperty('og:image', fullOgImage);
    setMetaProperty('og:url', fullCanonical);
    setMetaProperty('og:site_name', SEO_CONFIG.siteName);

    // Set Twitter Card tags
    setMetaProperty('twitter:card', 'summary_large_image');
    setMetaProperty('twitter:title', fullTitle);
    setMetaProperty('twitter:description', description);
    setMetaProperty('twitter:image', fullOgImage);

    // Set additional meta tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('author', SEO_CONFIG.siteName);
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
  }, [title, description, keywords, canonical, ogImage, type, location.pathname]);

  return null; // This component doesn't render anything
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
