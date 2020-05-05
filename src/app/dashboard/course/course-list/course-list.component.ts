import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  Course = [];
  public instId = ' ';
  public instituteId = ' ';
  disableCourse = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const id = localStorage.getItem('instituteId');
    this.instId = id;
    this.instituteId = id;
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses(this.instId).subscribe(
      (response: any) => {
        this.Course = response.course;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addCourse() {
    this.router.navigate(['./dashboard/course/create']);
  }

  editCourse(courseId) {
    this.router.navigate(['./dashboard/course/update/', courseId]);
  }

  deleteCourse(courseId) {
    this.courseService.deleteCourse(courseId).subscribe(
      (response: any) => {
        this.getCourses();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
