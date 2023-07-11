import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SessionModule } from '../session/session.module';


@NgModule({
  declarations: [
    CourseComponent,
    CourseViewComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
    MaterialModule,
    SessionModule
  ]
})
export class CourseModule { }
