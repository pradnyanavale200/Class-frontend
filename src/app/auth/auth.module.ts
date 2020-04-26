import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ConfirmPassComponent } from './confirm-pass/confirm-pass.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ForgotPassComponent, ConfirmPassComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
