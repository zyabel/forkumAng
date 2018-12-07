import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicesPageComponent } from './services-page.component';
import { ServicesPageRoutingModule } from './services-page.routing.module';

import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ServicesPageComponent
  ],
  imports: [
    CommonModule,
    ServicesPageRoutingModule,
    FormsModule,
    TabsModule.forRoot()
  ],
  exports: [
    ServicesPageComponent
  ]
})
export class AdminServicesPageModule { }
