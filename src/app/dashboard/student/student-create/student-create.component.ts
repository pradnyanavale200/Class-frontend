import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
=======
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
>>>>>>> c539e173feada4d1c2a5073cc2211b295e80daa6
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
<<<<<<< HEAD

  constructor(private fb: FormBuilder) {}
=======


  constructor(private fb: FormBuilder) { }
>>>>>>> c539e173feada4d1c2a5073cc2211b295e80daa6

  ngOnInit() {
    this.studentRegistrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      fcourse: [this.selectedItems, Validators.required],
    });

    this.Courses = [
<<<<<<< HEAD
      { item_id: 1, item_text: 'A' },
      { item_id: 2, item_text: 'B' },
      { item_id: 3, item_text: 'C' },
      { item_id: 4, item_text: 'D' },
    ];

    this.selectedItems = [
      { item_id: 2, item_text: 'B' },
      { item_id: 3, item_text: 'C' },
    ];
=======
      { item_id: 1, item_text: 'A'},
      { item_id: 2, item_text: 'B'},
      { item_id: 3, item_text: 'C'},
      { item_id: 4, item_text: 'D'}
    ];

    this.selectedItems = [{item_id: 2, item_text: 'B'}, {item_id: 3, item_text: 'C'}];
>>>>>>> c539e173feada4d1c2a5073cc2211b295e80daa6

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

  get fcourse() {
    return this.studentRegistrationForm.get('fcourse');
  }

  cancel() {
    this.studentRegistrationForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      fcourse: '',
    });
  }
}
