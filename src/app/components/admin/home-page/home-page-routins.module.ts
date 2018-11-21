import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent
}];
export const HomePageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
