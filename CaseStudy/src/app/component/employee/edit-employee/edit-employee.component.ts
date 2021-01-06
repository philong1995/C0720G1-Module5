import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {EmployeeService} from '../../../service/employee/employee.service';
import {IEmployee} from '../../../model/employee/IEmployee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.editForm = this.formBuilder.group({
      id: '',
      name: '',
      idCard: '',
      dateOfBirth: '',
      phoneNumber: '',
      email: '',
      position: '',
      division: '',
      salary: '',
      degree: ''
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.employeeService.getById(paramMap.get('id')).subscribe((data: IEmployee) => {
        this.editForm.setValue(data);
      });
    });
  }

  update() {
    this.employeeService.update(this.editForm.value.id ,this.editForm.value).subscribe(
      () => this.router.navigateByUrl('employee').then(e => alert('Updated successful!'))
    );
  }
}
