import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProductPageComponent } from './product-page.component';

const routes: Routes = [{
  path: '',
  component: ProductPageComponent
}];
export const ProductPageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
