import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  // Dummy variable[]
  Course = [
    {
      name: 'Angular'
    }
  ];

  disableCourse = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  addCourse() {
    this.router.navigate(['/dashboard/course/create']);
  }

  editCourse(i) {
    this.router.navigate(['/dashboard/course/update']);
  }

  deleteCourse(i) {}
}
