import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Institute } from '../instituteDemo';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css'],
})
export class InstituteRegisterComponent implements OnInit {

  // Reference variable of formGroup
  instituteRegisterForm: FormGroup;

  // Reference variable : Institute class
  instituteDemoObj: Institute;

  constructor(private stateService: StateService, private fb: FormBuilder) {
    this.instituteDemoObj = new Institute();

    this.instituteRegisterForm = this.fb.group({
      iname: [null, Validators.required],
      addr1: [null, Validators.required],
      addr2: [null],
      state: [null, Validators.required],
      city: [null, Validators.required],
      pincode: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.instituteDemoObj.stateArray = this.stateService.getStates();
    this.instituteDemoObj.cityArray = this.stateService.getCity();
    }

  // display fields value
  onSubmit() {
    console.log(this.instituteRegisterForm.value);
    }

   get iname() {
    return this.instituteRegisterForm.get('iname');
  }

  get addr1() {
     return this.instituteRegisterForm.get('addr1');
  }

  get addr2() {
    return this.instituteRegisterForm.get('addr2');
  }

  get state() {
    return this.instituteRegisterForm.get('state');
  }

   get city() {
     return this.instituteRegisterForm.get('city');
  }

   get pincode() {
     return this.instituteRegisterForm.get('pincode');
    }
}
