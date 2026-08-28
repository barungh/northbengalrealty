import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from '../models/property.model';

/**
 * PropertyService — currently uses mock data.
 *
 * FUTURE FASTAPI MIGRATION:
 * Replace `of(MOCK_PROPERTIES)` with `this.http.get<Property[]>('/api/v1/properties')`
 * and inject HttpClient. The method signatures remain identical, so components
 * require zero changes.
 *
 * Example:
 *   constructor(private http: HttpClient) {}
 *   getAll(): Observable<Property[]> {
 *     return this.http.get<Property[]>(`${environment.apiBaseUrl}/properties`);
 *   }
 */
@Injectable({ providedIn: 'root' })
export class PropertyService {
  private readonly properties: Property[] = MOCK_PROPERTIES;

  /** Returns all properties — maps to GET /api/v1/properties */
  getAll(): Observable<Property[]> {
    return of(this.properties);
  }

  /** Returns a single property by ID — maps to GET /api/v1/properties/:id */
  getById(id: string): Observable<Property | undefined> {
    return of(this.properties.find(p => p.id === id));
  }

  /** Returns featured properties — maps to GET /api/v1/properties?featured=true */
  getFeatured(): Observable<Property[]> {
    return of(this.properties.filter(p => p.isFeatured));
  }

  /** Returns the N most recently listed properties */
  getRecent(limit = 5): Observable<Property[]> {
    return of(
      [...this.properties]
        .sort((a, b) => new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime())
        .slice(0, limit)
    );
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Mock data — remove and inject via HttpClient when FastAPI is ready
// ─────────────────────────────────────────────────────────────────────────────
const MOCK_PROPERTIES: Property[] = [
  {
    id: 'nbr-001',
    title: 'Premium 3BHK Apartment with Himalayan View',
    location: 'Sevoke Road, Siliguri',
    district: 'Siliguri',
    price: 68,
    priceUnit: 'lakh',
    area: 1420,
    areaUnit: 'sqft',
    bhk: 3,
    type: 'residential',
    imageUrl: 'assets/images/siliguri-apartment.jpg',
    altText: '3BHK apartment interior in Siliguri with Himalayan mountain views through large windows',
    isFeatured: true,
    listedAt: '2026-08-20T09:00:00Z',
    description: 'Spacious 3BHK apartment on Sevoke Road offering breathtaking Himalayan views. Premium finishes, open kitchen, two covered car parks, 24×7 security.',
    amenities: ['Covered Parking', '24/7 Security', 'Power Backup', 'Lift', 'Rooftop Garden'],
  },
  {
    id: 'nbr-002',
    title: 'Hill-View Land Plot with Clear Title',
    location: 'Upper Sichey, Gangtok',
    district: 'Gangtok',
    price: 42,
    priceUnit: 'lakh',
    area: 8,
    areaUnit: 'katha',
    bhk: null,
    type: 'land',
    imageUrl: 'assets/images/gangtok-land.jpg',
    altText: 'Terraced hill plot for sale in Gangtok, Sikkim, with Kanchenjunga mountain backdrop',
    isFeatured: true,
    listedAt: '2026-08-18T10:30:00Z',
    description: '8-katha terraced plot in Upper Sichey with unobstructed Kanchenjunga views. Title fully cleared. Road access, water & electricity connections available.',
    amenities: ['Road Access', 'Water Connection', 'Electricity Available', 'Clear Title Verified'],
  },
  {
    id: 'nbr-003',
    title: 'Commercial Showroom Space — Airport Corridor',
    location: 'Bagdogra Airport Road, Bagdogra',
    district: 'Bagdogra',
    price: 1.15,
    priceUnit: 'crore',
    area: 2800,
    areaUnit: 'sqft',
    bhk: null,
    type: 'commercial',
    imageUrl: 'assets/images/bagdogra-commercial.jpg',
    altText: 'Modern commercial showroom building on Bagdogra Airport Road, North Bengal',
    isFeatured: true,
    listedAt: '2026-08-15T08:00:00Z',
    description: 'Prime commercial showroom space on the high-traffic airport corridor. Ground floor + mezzanine, glass façade, dedicated parking for 15 vehicles. Ideal for retail, automobile showroom, or hospitality.',
    amenities: ['High Footfall Area', '15 Car Parking', 'Glass Façade', '3-Phase Power', 'Security Camera System'],
  },
  {
    id: 'nbr-004',
    title: 'Fertile Agricultural Land — Terai Belt',
    location: 'Nagrakata Block, Jalpaiguri',
    district: 'Jalpaiguri',
    price: 18,
    priceUnit: 'lakh',
    area: 3,
    areaUnit: 'bigha',
    bhk: null,
    type: 'land',
    imageUrl: 'assets/images/jalpaiguri-farmland.jpg',
    altText: 'Golden paddy agricultural land for sale in Jalpaiguri, North Bengal terai belt',
    isFeatured: false,
    listedAt: '2026-08-22T11:00:00Z',
    description: '3-bigha Class-II registered agricultural land in the Terai belt. Irrigated from canal, dhaor boundary, flat terrain. Legal mutation completed. Ideal for agro or eco-resort development.',
    amenities: ['Canal Irrigation', 'Dhaor Boundary', 'Flat Terrain', 'Mutation Completed', 'Pucca Road Access'],
  },
  {
    id: 'nbr-005',
    title: 'Heritage Stone Cottage with Garden',
    location: 'Deolo Hill Road, Kalimpong',
    district: 'Kalimpong',
    price: 95,
    priceUnit: 'lakh',
    area: 1650,
    areaUnit: 'sqft',
    bhk: 2,
    type: 'residential',
    imageUrl: 'assets/images/kalimpong-villa.jpg',
    altText: '2BHK stone and wood heritage cottage in Kalimpong with mountain view and flower garden',
    isFeatured: false,
    listedAt: '2026-08-10T14:00:00Z',
    description: 'Charming stone-built 2BHK cottage on Deolo Hill Road with a stunning panoramic garden. 120+ year old British-era construction, fully renovated interiors, solar water heater, 1500 sqft landscaped garden.',
    amenities: ['Mountain View', 'Landscaped Garden', 'Solar Water Heater', 'Heritage Architecture', 'Quiet Locality'],
  },
  {
    id: 'nbr-006',
    title: 'Premium Tea Estate Land — Darjeeling Hills',
    location: 'Tukdah, Darjeeling',
    district: 'Darjeeling',
    price: 2.8,
    priceUnit: 'crore',
    area: 12,
    areaUnit: 'acre',
    bhk: null,
    type: 'land',
    imageUrl: 'assets/images/darjeeling-tea-estate.jpg',
    altText: 'Sweeping tea garden estate for sale in Darjeeling hills with Himalayan backdrop and heritage bungalow',
    isFeatured: true,
    listedAt: '2026-08-25T07:00:00Z',
    description: `12-acre prime tea estate in Tukdah with a fully operational heritage planter's bungalow. GTA clearance complete. Kanchenjunga view from every corner. Suitable for boutique hospitality or continued tea cultivation.`,
    amenities: ['GTA Clearance Done', 'Heritage Bungalow', 'Kanchenjunga View', 'Active Tea Cultivation', 'Motor-able Road'],
  },
  {
    id: 'nbr-007',
    title: 'New 2BHK Apartment — Matigara Suburb',
    location: 'Fulbari Gate, Matigara',
    district: 'Matigara',
    price: 38,
    priceUnit: 'lakh',
    area: 920,
    areaUnit: 'sqft',
    bhk: 2,
    type: 'residential',
    imageUrl: 'assets/images/matigara-residential.jpg',
    altText: 'Modern 2BHK apartment building in Matigara suburb of Siliguri, West Bengal',
    isFeatured: false,
    listedAt: '2026-08-28T06:00:00Z',
    description: 'Ready-to-move 2BHK in a gated society at Fulbari Gate. Modular kitchen, vitrified flooring, balcony with garden view. Close to NH31, schools, and hospitals. Bank loan approved project.',
    amenities: ['Ready to Move', 'Bank Approved', 'Gated Society', 'Modular Kitchen', 'Near NH31'],
  },
];
