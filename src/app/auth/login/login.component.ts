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

    const data1 = this.loginData();
    this.auth.login(data1).subscribe((res: any) => {
      const data = {
        email: data1.email
      };
      console.log(data)
      this.auth.findIdByEmail(data).subscribe(( res: any) => {
        const ownerId = res.user._id;
        console.log(res.user._id)
        this.router.navigate(['/new-insitute', ownerId]);
      }, (err: any) => {
        alert('Error in Id');
      });

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
