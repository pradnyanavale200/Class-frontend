import { Institute } from 'src/app/instituteDemo';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../services/institute.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-institute-update',
  templateUrl: './institute-update.component.html',
  styleUrls: ['./institute-update.component.css'],
})
export class InstituteUpdateComponent implements OnInit {
  // Reference variable of formGroup
  instituteUpdateForm: FormGroup;

  public ownerId = ' ';
  public instituteId = ' ';
  disabledBtn = true;
  public institute = {
    instituteName: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    city: '',
    pinCode: '',
  };
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private instituteService: InstituteService
  ) {}

  ngOnInit(): void {
    const id = localStorage.getItem('ownerId');
    this.ownerId = id;
    const data = {
      ownerId: this.ownerId,
    };

    this.instituteService.findInstituteId(data).subscribe(
      (response: any) => {
        this.instituteId = response.institute._id;
        this.setData(response.institute);
      },
      (error) => {
        console.log(error);
      }
    );

    this.instituteUpdateForm = this.fb.group({
      instituteName: [null, Validators.required],
      addressLine1: [null, Validators.required],
      addressLine2: [null],
      state: [null, Validators.required],
      city: [null, Validators.required],
      pincode: [null, Validators.required],
    });
  }

  setData(institute) {
    this.instituteUpdateForm
      .get('instituteName')
      .setValue(institute.instituteName);
    this.instituteUpdateForm
      .get('addressLine1')
      .setValue(institute.instituteAddressLine1);
    this.instituteUpdateForm
      .get('addressLine2')
      .setValue(institute.instituteAddressLine2);
    this.instituteUpdateForm.get('state').setValue(institute.state);
    this.instituteUpdateForm.get('city').setValue(institute.city);
    this.instituteUpdateForm.get('pincode').setValue(institute.pincode);
  }

  get instituteName() {
    return this.instituteUpdateForm.get('instituteName');
  }

  get addressLine1() {
    return this.instituteUpdateForm.get('addressLine1');
  }

  get addressLine2() {
    return this.instituteUpdateForm.get('addressLine2');
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

  update() {
    const data = {
      _id: this.instituteId,
      instituteName: this.instituteUpdateForm.get('instituteName').value,
      instituteAddressLine1: this.instituteUpdateForm.get('addressLine1').value,
      instituteAddressLine2: this.instituteUpdateForm.get('addressLine2').value,
      state: this.instituteUpdateForm.get('state').value,
      city: this.instituteUpdateForm.get('city').value,
      pincode: this.instituteUpdateForm.get('pincode').value,
      ownerId: this.ownerId
    };

    this.instituteService.updateInstitute(data).subscribe(
      (response: any) => {

        this.router.navigate(['/dashboard/course/list']);
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }

  cancel(){
    this.router.navigate(['/dashboard/course/list']);
  }
}
