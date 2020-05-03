import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';
import { Institute } from 'src/app/instituteDemo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-institute-update',
  templateUrl: './institute-update.component.html',
  styleUrls: ['./institute-update.component.css'],
})
export class InstituteUpdateComponent implements OnInit {
  // Referenece variable : Institute
  instituteUpdateObj: Institute;

  disabledBtn = true;
  constructor(private stateService: StateService) {
    this.instituteUpdateObj = new Institute();
  }

  ngOnInit(): void {
    this.instituteUpdateObj.stateArray = this.stateService.getStates();
    this.instituteUpdateObj.cityArray = this.stateService.getCity();
  }

  // disable/enable city
  onChange() {
    this.disabledBtn = false;
  }

  // display fields
  onSubmit(value) {
    console.log(value);
  }
}
