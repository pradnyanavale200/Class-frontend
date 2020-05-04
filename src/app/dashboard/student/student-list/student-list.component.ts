import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[];
  disablelabel = true;
  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getStudents();
    if (this.students !== undefined) {
      this.disablelabel = false;
    }
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: any) => {
        this.students = response.studentList;
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  deleteStudent(id) {
    this.studentService.deleteStudent(id).subscribe(
      (response: any) => {
        this.getStudents();
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }

  editStudent(id) {
    this.router.navigate(['./dashboard/student/update/' + id]);
  }

  addStudent() {
    this.router.navigate(['/dashboard/student/create']);
  }
}
