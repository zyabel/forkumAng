import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesPageComponent } from './services-page.component';
import { ServicesPageRoutingModule } from './services-page.routing.module';

@NgModule({
  declarations: [
    ServicesPageComponent
  ],
  imports: [
    CommonModule,
    ServicesPageRoutingModule
  ],
  exports: [
    ServicesPageComponent
  ]
})
export class AdminServicesPageModule { }
