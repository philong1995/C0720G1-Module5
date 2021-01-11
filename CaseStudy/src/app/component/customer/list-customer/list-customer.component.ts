import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../../model/customer/ICustomer';
import {CustomerService} from '../../../service/customer/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customerList: ICustomer[];
  customerID: number;
  customer: string;
  p: any;
  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(data =>{
      this.customerList = data;
    });
  }

  getId(id: number) {
    this.customerID = id;
  }

  delete() {
    this.customerService.delete(this.customerID).subscribe(data => {
      this.ngOnInit();
    });
  }

  search (keyword: string)  {
    this.customerService.searchAll(keyword.toString()).subscribe((data: ICustomer[]) =>{
      this.customerList = data;
    });
  }
}
