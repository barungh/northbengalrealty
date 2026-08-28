import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../core/services/property.service';
import { SeoService } from '../../core/services/seo.service';
import { Property } from '../../core/models/property.model';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MobileBottomBarComponent } from '../../shared/mobile-bottom-bar/mobile-bottom-bar.component';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, MobileBottomBarComponent],
  templateUrl: './property-detail.component.html',
})
export class PropertyDetailComponent implements OnInit {
  property = signal<Property | undefined>(undefined);
  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private seo: SeoService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.propertyService.getById(id).subscribe(p => {
      this.property.set(p);
      this.loading.set(false);
      if (p) {
        this.seo.setPropertyMeta(p.title, p.description, p.imageUrl);
      }
    });
  }

  formatPrice(price: number, unit: string): string {
    return unit === 'crore' ? `₹${price} Crore` : `₹${price} Lakh`;
  }

  shareWhatsApp(): void {
    const p = this.property();
    if (!p) return;
    const text = `Property enquiry: ${p.title}\n${p.location}, ${p.district}\n${this.formatPrice(p.price, p.priceUnit)}\nArea: ${p.area} ${p.areaUnit}${p.bhk ? ', ' + p.bhk + ' BHK' : ''}\n\nI'm interested in this property. Please provide more details.`;
    window.open(`https://wa.me/916297063622?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }
}
