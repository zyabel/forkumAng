import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesPageComponent } from './services-page.component';
import { ServicesPageRoutingModule } from './services-page.routing.module';

import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ServicesPageComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    ServicesPageRoutingModule
  ],
  exports: [
    ServicesPageComponent
  ]
})
export class ServicesPageModule { }
