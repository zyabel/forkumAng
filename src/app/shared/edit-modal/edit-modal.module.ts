import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditModalComponent } from './edit-modal.component';
import { CashModule } from '../';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    EditModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    TabsModule,
    CashModule
  ],
  exports: [
    EditModalComponent
  ]
})
export class EditModalModule { }
