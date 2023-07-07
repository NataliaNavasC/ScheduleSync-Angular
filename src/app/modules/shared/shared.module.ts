import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    NavigationBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class SharedModule { }
