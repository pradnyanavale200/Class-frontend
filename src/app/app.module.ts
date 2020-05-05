import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';
import { CoreModule } from './core/core.module';
import { StateService } from './state.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InstituteRegisterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
