import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { REGEX } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailExample: '< example > @ < mail >.< com >';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      // firstName : ['', [Validators.required, Validators.pattern(REGEX.NAME)]],
      // lastName : ['', [Validators.required, Validators.pattern(REGEX.NAME)]],
      email : ['', [Validators.required, Validators.pattern(REGEX.EMAIL)]],
      password : ['', [Validators.required, Validators.pattern(REGEX.PASSWORD)]],
    });
  }

  onLoginClick() {
    // Code is left here. Under development
  }

  // get firstName() {
  //   return this.loginForm.get('firstName');
  // }

  // get lastName() {
  //   return this.loginForm.get('lastName');
  // }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
