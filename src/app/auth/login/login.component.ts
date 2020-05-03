import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { REGEX } from 'src/app/shared/constants';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.pattern(REGEX.EMAIL)]],
      password : ['', [Validators.required, Validators.pattern(REGEX.PASSWORD)]],
    });
  }

  loginData() {
    const loginDataValue = {
      email : this.loginForm.get('email').value,
      password : this.loginForm.get('password').value,
    };
    return loginDataValue;
  }

  onLoginClick() {

    const data = this.loginData();
    this.auth.login(data).subscribe((res: any) => {

      this.router.navigate(['./dashboard/institute']);
    }, (err: any) => {
      alert('Error in login');
    });
  }

  onRegisterClick() {
    this.router.navigate(['./auth/register']);
  }


  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
