import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  /*
    Zakladam (tut zakłada xd) tutaj, że kiedyś będzie pobierane skądś,
    ale nie z mocków
    Bo async i żeby nie blokować wczytywanie strony
    powinno się robić obserwowalne
  */
  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

  getCustomer(id: number): Observable<Customer> {
    return of(CUSTOMERS.find(customer => customer.id === id));
  }

  constructor() { }
}
