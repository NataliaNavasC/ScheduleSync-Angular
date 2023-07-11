import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduledSessionViewComponent } from './scheduled-session-view/scheduled-session-view.component';
import { ScheduledSessionComponent } from './scheduled-session.component';
import { ScheduledSessionListComponent } from './scheduled-session-list/scheduled-session-list.component';

const routes: Routes = [
  {
    path:"scheduled-session",
    component:ScheduledSessionComponent,
    children:[
      {
          path:"",
          component:ScheduledSessionListComponent
      },
      {
        path: ':id',
        component:ScheduledSessionViewComponent
      } 

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduledSessionRoutingModule { }
