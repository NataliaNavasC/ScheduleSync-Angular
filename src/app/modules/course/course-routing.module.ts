import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseViewComponent } from './course-view/course-view.component';

const routes: Routes = [
  {
    path:"course",
    component:CourseComponent,
    children:[
      {
          path:"",
          component:CourseListComponent
      },
      {
        path: ':id',
        component:CourseViewComponent
      } 

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
