import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'home', data: {title: 'HOME.TITLE'}, loadComponent: () => import('./components/hero/hero.component')},
  {path: 'about', data: {title: 'ABOUT_ME.TITLE'}, loadComponent: () => import('./features/about/about.component')},
  {path: 'skills', data: {title: 'SKILLS.TITLE'}, loadComponent: () => import('./features/skill/skill.component')},
  {path: 'certifications', data: {title: 'CERTIFICATIONS.TITLE'}, loadComponent: () => import('./features/certifications/certifications.component')},
  {path: 'experience', data: {title: 'EXPERIENCE.TITLE'}, loadComponent: () => import('./features/experience/experience.component')},
  {path: 'contact', data: {title: 'CONTACT_ME.TITLE'}, loadComponent: () => import('./features/contact/contact.component')},
  {path: '', redirectTo: '/home',  pathMatch: 'full'},
];
