import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PropertyService } from '../../core/services/property.service';
import { Property } from '../../core/models/property.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  properties = signal<Property[]>([]);

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getAll().subscribe(props => this.properties.set(props));
  }

  formatPrice(price: number, unit: string): string {
    return unit === 'crore' ? `₹${price} Cr` : `₹${price} L`;
  }

  getTypeBadgeClass(type: string): string {
    const map: Record<string, string> = {
      residential: 'bg-sky-100 text-sky-800',
      commercial: 'bg-amber-100 text-amber-800',
      land: 'bg-green-100 text-green-800',
    };
    return map[type] ?? 'bg-slate-100 text-slate-700';
  }

  shareWhatsApp(property: Property, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const url = `${window.location.origin}/property/${property.id}`;
    const text = `Check out this property — ${property.title} (${this.formatPrice(property.price, property.priceUnit)}) in ${property.district}.\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  shareFacebook(property: Property, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const url = `${window.location.origin}/property/${property.id}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
  }
}
