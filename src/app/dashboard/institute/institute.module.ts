import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InstituteRoutingModule } from './institute-routing.module';
import { InstituteComponent } from './institute.component';
import { InstituteUpdateComponent } from './institute-update/institute-update.component';


@NgModule({
  declarations: [InstituteComponent, InstituteUpdateComponent],
  imports: [
    CommonModule,
    InstituteRoutingModule,
    FormsModule
  ]
})
export class InstituteModule { }
