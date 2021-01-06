import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EmployeeService} from '../../../service/employee/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  public formCreate: FormGroup;

  constructor(
    private employeeService: EmployeeService,
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
    'position': [
      {type: 'required', message: 'Position is not Required'}
    ],
    'salary': [
      {type: 'required', message: 'Salary is not Required'},
      {type: 'pattern', message: 'Salary is not character.'}
    ],
    'degree': [
      {type: 'required', message: 'Degree is not Required'}
    ],
    'division': [
      {type: 'required', message: 'Division is not Required'}
    ]
  };

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('\\D{5,255}'), Validators.maxLength(255), Validators.minLength(5)]],
      dateOfBirth: ['', [Validators.required]],
      idCard: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('(090|091)+([0-9]{7})')]],
      email: ['', [Validators.required, Validators.email]],
      position: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      division: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('^[-+]?[0-9]*[.,]?[0-9]+$')]],
    });
  }

  saveEmployee() {
    if (this.formCreate.invalid) {
      alert('Please enter all fields correctly');
    } else {
      this.employeeService.create(this.formCreate.value).subscribe(data => {
        this.router.navigateByUrl('/employee').then(r => alert('Add new employee successfully.'))
      });
    }
  }
}
