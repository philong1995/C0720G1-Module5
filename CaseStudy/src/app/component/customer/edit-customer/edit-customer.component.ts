import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ICustomer} from '../../../model/customer/ICustomer';
import {ICustomerType} from '../../../model/customer/ICustomerType';
import {CustomerTypeService} from '../../../service/customer/customer-type.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit{

  editForm: FormGroup;

  customerTypeList: ICustomerType[];

  customerTypeId: number;

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.getCustomerType();

    this.editForm = this.formBuilder.group({
      id: '',
      name: '',
      idCard: '',
      dateOfBirth: '',
      phoneNumber: '',
      email: '',
      address: '',
      customerType: ''
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.customerService.getById(paramMap.get('id')).subscribe((data: ICustomer) => {
        this.editForm.setValue(data);
        this.customerTypeId = data.customerType.id;
      });
    });
  }

  getCustomerType() {
    this.customerTypeService.getAll().subscribe((data: ICustomerType[]) => this.customerTypeList = data, error => console.log(error));
  }

  update() {

    for (const e of this.customerTypeList) {
      if (e.id == this.editForm.value.customerType) {
        this.editForm.value.customerType = e;
        break;
      }
    }

    this.customerService.update(this.editForm.value.id ,this.editForm.value).subscribe(
      () => this.router.navigateByUrl('customer').then(e => alert('Updated successful!'))
    );
  }
}
