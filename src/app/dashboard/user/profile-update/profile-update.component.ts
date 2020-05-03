import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  profileUpdate: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  mobilenumber: FormControl;

  constructor() { }

  ngOnInit() {

    this.createFormControls();
    this.createForm();

  }

    createFormControls()
    {
     this.firstname = new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]*$')
    ]),
      this.lastname = new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$')
      ]),

      this.email = new FormControl('', [
        Validators.required,
        Validators.pattern('[^@]*@[^ @]*')
      ]),

    this.mobilenumber = new FormControl('', [
      Validators.required,
      Validators.pattern('')
    ]);

    }

    createForm()
    {
      this.profileUpdate = new FormGroup({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        mobilenumber: this.mobilenumber
      });
    }
  }



