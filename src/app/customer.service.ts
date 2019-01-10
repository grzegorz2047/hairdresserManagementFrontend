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

  removeCustomerById(id: number): void {
    let updatedCustomersArr: Customer[] = [];
    let indexToDelete = -1; 
    CUSTOMERS.forEach( (item, index) => {
        if(item.id == id) {
            indexToDelete = index;
            return;
        }
     }
    );
    if(indexToDelete != -1) {
      CUSTOMERS.splice(indexToDelete, 1);
    }else{
      console.log("Nie udalo się usunąć takiego klienta!")
    }

  }

  addNewCustomer(): number {
    let numberOfCustomers = CUSTOMERS.length;
    let lastCustomerId = 0;
    if(numberOfCustomers != 0){
      lastCustomerId = CUSTOMERS[numberOfCustomers-1].id;
    }
    let newCustomerId = lastCustomerId + 1;
    let newCustomer: Customer = {
      id: newCustomerId,
      firstname: 'Empty',
      lastname: 'Empty',
      phoneNumber: '000000000',
      appointment:  new Date(),
      serviceCost: 0 
    };
    CUSTOMERS.push(newCustomer);
    return newCustomer.id;
  } 

  constructor() { }
}
