import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MessagesPageComponent } from './messages-page.component';

const routes: Routes = [{
  path: '',
  component: MessagesPageComponent
}];
export const MessagesPageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
