import { Component, OnInit } from '@angular/core';
import { Institute } from '../instituteDemo';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { InstituteService } from '../dashboard/institute/services/institute.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css'],
})
export class InstituteRegisterComponent implements OnInit {
  // Reference variable of formGroup
  instituteRegistrationForm: FormGroup;

  // Reference variable : Institute class
  instituteDemoObj: Institute;
  public ownerId = ' ';
  constructor(
    private instituteService: InstituteService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.instituteRegistrationForm = this.fb.group({
      instituteName: [null, Validators.required],
      addressLine1: [null, Validators.required],
      addressLine2: [null],
      state: [null, Validators.required],
      city: [null, Validators.required],
      pincode: [null, Validators.required],
    });
  }

  ngOnInit() {
    const id = localStorage.getItem('ownerId');
    this.ownerId = id;
  }

  get instituteName() {
    return this.instituteRegistrationForm.get('instituteName');
  }

  get addressLine1() {
    return this.instituteRegistrationForm.get('addressLine1');
  }

  get addressLine2() {
    return this.instituteRegistrationForm.get('addressLine2');
  }

  get state() {
    return this.instituteRegistrationForm.get('state');
  }

  get city() {
    return this.instituteRegistrationForm.get('city');
  }

  get pincode() {
    return this.instituteRegistrationForm.get('pincode');
  }

  getInstituteData() {
    return {
      instituteName: this.instituteRegistrationForm.get('instituteName').value,
      instituteAddressLine1: this.instituteRegistrationForm.get('addressLine1')
        .value,
      instituteAddressLine2: this.instituteRegistrationForm.get('addressLine2')
        .value,
      state: this.instituteRegistrationForm.get('state').value,
      city: this.instituteRegistrationForm.get('city').value,
      pincode: this.instituteRegistrationForm.get('pincode').value,
      ownerId: this.ownerId,
    };
  }

  register() {
    const institute = this.getInstituteData();
    this.instituteService.createInstitute(institute).subscribe((response: any) => {
      localStorage.setItem('instituteId', response.institute._id);
      this.router.navigate(['/dashboard/course/list']);
    },
      (error) => {
        this.router.navigate(['/']);
        alert(error.error.message);
      }
    );
  }

  cancel() { }
}
