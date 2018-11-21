import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginPageComponent } from './login-page.component';

const routes: Routes = [{
  path: '',
  component: LoginPageComponent
}];
export const LoginPageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
