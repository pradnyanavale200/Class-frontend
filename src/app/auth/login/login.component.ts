import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailex: '< example > @ < mail >.< com >';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      firstname : ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      lastname : ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      email : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password : ['', [Validators.required, Validators.pattern('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$')]],
    });
  }



  get firstname() {
    return this.loginForm.get('firstname');
  }

  get lastname() {
    return this.loginForm.get('lastname');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
