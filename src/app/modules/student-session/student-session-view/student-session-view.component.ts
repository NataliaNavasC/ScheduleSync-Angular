import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentSessionService } from 'src/app/services/studentSessionServices/student-session.service';
import { StudentSession } from 'src/model/StudentSession';

@Component({
  selector: 'app-student-session-view',
  templateUrl: './student-session-view.component.html',
  styleUrls: ['./student-session-view.component.scss']
})
export class StudentSessionViewComponent implements OnInit{

  public studentSession!:StudentSession;

  constructor(public studentSessionService:StudentSessionService, public route:ActivatedRoute, public router:Router){
    this.findStudentSession();
  }

  ngOnInit():void{
  }

  public findStudentSession(){
    this.studentSessionService.findById(Number(this.route.snapshot.paramMap.get("id"))).subscribe(
      (response : StudentSession) => {
        this.studentSession = response;
      }
    )
  }

  public deleteStudentsession(){
    this.studentSessionService.deleteStudentSession(this.studentSession.id).subscribe(
      (deleted) => {
        this.router.navigate(['student-session']);
      }
    )
  }

}
