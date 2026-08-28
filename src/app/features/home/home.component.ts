import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { RegionsComponent } from '../../shared/regions/regions.component';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { GalleryComponent } from '../../shared/gallery/gallery.component';
import { ServicesSectionComponent } from '../../shared/services-section/services-section.component';
import { WhyUsComponent } from '../../shared/why-us/why-us.component';
import { ContactComponent } from '../../shared/contact/contact.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MobileBottomBarComponent } from '../../shared/mobile-bottom-bar/mobile-bottom-bar.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    RegionsComponent,
    CarouselComponent,
    GalleryComponent,
    ServicesSectionComponent,
    WhyUsComponent,
    ContactComponent,
    FooterComponent,
    MobileBottomBarComponent,
  ],
  template: `
    <app-header />
    <main id="top">
      <app-hero />
      <app-regions />
      <app-carousel />
      <app-gallery />
      <app-services-section />
      <app-why-us />
      <app-contact />
    </main>
    <app-footer />
    <app-mobile-bottom-bar />
  `,
})
export class HomeComponent implements AfterViewInit {
  constructor(private seo: SeoService) {
    this.seo.setHomeMeta();
  }

  ngAfterViewInit(): void {
    // Reveal-on-scroll observer
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  }
}
