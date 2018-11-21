import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AdminHomePageComponent } from './home-page.component';

const routes: Routes = [{
  path: '',
  component: AdminHomePageComponent
}];
export const HomePageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
