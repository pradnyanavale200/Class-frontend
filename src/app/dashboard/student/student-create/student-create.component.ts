import { Router } from '@angular/router';
import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent implements OnInit {
  studentRegistrationForm: FormGroup;

  Courses: any = [];
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.studentRegistrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      courses: [this.selectedItems, Validators.required],
    });

    this.Courses = [
      { item_id: 1, item_text: 'CPP' },
      { item_id: 2, item_text: 'C' },
      { item_id: 3, item_text: 'JAVA' },
      { item_id: 4, item_text: 'PYTHON' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true,
    };
  }

  get firstName() {
    return this.studentRegistrationForm.get('firstName');
  }

  get lastName() {
    return this.studentRegistrationForm.get('lastName');
  }

  get email() {
    return this.studentRegistrationForm.get('email');
  }

  get courses() {
    return this.studentRegistrationForm.get('courses');
  }

  cancel() {
    this.studentRegistrationForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      courses: '',
    });
  }

  register() {
    const student = {
      firstname: this.studentRegistrationForm.get('firstName').value,
      lastname: this.studentRegistrationForm.get('lastName').value,
      email: this.studentRegistrationForm.get('email').value,
      courses: this.studentRegistrationForm.get('courses').value,
    };

    this.studentService.createStudent(student).subscribe(
      (response: any) => {
        alert(response.message);
        this.router.navigate(['./dashboard/student/list']);
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
}
