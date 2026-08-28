/**
 * Property data model — designed to be directly mappable to a future FastAPI + PostgreSQL REST API.
 * Field names follow snake_case for JSON API compatibility (use a transformer/interceptor
 * when wiring to FastAPI endpoints).
 */

export type PropertyType = 'residential' | 'commercial' | 'land';
export type PriceUnit = 'lakh' | 'crore';
export type AreaUnit = 'sqft' | 'bigha' | 'katha' | 'acre';
export type District =
  | 'Siliguri'
  | 'Bagdogra'
  | 'Matigara'
  | 'Jalpaiguri'
  | 'Falakata'
  | 'Alipurduar'
  | 'Coochbehar'
  | 'Darjeeling'
  | 'Kalimpong'
  | 'Gangtok';

export interface Property {
  /** Unique identifier — matches PostgreSQL UUID primary key */
  id: string;
  title: string;
  location: string;      // Street / locality name
  district: District;
  price: number;
  priceUnit: PriceUnit;
  area: number;
  areaUnit: AreaUnit;
  /** null for commercial/land properties */
  bhk: number | null;
  type: PropertyType;
  /** Relative path (e.g. 'assets/images/foo.jpg') or absolute URL for future CDN */
  imageUrl: string;
  /** SEO-ready alt text — describes the image content for screen readers */
  altText: string;
  isFeatured: boolean;
  /** ISO 8601 date string — ready for Date pipe */
  listedAt: string;
  description: string;
  amenities: string[];
}

/** DTO shape expected from the future FastAPI response */
export interface PropertyApiResponse {
  data: Property[];
  total: number;
  page: number;
  per_page: number;
}
