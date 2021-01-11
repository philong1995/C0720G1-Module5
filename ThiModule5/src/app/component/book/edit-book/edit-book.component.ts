import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICustomer} from '../../../model/ICustomer';
import {BookService} from '../../../service/book.service';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IBook} from '../../../model/IBook';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  editForm: FormGroup;

  customerList: ICustomer[];

  customerId: number;

  constructor(
    private bookService: BookService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  validation_messages = {
    'customer': [
      {type: 'required', message: 'Name is not required.'}
    ],
    'startDate': [
      {type: 'required', message: 'Date is not required.'},
      {type: 'pattern', message: 'Date is not correct.'}
    ],
    'startTime': [
      {type: 'required', message: 'Date is not Required'},
      {type: 'pattern', message: 'Date is not correct.'},
    ],
    'exp': [
      {type: 'required', message: 'Exp is not Required'},
    ],
    'money': [
      {type: 'required', message: 'Money is not Required'},
      {type: 'min', message: 'Money min is 10.000.000'},
      {type: 'pattern', message: 'Money dont have character '}
    ],
    'xMoney': [
      {type: 'required', message: 'xMoney is not Required'},
      {type: 'pattern', message: 'xMoney is not correct x%/year'}
    ],
    'bonus': [
      {type: 'required', message: 'Bonus is not Required'}
    ]
  };

  ngOnInit(): void {

    this.getCustomer();

    this.editForm = this.formBuilder.group({
      id: '',
      startDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      exp: ['', [Validators.required]],
      money: ['', [Validators.required, Validators.min(10000000), Validators.pattern('^[-+]?[0-9]*[.,]?[0-9]+$')]],
      xMoney: ['', [Validators.required, Validators.pattern('[0-9](%/year)')]],
      bonus: ['', [Validators.required]],
      customer: ['',[Validators.required]]
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.bookService.getById(paramMap.get('id')).subscribe((data: IBook) => {
        this.editForm.setValue(data);
        this.customerId = data.customer.id;
      });
    });
  }

  getCustomer() {
    this.customerService.getAll().subscribe((data: ICustomer[]) => this.customerList = data, error => console.log(error));
  }

  update() {
    for (const e of this.customerList) {
      if (e.id == this.editForm.value.customer) {
        this.editForm.value.customer = e;
        break;
      }
    }

    if (this.editForm.invalid) {
      alert('Please enter all fields correctly');
    } else {
      this.bookService.update(this.editForm.value.id ,this.editForm.value).subscribe(data => {
        this.router.navigateByUrl('/book').then(r => alert('Edit book successfully.'))
      });
    }
  }
}
