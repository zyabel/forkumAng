import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ContactsPageComponent } from './contacts-page.component';

const routes: Routes = [{
  path: '',
  component: ContactsPageComponent
}];
export const ContactsPageRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
