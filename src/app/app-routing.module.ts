import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './components/home-page/home-page.module#HomePageModule'
  },
  {
    path: 'contacts',
    loadChildren: './components/contacts-page/contacts-page.module#ContactsPageModule'
  },
  {
    path: 'faq',
    loadChildren: './components/faq-page/faq-page.module#FaqPageModule'
  },
  {
    path: 'products',
    loadChildren: './components/product-page/product-page.module#ProductPageModule'
  },
  {
    path: 'services',
    loadChildren: './components/services-page/services-page.module#ServicesPageModule'
  },
  {
    path: 'login',
    loadChildren: './components/login-page/login-page.module#LoginPageModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
