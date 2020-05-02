import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Institute } from '../instituteDemo';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {

  instituteDemoObj: Institute;

  constructor(private stateService: StateService) {
    this.instituteDemoObj = new Institute();
  }
  ngOnInit(): void {
    this.instituteDemoObj.stateArray = this.stateService.getStates();
    this.instituteDemoObj.cityArray = this.stateService.getCity();
  }

  onSubmit(value){
    console.log(value);
  }

}
