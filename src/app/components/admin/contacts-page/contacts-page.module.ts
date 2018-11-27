import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ContactsPageComponent } from './contacts-page.component';
import { ContactsPageRoutingModule } from './contacts-page-routing.module';
import { SpinnerModule } from '../../../shared';

@NgModule({
  declarations: [
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    ContactsPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SpinnerModule
  ],
  exports: [
    ContactsPageComponent
  ]
})
export class AdminContactsPageModule { }
