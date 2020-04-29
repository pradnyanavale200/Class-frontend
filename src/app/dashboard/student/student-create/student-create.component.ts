import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  StudregForm: FormGroup;
  Courses: any = ['A', 'B', 'C', 'D'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.StudregForm = this.fb.group({
      FirstName : ['',Validators.required,],
      LastName : ['',Validators.required],
      email : ['',Validators.required],
      fcourse : ['',Validators.required]
    });
  }

  get FirstName() {
    return this.StudregForm.get('FirstName');
  }

  get LastName() {
    return this.StudregForm.get('LastName');
  }

  get email() {
    return this.StudregForm.get('email');
  }

  get fcourse() {
    return this.StudregForm.get('fcourse');
  }

  cancel(){
    this.StudregForm.reset({ FirstName: '', LastName: '', email: '', fcourse: '' });
  }


}

