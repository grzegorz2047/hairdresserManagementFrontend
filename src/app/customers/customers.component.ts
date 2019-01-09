import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'
import { CUSTOMERS } from '../mock-customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  customers = CUSTOMERS;
  // customer: Customer = {
  //   id: 1,
  //   firstname: 'Jan',
  //   lastname: 'Kowalski',
  //   phoneNumber: '693785343',
  //   appointment:  new Date()

  // };
  selectedCustomer: Customer;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }


}
