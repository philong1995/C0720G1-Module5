import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './component/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './component/customer/edit-customer/edit-customer.component';
import {ViewCustomerComponent} from './component/customer/view-customer/view-customer.component';
import {ListEmployeeComponent} from './component/employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './component/employee/create-employee/create-employee.component';
import {ViewEmployeeComponent} from './component/employee/view-employee/view-employee.component';
import {EditEmployeeComponent} from './component/employee/edit-employee/edit-employee.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'customer',
    component: ListCustomerComponent
  },
  {
    path: 'customer/create',
    component: CreateCustomerComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  },
  {
    path: 'customer/view/:id',
    component: ViewCustomerComponent
  },
  {
    path: 'employee',
    component: ListEmployeeComponent
  },
  {
    path: 'employee/create',
    component: CreateEmployeeComponent
  },
  {
    path: 'employee/view/:id',
    component: ViewEmployeeComponent
  },
  {
    path: 'employee/edit/:id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
