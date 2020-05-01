import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  list = [ {no: '1'}, {no: '2'}, {no: '3'}, {no: '4'}, {no: '5'}, ];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

}
