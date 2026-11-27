import { Property } from '../models/property.model';

type Priced = Pick<Property, 'price' | 'priceUnit' | 'priceOnRequest'>;

/** Single source for price labels across cards, detail page and share text. */
export function formatPrice(p: Priced, style: 'short' | 'long' = 'short'): string {
  if (p.priceOnRequest) {
    return 'Price on Request';
  }
  if (style === 'long') {
    return p.priceUnit === 'crore' ? `₹${p.price} Crore` : `₹${p.price} Lakh`;
  }
  return p.priceUnit === 'crore' ? `₹${p.price} Cr` : `₹${p.price} L`;
}
