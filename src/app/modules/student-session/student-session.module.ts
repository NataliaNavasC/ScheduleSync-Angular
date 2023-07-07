import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSessionRoutingModule } from './student-session-routing.module';
import { StudentSessionListComponent } from './student-session-list/student-session-list.component';
import { SharedModule } from '../shared/shared.module';
import { StudentSessionComponent } from './student-session.component';


@NgModule({
  declarations: [
    StudentSessionListComponent,
    StudentSessionComponent
  ],
  imports: [
    CommonModule,
    StudentSessionRoutingModule,
    SharedModule
  ]
})
export class StudentSessionModule { }
