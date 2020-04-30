import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {

  courseUpdateForm: FormGroup;
  public courseId = ' ';
  public course = {
    courseName: '',
    duration: '',
    value: '',
    fees: ''
  };
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.courseId = id;

    const data = {id : this.courseId};

    this.http.post('http://localhost:3000/dashboard/course/data', data).subscribe((response: any) => {
      this.course = response.course;
      this.setData(this.course);
    }, (error) => {
      console.log(error);
    });
    this.courseUpdateForm = this.fb.group({
      courseName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._,-/]{3,50}')]],
      duration: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      value: ['', Validators.required],
      fees: ['', [Validators.required, Validators.pattern('[0-9]')]]
    });
  }

  setData(course) {
    this.courseUpdateForm.get('courseName').setValue(this.course.courseName);
    this.courseUpdateForm.get('duration').setValue(this.course.duration);
    this.courseUpdateForm.get('value').setValue(this.course.value);
    this.courseUpdateForm.get('fees').setValue(this.course.fees);
  }

  get courseNameValidate() {
    return this.courseUpdateForm.get('courseName');
  }

  get durationValidate() {
    return this.courseUpdateForm.get('duration');
  }

  get valueValidate() {
    return this.courseUpdateForm.get('value');
  }

  get feesValidate() {
    return this.courseUpdateForm.get('fees');
  }

  updateCourse(){
    const data = {
      id : this.courseId,
      courseName : this.courseUpdateForm.get('courseName').value,
      duration : this.courseUpdateForm.get('duration').value,
      value : this.courseUpdateForm.get('value').value,
      fees : this.courseUpdateForm.get('fees').value
    };

    this.http.post('http://localhost:3000/dashboard/course/update', data).subscribe((response: any) => {
      this.router.navigate(['../../list']);
    }, (error) => {
      console.log(error);
    });
  }
}
