import { Component, OnInit, ElementRef, ViewChild, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../core/services/property.service';
import { Property } from '../../core/models/property.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('track') trackRef!: ElementRef<HTMLDivElement>;
  properties = signal<Property[]>([]);

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getRecent(5).subscribe(props => this.properties.set(props));
  }

  scrollPrev(): void {
    const track = this.trackRef.nativeElement;
    const slideWidth = track.querySelector('.carousel-slide')?.clientWidth ?? 300;
    track.scrollBy({ left: -(slideWidth + 20), behavior: 'smooth' });
  }

  scrollNext(): void {
    const track = this.trackRef.nativeElement;
    const slideWidth = track.querySelector('.carousel-slide')?.clientWidth ?? 300;
    track.scrollBy({ left: slideWidth + 20, behavior: 'smooth' });
  }

  formatPrice(price: number, unit: string): string {
    if (unit === 'crore') {
      return `₹${price} Cr`;
    }
    return `₹${price} L`;
  }

  getTypeBadgeClass(type: string): string {
    const map: Record<string, string> = {
      residential: 'bg-sky-100 text-sky-800',
      commercial: 'bg-amber-100 text-amber-800',
      land: 'bg-green-100 text-green-800',
    };
    return map[type] ?? 'bg-slate-100 text-slate-700';
  }
}
