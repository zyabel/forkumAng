import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AdminProductPageComponent } from './product-page.component';

const routes: Routes = [{
  path: '',
  component: AdminProductPageComponent
}];
export const ProductPageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
