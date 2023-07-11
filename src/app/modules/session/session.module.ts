import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionViewComponent } from './session-view/session-view.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ScheduledSessionModule } from '../scheduled-session/scheduled-session.module';


@NgModule({
  declarations: [
    SessionComponent,
    SessionListComponent,
    SessionViewComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule,
    MaterialModule,
    ScheduledSessionModule
  ],
  exports: [
    SessionListComponent
  ]
})
export class SessionModule { }
