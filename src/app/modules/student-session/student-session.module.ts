import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSessionRoutingModule } from './student-session-routing.module';
import { StudentSessionListComponent } from './student-session-list/student-session-list.component';
import { SharedModule } from '../shared/shared.module';
import { StudentSessionComponent } from './student-session.component';
import { MaterialModule } from 'src/app/material/material.module';
import { StudentSessionViewComponent } from './student-session-view/student-session-view.component';


@NgModule({
  declarations: [
    StudentSessionListComponent,
    StudentSessionComponent,
    StudentSessionViewComponent
  ],
  imports: [
    CommonModule,
    StudentSessionRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class StudentSessionModule { }
