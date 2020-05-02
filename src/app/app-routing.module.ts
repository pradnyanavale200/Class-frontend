import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'new-insitute', component: InstituteRegisterComponent },
  { path: 'auth', loadChildren: () => import(`src/app/auth/auth.module`).then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import(`src/app/dashboard/dashboard.module`).then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
