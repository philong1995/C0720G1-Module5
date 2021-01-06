import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../../model/employee/IEmployee';
import {EmployeeService} from '../../../service/employee/employee.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  employeeList: IEmployee[];
  employeeID: number;
  employee: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(data =>{
      this.employeeList = data;
    });
  }

  getId(id: number) {
    this.employeeID = id;
  }

  delete() {
    this.employeeService.delete(this.employeeID).subscribe(data => {
      this.ngOnInit();
    });
  }

  search (keyword: string)  {
    this.employeeService.searchAll(keyword.toString()).subscribe((data: IEmployee[]) =>{
      this.employeeList = data;
    });
  }

}
