import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Customer } from '../customers/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class PaginationComponent implements OnInit {
  title: "Customer List: Paged with Sorting";
  errorMessage: string;
  customers: Customer[];

  sortOptions = ["Balance", "Company", "Last Name"]
  message = "Sort by...";

  page: number = 1;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers,
        error => this.errorMessage = <any>error);
  }

  changeMessage(selectedItem: string){
    this.message = "Sort by " + selectedItem;
  }

}
