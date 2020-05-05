import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituteComponent } from './institute.component';
import { InstituteUpdateComponent } from './institute-update/institute-update.component';


const routes: Routes = [
  {
    path: '',
    component: InstituteComponent,
    children: [
      { path: '', redirectTo: 'update/:ownerId', pathMatch: 'full' },
      { path: 'update/:ownerId', component: InstituteUpdateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteRoutingModule { }
