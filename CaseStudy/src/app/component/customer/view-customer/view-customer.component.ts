import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../../model/customer/ICustomer';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  public customer: ICustomer;

  public idCustomer: string;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.idCustomer = param.get('id');

      this.customerService.getById(this.idCustomer).subscribe((data: ICustomer) => {
        this.customer = data;
      }, error => console.log(error));
    });

  }
}
