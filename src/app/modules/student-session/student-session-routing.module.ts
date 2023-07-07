import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSessionComponent } from './student-session.component';
import { StudentSessionListComponent } from './student-session-list/student-session-list.component';

const routes: Routes = [
  {
    path:"student-session",
    component:StudentSessionComponent,
    children:[
      {
          path:"",
          component:StudentSessionListComponent
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentSessionRoutingModule { }
