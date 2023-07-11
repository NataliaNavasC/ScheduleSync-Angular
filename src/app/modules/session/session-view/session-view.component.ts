import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/sessionServices/session.service';
import { Session } from 'src/model/Session';

@Component({
  selector: 'app-session-view',
  templateUrl: './session-view.component.html',
  styleUrls: ['./session-view.component.scss']
})
export class SessionViewComponent {

  public session!:Session;
  public sessionId:number;

  constructor(public sessionService:SessionService, public route:ActivatedRoute){
    this.sessionId = Number(this.route.snapshot.paramMap.get("id"));
    this.findSession();
  }


  public findSession(){
    this.sessionService.findById(this.sessionId).subscribe(
      (response:Session) => {
        console.log(response);
        this.session = response;
      }
    )
  }
}
