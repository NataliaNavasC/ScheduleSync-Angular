import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ScheduledSessionService } from 'src/app/services/ScheduledSessionServices/scheduled-session.service';
import { StudentSessionService } from 'src/app/services/studentSessionServices/student-session.service';
import { UserService } from 'src/app/services/userServices/user/user.service';
import { ScheduledSession } from 'src/model/ScheduledSession';
import { StudentSession } from 'src/model/StudentSession';
import { User } from 'src/model/User/User';
import { RoleEnum } from 'src/utils/RoleEnum';

@Component({
  selector: 'app-scheduled-session-list',
  templateUrl: './scheduled-session-list.component.html',
  styleUrls: ['./scheduled-session-list.component.scss']
})
export class ScheduledSessionListComponent implements OnInit{

  public table:MatTableDataSource<ScheduledSession>;
  public columns:string[];
  public role!:RoleEnum;
  @Input() public sessionId!:number;

  constructor(public scheduledSessionService:ScheduledSessionService, public router:Router,
    public studentSessionService:StudentSessionService, public userService:UserService){
    this.table = new MatTableDataSource();
    this.columns = ['Date', 'Teacher', 'Schedule']
  }
  
  ngOnInit(){
    let role = sessionStorage.getItem("role");
    if(role == RoleEnum.STUDENT){
      this.role = RoleEnum.STUDENT
      this.findBySessionID();
    }
    if(role == RoleEnum.TEACHER){
      this.role = RoleEnum.TEACHER
      this.findByTeacherUsername();
    }
  }
  
  public findBySessionID(){
    console.log(this.sessionId);
    this.scheduledSessionService.findBySessionId(this.sessionId).subscribe(
      (response : ScheduledSession[]) => {
        this.table.data = response;
      }
    )
  }

  public createStudentSession(scheduledSession:ScheduledSession){
    this.userService.findByUsername(sessionStorage.getItem('user') || "").subscribe(
      (user:User) => {
        let newStudentSession:StudentSession = new StudentSession(0,"PENDING",user,scheduledSession);
        this.studentSessionService.createStudentSession(newStudentSession).subscribe(
          (studentSessionResponse) => {
            console.log(studentSessionResponse)
            this.router.navigate(['student-session']);
          }
        );
      }
    )
  }

  public findByTeacherUsername(){
    this.scheduledSessionService.findByTeacherUsername(sessionStorage.getItem('user') || "").subscribe(
      (response : ScheduledSession[]) => {
        console.log(response);
        this.table.data = response;
      }
    )
  }

}
