import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'fade',
    loadComponent: () =>
      import('./pages/fade-demo/fade-demo').then(m => m.FadeDemo),
  },
  {
    path: 'slide',
    loadComponent: () =>
      import('./pages/slide-demo/slide-demo').then(m => m.SlideDemo),
  },
  {
    path: 'stagger',
    loadComponent: () =>
      import('./pages/stagger-demo/stagger-demo').then(m => m.StaggerDemo),
  },
  {
    path: 'keyframe',
    loadComponent: () =>
      import('./pages/keyframe-demo/keyframe-demo').then(m => m.KeyframeDemo),
  },
  { path: '**', redirectTo: '' },
];
