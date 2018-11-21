import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { FaqPageComponent } from './faq-page.component';

const routes: Routes = [{
  path: '',
  component: FaqPageComponent
}];
export const FaqPageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
