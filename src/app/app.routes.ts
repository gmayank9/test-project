import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/signup/signup.component').then((e) => e.SignupComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/login/login.component').then((e) => e.LoginComponent),
  },
  {
    path: 'index',
    loadComponent: () =>
      import('./index/index.component').then((e) => e.IndexComponent),
  },
 
];
// /Users/mayank.gupta/Desktop/Ecom/exclusive/src/app/signup/signup.component.ts
