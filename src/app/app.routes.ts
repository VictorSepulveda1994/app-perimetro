import { Routes } from '@angular/router';

/**
 * Define la configuración de rutas de la aplicación.
 * Este array de rutas mapea URLs a componentes, permitiendo la navegación dentro de la aplicación.
 */
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
