import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ServicesPageComponent } from './services-page.component';

const routes: Routes = [{
  path: '',
  component: ServicesPageComponent
}];
export const ServicesPageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
