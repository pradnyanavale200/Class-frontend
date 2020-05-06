import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  togglePassword = 'visibility';
  disabledPassword = true;
  typePassword = 'password';

  regsiterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.regsiterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Register Form control
  onSubmit() {
    const value = this.registerData();

    this.auth.register(value).subscribe(
      (res: any) => {
        this.router.navigate(['./auth/login']);
      },
      (err: any) => {
        alert('Error in register');
      }
    );
  }

  registerData() {
    const data = {
      firstName: this.regsiterForm.get('firstName').value,
      lastName: this.regsiterForm.get('lastName').value,
      email: this.regsiterForm.get('email').value,
      password: this.regsiterForm.get('password').value,
    };
    return data;
  }

  // Show/hide password character
  toggle() {
    if (this.disabledPassword === true) {
      this.disabledPassword = false;
      this.togglePassword = 'visibility_off';
      this.typePassword = 'text';
    } else {
      this.disabledPassword = true;
      this.togglePassword = 'visibility';
      this.typePassword = 'password';
    }
  }

  get firstName() {
    return this.regsiterForm.get('firstName');
  }
  get lastName() {
    return this.regsiterForm.get('lastName');
  }

  get email() {
    return this.regsiterForm.get('email');
  }
  get password() {
    return this.regsiterForm.get('password');
  }
}
