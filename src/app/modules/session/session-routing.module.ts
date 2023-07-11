import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionViewComponent } from './session-view/session-view.component';

const routes: Routes = [
  {
    path:"session",
    component:SessionComponent,
    children:[
      {
          path:"",
          component:SessionListComponent
      },
      {
        path: ':id',
        component:SessionViewComponent
      } 

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
