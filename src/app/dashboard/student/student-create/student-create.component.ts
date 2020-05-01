import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  studentRegistrationForm: FormGroup;
  
  Courses: any = [];
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  selectedItems: any = [];
  dropdownSettings:IDropdownSettings = {};

  
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.studentRegistrationForm = this.fb.group({
      firstName : ['',Validators.required,],
      lastName : ['',Validators.required],
      email : ['',Validators.required],
      fcourse : [this.selectedItems,Validators.required]
    });

    this.Courses = [
      { item_id: 1, item_text: "A"},
      { item_id: 2, item_text: "B"},
      { item_id: 3, item_text: "C"},
      { item_id: 4, item_text: "D"}
    ];

    this.selectedItems = [{item_id: 2, item_text: "B"},{item_id: 3, item_text: "C"}];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
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

  cancel(){
    this.studentRegistrationForm.reset({ firstName: '', lastName: '', email: '', fcourse: '' });
  }


}

