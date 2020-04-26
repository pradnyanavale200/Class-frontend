import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';


@NgModule({
  declarations: [UserComponent, ProfileUpdateComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
