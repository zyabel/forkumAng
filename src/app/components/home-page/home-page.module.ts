import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routins.module';
import { SpinnerModule } from '../../shared';

import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CarouselModule.forRoot(),
    SpinnerModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
