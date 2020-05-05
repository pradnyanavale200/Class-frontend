import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { CourseCreateComponent } from './course-create/course-create.component';


const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      { path: '', redirectTo: 'list/:instituteId', pathMatch: 'full' },
      { path: 'list/:instituteId', component: CourseListComponent },
      { path: 'update/:id/:instituteId', component: CourseUpdateComponent },
      { path: 'create/:instituteId', component: CourseCreateComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
