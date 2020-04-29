import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {

  name: string;
  addrLine1: string;
  addrLine2: string;
  state = { id: -1, name: ''};
  city = '';
  pincode: number;

  stateArray = [
      { id: 0, state: 'Maharashtra'},
      { id: 1, state: 'Tamil Nadu' },
      { id: 2, state: 'Rajasthan'}
  ];

  cityArray = [
    { id: 0, city: ['Pune', 'Mumbai', 'Nagpur', 'Thane', 'Pimpri'] },
    { id: 1, city: ['Chennai', 'Coimbatore', 'Vellore', 'Tiruvannamalai'] },
    { id: 2, city: ['Jaipur', 'Jodhpur' , 'Kota', 'Ajmer', 'Udaipur']}
  ];


  disabledcity = true;


  constructor() { }

  ngOnInit(): void { }

  onchange() {
    console.log("hello");
    console.log(this.state.id);
    if (this.state.id == -1) {
      this.disabledcity = true;
    }
    else {
      this.disabledcity = false;
    }
  }
  onSubmit(value){
    console.log(value);
  }

}
