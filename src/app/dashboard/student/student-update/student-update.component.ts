import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  list = [ {no: '1'}, {no: '2'}, {no: '3'}, {no: '4'}, {no: '5'}, ];

  studentupdateform: FormGroup;

  Courses: any = [];
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};

  public studId = ' ';
  public student = {
    firstname: '',
    lastname: '',
    email: '',
    courses: [],
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.studId = id;
    console.log(this.studId);
    const data = {id : this.studId};

    this.studentService.getStudent(this.studId).subscribe((response: any) => {
        this.student = response.student;
        // this.Courses = response.student.
        this.setData(response.student);
        console.log('response : ', response.student);
      }, (error) => {
        console.log(error);
        // alert(error.error.message);
    });

    this.studentupdateform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      courses: [this.selectedItems, Validators.required],
    });

    this.Courses = [
      { item_id: 1, item_text: 'CPP' },
      { item_id: 2, item_text: 'C' },
      { item_id: 3, item_text: 'JAVA' },
      { item_id: 4, item_text: 'PYTHON' },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true,
    };
  }

  setData(student) {
    this.studentupdateform.get('firstname').setValue(this.student.firstname);
    this.studentupdateform.get('lastname').setValue(this.student.lastname);
    this.studentupdateform.get('email').setValue(this.student.email);
    this.studentupdateform.get('courses').setValue(this.student.courses);
  }

  get firstnamevalidate() {
    return this.studentupdateform.get('firstname');
  }

  get lastnamevalidate() {
    return this.studentupdateform.get('lastname');
  }

  get emailvalidate() {
    return this.studentupdateform.get('email');
  }

  get coursesvalidate() {
    return this.studentupdateform.get('courses');
  }

  updateStudent(){
    const data = {
      id : this.studId,
      firstname: this.studentupdateform.get('firstname').value,
      lastname: this.studentupdateform.get('lastname').value,
      email: this.studentupdateform.get('email').value,
      courses: this.studentupdateform.get('courses').value
    };
    console.log(data);

    this.studentService.updateStudent(data).subscribe((response: any) => {
        console.log(response);
        // alert(response.msg);
        this.router.navigate(['/dashboard/student/list']);
      }, (error) => {
        console.log(error);
        alert(error.error.msg);
    });
  }
}
