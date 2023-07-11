import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentSessionService } from 'src/app/services/studentSessionServices/student-session.service';
import { StudentSession } from 'src/model/StudentSession';

@Component({
  selector: 'app-student-session-list',
  templateUrl: './student-session-list.component.html',
  styleUrls: ['./student-session-list.component.scss']
})
export class StudentSessionListComponent {

  public table:MatTableDataSource<StudentSession>;
  public columns:string[];

  constructor(public studentSessionService:StudentSessionService, public router:Router){
    this.table = new MatTableDataSource();
    this.findStudentSessionByStudentUsername();
    this.columns = ['Date', 'Status', 'Topic', 'Teacher', 'Edit']
  }

  public findStudentSessionByStudentUsername(){
    this.studentSessionService.findByStudentUsername(sessionStorage.getItem('user') || "").subscribe(
      (response : StudentSession[]) => {
        this.table.data = response;
      }
    )
  }

}
