import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduledSessionRoutingModule } from './scheduled-session-routing.module';
import { ScheduledSessionViewComponent } from './scheduled-session-view/scheduled-session-view.component';
import { ScheduledSessionComponent } from './scheduled-session.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ScheduledSessionListComponent } from './scheduled-session-list/scheduled-session-list.component';


@NgModule({
  declarations: [
    ScheduledSessionViewComponent,
    ScheduledSessionComponent,
    ScheduledSessionListComponent
  ],
  imports: [
    CommonModule,
    ScheduledSessionRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    ScheduledSessionListComponent
  ]
})
export class ScheduledSessionModule { }
