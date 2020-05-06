import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { REGEX } from 'src/app/shared/constants';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-pass',
  templateUrl: './confirm-pass.component.html',
  styleUrls: ['./confirm-pass.component.css']
})
export class ConfirmPassComponent implements OnInit {

  confirmPasswordForm: FormGroup;
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
    this.confirmPasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.pattern(REGEX.PASSWORD)]],
      newPassword: ['', [Validators.required, Validators.pattern(REGEX.PASSWORD)]]
    });
  }

  get oldPassword() {
    return this.confirmPasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.confirmPasswordForm.get('newPassword');
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
    const id = localStorage.getItem('ownerId');
    const data = {
      _id:id,
      password: this.confirmPasswordForm.get('oldPassword').value,
      changepassword: this.confirmPasswordForm.get('newPassword').value,
    };
    this.auth.confirmPassword(data).subscribe((res: any) => {
      this.router.navigate(['/dashboard/course/list']);
    }, (err: any) => {
      alert('Error in login');
    });
  }
}
