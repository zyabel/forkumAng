import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageComponent } from './product-page.component';
import { ProductPageRoutingModule } from './product-page.routing.module';
import { SpinnerModule } from '../../shared';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    SpinnerModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
