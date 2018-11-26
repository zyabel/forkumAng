import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesPageComponent } from './messages-page.component';
import { MessagesPageRoutingModule } from './messages-page.routing.module';

@NgModule({
  declarations: [
    MessagesPageComponent
  ],
  imports: [
    CommonModule,
    MessagesPageRoutingModule
  ],
  exports: [
    MessagesPageComponent
  ]
})
export class AdminMessagesPageModule { }
