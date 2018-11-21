import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqPageComponent } from './faq-page.component';

import { FaqPageRoutingModule } from './faq-page-routing.module';

@NgModule({
  declarations: [FaqPageComponent],
  imports: [
    CommonModule,
    FaqPageRoutingModule
  ],
  exports: [
    FaqPageComponent
  ]
})
export class AdminFaqPageModule { }
