import { Component, OnInit } from '@angular/core';
import {Student} from '../student/Student';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements OnInit {
  studentDetail: Student;
  student: Student[] = [
    {
      id: 1,
      name: 'Bùi Phi Long',
      age: 25,
      mark: 10,
    },
    {
      id: 2,
      name: 'Đỗ Hữu Hưng',
      age: 25,
      mark: 10,
    },
    {
      id: 3,
      name: 'Trần Anh Khoa',
      age: 38,
      mark: 10,
    },
    {
      id: 4,
      name: 'Nguyễn Văn Linh',
      age: 23,
      mark: 10,
    },
    ];

  constructor() { }

  ngOnInit(): void {
  }

  getStudentDetail(student: Student) {
    this.studentDetail = student;
  }
}
