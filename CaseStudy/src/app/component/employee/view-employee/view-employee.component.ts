import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../../model/employee/IEmployee';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../../../service/employee/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  public employee: IEmployee;

  public idEmployee: string;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.idEmployee = param.get('id');

      this.employeeService.getById(this.idEmployee).subscribe((data: IEmployee) => {
        this.employee = data;
      }, error => console.log(error));
    });
  }
}
