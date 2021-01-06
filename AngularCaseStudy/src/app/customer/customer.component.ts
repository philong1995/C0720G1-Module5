import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../model/ICustomer";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerList: ICustomer[];

  constructor( private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(data =>{
      this.customerList = data;
    });
  }
}
