import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page.routing.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
