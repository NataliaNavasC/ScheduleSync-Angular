import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { ScheduledSession } from 'src/model/ScheduledSession';

@Injectable({
  providedIn: 'root'
})
export class ScheduledSessionService {

  constructor(private http: HttpService) { }

  public findBySessionId(id:number){
    let url:string = environment.baseURL + environment.scheduledSessionsURL + "/" + environment.sessionURL + id;
    return this.http.get<ScheduledSession[]>(url);
  }
  
  public findByTeacherUsername(username:string){
    let url:string = environment.baseURL + environment.scheduledSessionsURL + "/" + environment.teacherURL + username;
    return this.http.get<ScheduledSession[]>(url);
  }

}
