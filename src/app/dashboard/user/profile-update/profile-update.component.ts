import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css'],
})
export class ProfileUpdateComponent implements OnInit {
  profileUpdateform: FormGroup;

  userId = '';
  user = {
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber: '',
  };

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = id;

    this.profileUpdateform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobilenumber: ['', Validators.required],
    });

    this.userService.getUser(this.userId).subscribe(
      (response: any) => {
        this.user = response.user;
        this.setData(response.user);
      },
      (error) => {
        console.log(error);
      }
    );

    this.profileUpdateform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobilenumber: ['', Validators.required],
    });
  }

  setData(student) {
    this.profileUpdateform.get('firstname').setValue(this.user.firstname);
    this.profileUpdateform.get('lastname').setValue(this.user.lastname);
    this.profileUpdateform.get('email').setValue(this.user.email);
    this.profileUpdateform.get('mobilenumber').setValue(this.user.mobilenumber);
  }

  get firstnamevalidate() {
    return this.profileUpdateform.get('firstname');
  }

  get lastnamevalidate() {
    return this.profileUpdateform.get('lastname');
  }

  get emailvalidate() {
    return this.profileUpdateform.get('email');
  }

  get mobilenumbervalidate() {
    return this.profileUpdateform.get('mobilenumber');
  }

  updateStudent() {
    const data = {
      id: this.userId,
      firstname: this.profileUpdateform.get('firstname').value,
      lastname: this.profileUpdateform.get('lastname').value,
      email: this.profileUpdateform.get('email').value,
      mobilenumber: this.profileUpdateform.get('mobilenumber').value,
    };

    this.userService.updateUser(data).subscribe(
      (response: any) => {
        alert(response.message);
        // this.router.navigate(['/dashboard/student/list']);
      },
      (error) => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
}
