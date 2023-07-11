import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/sessionServices/session.service';
import { Session } from 'src/model/Session';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent {

  public table:MatTableDataSource<Session>;
  public columns:string[];

  constructor(public sessionService:SessionService, public router:Router){
    this.table = new MatTableDataSource();
    this.findByCourseID();
    this.columns = ['Topic', 'SessionType', 'Schedule']
  }

  public findByCourseID(){
    this.sessionService.findByCourseId(Number(sessionStorage.getItem('courseId'))).subscribe(
      (response : Session[]) => {
        this.table.data = response;
      }
    )
  }

}
