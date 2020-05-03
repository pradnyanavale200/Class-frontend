import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {

  }

  addCourse() {

  }

  editCourse(i) {

  }

  deleteCourse(i) {

  }

}
