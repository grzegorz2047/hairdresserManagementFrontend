import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customer: Customer;

  constructor(
    private route: ActivatedRoute,//info o routingu do tutaj
    private customerService: CustomerService,
    private location: Location // potrzebne do nawigacji wstecz
  ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    //+ konwertuje string na liczbe
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
      .subscribe(customer => this.customer = customer)
  }

  goToPreviousSite(): void {
    this.location.back();
  }

}
