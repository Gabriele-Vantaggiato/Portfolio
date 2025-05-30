import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/home',  pathMatch: 'full'},
  {path: 'home', data: {title: 'Home'}, loadComponent: () => import('./components/hero/hero.component')},
  {path: 'about', data: {title: 'About me'}, loadComponent: () => import('./features/about/about.component')},
  {path: 'contact', data: {title: 'Contact me'}, loadComponent: () => import('./features/contact/contact.component')},
  {path: 'skills', data: {title: 'Skills'}, loadComponent: () => import('./features/skill/skill.component')},
  {path: 'certification', data: {title: 'Certifications'}, loadComponent: () => import('./features/certifications/certifications.component')},
];
