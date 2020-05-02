import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ConfirmPassComponent } from './confirm-pass/confirm-pass.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

>>>>>>> c539e173feada4d1c2a5073cc2211b295e80daa6

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ForgotPassComponent, ConfirmPassComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    ReactiveFormsModule,
>>>>>>> c539e173feada4d1c2a5073cc2211b295e80daa6
  ]
})
export class AuthModule { }
