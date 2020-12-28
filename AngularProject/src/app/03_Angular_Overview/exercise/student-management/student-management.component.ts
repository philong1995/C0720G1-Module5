import { Component, OnInit } from '@angular/core';
import {Student} from '../student/Student';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements OnInit {
  student: Student = {
    id: 1,
    name: 'Long',
    age: 25,
    mark: 10,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
