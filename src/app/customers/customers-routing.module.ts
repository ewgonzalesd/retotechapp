import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomersComponent} from './customers.component';
import {CustomersCreateComponent} from './customers-create/customers-create.component';

const customersRoutes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {path: 'create', component: CustomersCreateComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CustomersRoutingModule {
}
