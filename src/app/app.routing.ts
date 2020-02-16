import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './shared/home-layout/home-layout.component';


export const rootRouterConfig: Routes = [
  {
    path: '', 
    component: HomeLayoutComponent,
    canActivate: [],
    children: [
      {
      path: '', 
      loadChildren: () => import('./views/index/index.module').then(m => m.IndexModule),
      data: { title: 'Admin'} 
      }
    ]


  }
];

