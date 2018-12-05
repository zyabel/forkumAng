import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminProductPageComponent } from './product-page.component';
import { ProductPageRoutingModule } from './product-page.routing.module';
import { SpinnerModule, CashModule, ModalTableModule, EditModalModule } from '../../../shared';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AdminProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    SpinnerModule,
    CashModule,
    ModalTableModule,
    FormsModule,
    EditModalModule
  ],
  exports: [
    AdminProductPageComponent
  ]
})
export class AdminProductPageModule { }
