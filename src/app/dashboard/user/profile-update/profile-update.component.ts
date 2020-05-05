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
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    this.userId = '5ea6f540002e5e08ec9d000a';

    this.userService.getUser(this.userId).subscribe(
      (response: any) => {
        this.user = response.usersList;
        this.setData(response.usersList);
      },
      (error) => {
        console.log(error);
      }
    );

    this.profileUpdateform = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  setData(student) {
    this.profileUpdateform.get('firstName').setValue(this.user.firstName);
    this.profileUpdateform.get('lastName').setValue(this.user.lastName);
    this.profileUpdateform.get('email').setValue(this.user.email);
  }

  get firstnamevalidate() {
    return this.profileUpdateform.get('firstName');
  }

  get lastnamevalidate() {
    return this.profileUpdateform.get('lastName');
  }

  get emailvalidate() {
    return this.profileUpdateform.get('email');
  }

  updateStudent() {
    const data = {
      _id: this.userId,
      firstName: this.profileUpdateform.get('firstName').value,
      lastName: this.profileUpdateform.get('lastName').value,
      email: this.profileUpdateform.get('email').value,
    };

    //console.log(data);
    alert(data);

    this.userService.updateUser(data).subscribe((response: any) => {
      alert(response.message);
      this.router.navigate(['./dashboard/student/list']);
    }, (error) => {
      console.log(error);
      alert(error.error.message);
    });
  }
}
