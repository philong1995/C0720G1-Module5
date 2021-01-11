import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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

    this.getCustomerType();

    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('\\D{5,255}'), Validators.maxLength(255), Validators.minLength(5)]],
      dateOfBirth: ['', [Validators.required]],
      idCard: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('(090|091)+([0-9]{7})')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      customerType: ['', [Validators.required]]
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
