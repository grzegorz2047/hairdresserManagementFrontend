import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DlDateTimePickerDateModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
