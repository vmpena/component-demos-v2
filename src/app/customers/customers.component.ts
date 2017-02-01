import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Customer } from './customer'
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CustomersComponent implements OnInit {

  title: "Customer List";
  errorMessage: string;
  customers: Customer[];

  page: number = 1;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers,
        error => this.errorMessage = <any>error);

    // console.log("total customers: " + this.customers.length);
  }


}
