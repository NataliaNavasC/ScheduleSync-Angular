import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSessionComponent } from './student-session.component';
import { StudentSessionListComponent } from './student-session-list/student-session-list.component';
import { StudentSessionViewComponent } from './student-session-view/student-session-view.component';

const routes: Routes = [
  {
    path:"student-session",
    component:StudentSessionComponent,
    children:[
      {
          path:"",
          component:StudentSessionListComponent
      },
      {
        path: ':id',
        component:StudentSessionViewComponent
      } 

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentSessionRoutingModule { }
