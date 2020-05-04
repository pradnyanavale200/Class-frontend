import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

  courseCreateForm: FormGroup;
  courseId: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseCreateForm = this.fb.group({
      courseName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._,-/]{3,50}')]],
      duration: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      value: ['', Validators.required],
      fees: ['', [Validators.required, Validators.pattern('^[0-9]*')]]
    });
  }

  get courseNameValidate() {
    return this.courseCreateForm.get('courseName');
  }

  get durationValidate() {
    return this.courseCreateForm.get('duration');
  }

  get valueValidate() {
    return this.courseCreateForm.get('value');
  }

  get feesValidate() {
    return this.courseCreateForm.get('fees');
  }

  createCourse(){
    const id = this.route.snapshot.paramMap.get('id');
    this.courseId = id;

    const Institute_id = '5eb029a7bbb56d0acc8a9d04';
    const data = {
      courseName : this.courseCreateForm.get('courseName').value,
      duration : this.courseCreateForm.get('duration').value,
      value : this.courseCreateForm.get('value').value,
      fees : this.courseCreateForm.get('fees').value,
      Institute_id
    };

    this.courseService.courseCreate(data).subscribe((response: any) => {
      this.router.navigate(['./dashboard/course/list']);
    }, (error) => {
      console.log(error);
    });
  }
}
