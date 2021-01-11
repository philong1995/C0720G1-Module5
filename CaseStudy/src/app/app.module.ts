import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerTypeComponent } from './component/customer/customer-type/customer-type.component';
import { EditCustomerComponent } from './component/customer/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './component/customer/view-customer/view-customer.component';
import { ListEmployeeComponent } from './component/employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './component/employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './component/employee/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './component/employee/view-employee/view-employee.component';
import { ListServiceComponent } from './component/service/list-service/list-service.component';
import { ListContractComponent } from './component/contract/list-contract/list-contract.component';
import { CreateContractComponent } from './component/contract/create-contract/create-contract.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    ListServiceComponent,
    ListContractComponent,
    CreateContractComponent,
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
