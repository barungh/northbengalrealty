import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'North Bengal Realty | Clear-Title Land & Property',
  },
  {
    path: 'property/:id',
    loadComponent: () =>
      import('./features/property-detail/property-detail.component').then(
        m => m.PropertyDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
