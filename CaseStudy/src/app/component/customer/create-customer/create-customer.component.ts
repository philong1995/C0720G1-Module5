import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICustomerType} from '../../../model/customer/ICustomerType';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../../service/customer/customer-type.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  public formGroup: FormGroup;
  public customerTypeList: ICustomerType[];
  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  validation_messages = {
    'name': [
      {type: 'required', message: 'Name is not required.'},
      {type: 'minlength', message: 'Name min is 5 words.'},
      {type: 'maxlength', message: 'Name max is 255 words.'},
      {type: 'pattern', message: 'Name is not number.'}
    ],
    'dateOfBirth': [
      {type: 'required', message: 'Date is not required.'}
    ],
    'idCard': [
      {type: 'required', message: 'ID Card is not Required'},
      {type: 'pattern', message: 'ID Card has 9 numbers'},
    ],
    'phoneNumber': [
      {type: 'required', message: 'Phone number is not Required'},
      {type: 'pattern', message: 'Phone number will be start by 091,090'},
    ],
    'email': [
      {type: 'required', message: 'Email is not Required'},
      {type: 'email', message: 'Email Wrong Format'},
    ],
    'address': [
      {type: 'required', message: 'Address is not Required'}
    ],
    'customerType': [
      {type: 'required', message: 'Type Member is not Required'}
    ]
  };

  ngOnInit(): void {
    this.getAllCustomerType();

    this.formGroup = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('\\D{5,255}'), Validators.maxLength(255), Validators.minLength(5)]],
      dateOfBirth: ['', [Validators.required]],
      idCard: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('(090|091)+([0-9]{7})')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      customerType: ['', [Validators.required]]
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe((data: ICustomerType[]) => {
      this.customerTypeList = data;
    }, error => console.log(error));
  }

  saveCustomer() {
    if (this.formGroup.invalid) {
      alert('Please enter all fields correctly');
    } else {
      // Gán lại customer Type
      let check = false;
      for (const e of this.customerTypeList) {
        if (e.id == this.formGroup.value.customerType) {
          this.formGroup.value.customerType = e;
          check = true;
        }
      }
      // Check customerType có tồn tại hay không
      if (check === false) {
        alert('This type do not exist');
        return;
      }
      this.customerService.create(this.formGroup.value).subscribe(data => {
        this.router.navigateByUrl('/customer').then(r => alert('Add new customer successfully.'))
      });
    }
  }
}
