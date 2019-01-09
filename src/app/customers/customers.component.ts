import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  customer: Customer = {
    id: 1,
    firstname: 'Jan',
    lastname: 'Kowalski',
    phoneNumber: '693785343',
    appointment:  new Date()

  };
  
  constructor() { }

  ngOnInit() {
  }


}
