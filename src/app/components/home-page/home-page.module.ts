import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routins.module';
import { SpinnerComponent } from '../../shared';

import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    HomePageComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CarouselModule.forRoot()
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
