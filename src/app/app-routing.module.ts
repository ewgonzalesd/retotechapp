import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';

// @ts-ignore
const routes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    {
      path: '',
      redirectTo: '/starter',
      pathMatch: 'full'
    },
    {
      path: 'starter',
      component: CustomersListComponent
    },
    {
      path: 'customers',
      loadChildren: './customers/customers.module#CustomersModule'
    },
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
