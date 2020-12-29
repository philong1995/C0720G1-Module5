import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../student/Student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  @Input()
  student: Student;

  constructor() { }

  ngOnInit(): void {
  }

  setMark(value: number) {
    this.student.mark = value;
  }
}
