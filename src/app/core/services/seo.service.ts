import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

/**
 * SeoService — centralises all SEO-related metadata management.
 * Uses Angular's built-in Title + Meta services.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setPageMeta(config: PageMeta): void {
    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: config.ogTitle ?? config.title });
    this.meta.updateTag({ property: 'og:description', content: config.ogDescription ?? config.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });
    this.meta.updateTag({ property: 'og:site_name', content: 'North Bengal Realty' });

    if (config.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: config.ogImage });
    }

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.ogTitle ?? config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });

    // Canonical
    if (config.canonical) {
      let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', config.canonical);
    }
  }

  /** Pre-configured meta for the home page with all target SEO keywords */
  setHomeMeta(): void {
    this.setPageMeta({
      title: 'North Bengal Realty | Clear-Title Land & Property Across North Bengal',
      description:
        'North Bengal Realty — trusted buying, selling, and legal title clearance for commercial & private land across Siliguri, Bagdogra, Matigara, Jalpaiguri, Falakata, Alipurduar & Coochbehar.',
      keywords:
        'North Bengal real estate, buy land in Siliguri, property disputes Kalimpong, Sikkim real estate, Bagdogra commercial land, North Bengal property, land for sale Darjeeling, Jalpaiguri land, Gangtok property, Matigara apartment, Alipurduar land, Coochbehar property, title clearance North Bengal',
      ogTitle: 'North Bengal Realty | Clear-Title Properties & Land',
      ogDescription:
        'Your trusted partner for buying, selling, and legal title clearance across North Bengal & Sikkim. 7 districts. 95%+ dispute resolution success.',
      canonical: 'https://northbengalrealty.in/',
    });
  }

  /** Dynamic meta for individual property detail pages */
  setPropertyMeta(propertyTitle: string, description: string, imageUrl?: string): void {
    this.setPageMeta({
      title: `${propertyTitle} | North Bengal Realty`,
      description,
      keywords:
        'North Bengal real estate, buy property North Bengal, Siliguri land for sale, Darjeeling property, Kalimpong real estate',
      ogTitle: propertyTitle,
      ogDescription: description,
      ogImage: imageUrl,
      canonical: `https://northbengalrealty.in/`,
    });
  }
}
