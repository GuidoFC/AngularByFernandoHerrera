import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gift/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gift/pages/trending-page/trending-page.component')
      },
      {
        path: 'search',
        loadComponent: () => import('./gift/pages/search-page/search-page.component')
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
