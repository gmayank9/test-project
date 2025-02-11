import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./../signup/signup.component').then((e) => e.SignupComponent),
  },
];

