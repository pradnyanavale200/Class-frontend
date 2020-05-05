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
  togglePassword = 'visibility';
  disabledPassword = true;
  typePassword = 'password';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(REGEX.EMAIL)]],
      password: ['', [Validators.required, Validators.pattern(REGEX.PASSWORD)]],
    });
  }

  loginData() {
    const loginDataValue = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };
    return loginDataValue;
  }

  onLoginClick() {
    this.auth.login(this.loginData()).subscribe((res: any) => {
      const ownerId = res.user._id;
      localStorage.setItem('ownerId', ownerId);
      if (res.institute) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/new-insitute']);
      }
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

  toggle() {
    if (this.disabledPassword == true) {
      this.disabledPassword = false;
      this.togglePassword = 'visibility_off';
      this.typePassword = 'text';
    } else {
      this.disabledPassword = true;
      this.togglePassword = 'visibility';
      this.typePassword = 'password';
    }
  }

}
