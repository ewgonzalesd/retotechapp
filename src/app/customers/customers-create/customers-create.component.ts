import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../../controllers/services/customers.service';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.scss']
})
export class CustomersCreateComponent implements OnInit {

  constructor(public customersService: CustomersService) { }

  ngOnInit() {
  }

  registrarCustomer() {
    const data = this.customersService.createCustomers(this.customersService.myForm.value);
    console.log(data);
    this.customersService.myForm.reset();
  }

}
