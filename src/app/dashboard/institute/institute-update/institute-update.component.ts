import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';
import { Institute } from 'src/app/instituteDemo';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-institute-update',
  templateUrl: './institute-update.component.html',
  styleUrls: ['./institute-update.component.css'],
})
export class InstituteUpdateComponent implements OnInit {
  // Reference variable of formGroup
  instituteUpdateForm: FormGroup;

  

  // Referenece variable : Institute
  instituteUpdateObj: Institute;

  disabledBtn = true;
  constructor(private stateService: StateService, private fb: FormBuilder) {
    this.instituteUpdateObj = new Institute();

    this.instituteUpdateForm = this.fb.group({
      iname: [null, Validators.required],
      addr1: [null, Validators.required],
      addr2: [null],
      state: [null, Validators.required],
      city: [null, Validators.required],
      pincode: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.instituteUpdateObj.stateArray = this.stateService.getStates();
    this.instituteUpdateObj.cityArray = this.stateService.getCity();
  }

  // disable/enable city
  onChange() {
    this.disabledBtn = false;
  }

  // display fields
  onSubmit() {
    console.log(this.instituteUpdateForm.value);
  }

  get iname() {
    return this.instituteUpdateForm.get('iname');
  }

  get addr1() {
     return this.instituteUpdateForm.get('addr1');
  }

  get addr2() {
    return this.instituteUpdateForm.get('addr2');
  }

  get state() {
    return this.instituteUpdateForm.get('state');
  }

   get city() {
     return this.instituteUpdateForm.get('city');
  }

   get pincode() {
     return this.instituteUpdateForm.get('pincode');
   }
}
