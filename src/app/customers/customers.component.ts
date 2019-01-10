import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  customers: Customer[];
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();//Wczytaj dane z serwisu zaraz przy starcie
  }
  
  /*
    zapisz sie do obserwowania danych
    gdy będą, wstaw je do zmiennej customers
    async wow
  */
  getCustomers(): void {
    this.customerService.getCustomers()
    .subscribe(customers => this.customers = customers);
  }
}
