import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/modules/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material.module';
import { CustomersCreateComponent } from './customers-create/customers-create.component';
import {CustomersComponent} from './customers.component';
import {CustomersService} from '../controllers/services/customers.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    CustomersComponent,
    CustomersCreateComponent],
  entryComponents: [
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule{ }
