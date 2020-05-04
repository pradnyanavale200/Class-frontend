import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  Course = [];
  InstID: any = '5eb029a7bbb56d0acc8a9d04';
  disableCourse = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
    ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses(this.InstID).subscribe((response: any) => {
      this.Course = response.course;
    }, (error) => {
      console.log(error);
    });
  }
  addCourse() {
  this.router.navigate(['./dashboard/course/create']);
  }

  editCourse(courseId) {
    this.router.navigate(['./dashboard/course/update/' + courseId]);
  }

  deleteCourse(courseId) {
    this.courseService.deleteCourse(courseId, this.InstID).subscribe((response: any) => {
      this.getCourses();
    }, (error) => {
      console.log(error);
    });
  }

}
