import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminHomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routins.module';
import { SpinnerModule } from '../../../shared';

import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AdminHomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SpinnerModule,
    FormsModule,
    TabsModule.forRoot()
  ],
  exports: [
    AdminHomePageComponent
  ]
})
export class AdminHomePageModule { }
