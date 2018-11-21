import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routins.module';
import { SpinnerModule } from '../../../shared';

@NgModule({
  declarations: [
    AdminHomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SpinnerModule
  ],
  exports: [
    AdminHomePageComponent
  ]
})
export class AdminHomePageModule { }
