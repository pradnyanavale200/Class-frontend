import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  togglePassword = 'visibility';
  disabledPassword = true;
  typePassword = 'password';
  constructor() {}

  ngOnInit(): void {}

  onSubmit(value) {
    console.log(value);
  }
  toggle() {
    if (this.disabledPassword == true) {
      this.disabledPassword = false;
      this.togglePassword = 'visibility_off';
      this.typePassword = 'text';

    }
    else {
      this.disabledPassword = true;
      this.togglePassword = 'visibility';
      this.typePassword = 'password';
    }
  }
}
