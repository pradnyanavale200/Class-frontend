import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { REGEX } from 'src/app/shared/constants';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  emailExample: '< example > @ < mail >.< com >';
  togglePassword = 'visibility';
  disabledPassword = true;
  typePassword = 'password';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(REGEX.EMAIL)]],
      newPassword: ['', [Validators.required, Validators.pattern(REGEX.PASSWORD)]],
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }
  get newPassword() {
    return this.forgotPasswordForm.get('newPassword');
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

  onClick(){
    const data = {
      email: this.forgotPasswordForm.get('email').value,
      password: this.forgotPasswordForm.get('newPassword').value,
    };
    this.auth.forgotPassword(data).subscribe((res: any) => {
      this.router.navigate(['./auth/login']);
    }, (err: any) => {
      alert('Error in login');
    });

  }


}
