import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ContactsPageComponent } from './contacts-page.component';
import { ContactsPageRoutingModule } from './contacts-page-routing.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    ContactsPageRoutingModule,
    LeafletModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactsPageComponent
  ]
})
export class ContactsPageModule { }
