import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerTypeComponent } from './component/customer/customer-type/customer-type.component';
import { EditCustomerComponent } from './component/customer/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './component/customer/view-customer/view-customer.component';
import { ListEmployeeComponent } from './component/employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './component/employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './component/employee/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './component/employee/view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    HomeComponent,
    CreateCustomerComponent,
    CustomerTypeComponent,
    EditCustomerComponent,
    ViewCustomerComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
