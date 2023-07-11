import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Session } from 'src/model/Session';
import { ScheduledSession } from 'src/model/ScheduledSession';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpService) { }
  
  public findById(id:number){
    let url:string = environment.baseURL + environment.sessionsURL + "/" + id;
    return this.http.get<Session>(url);
  }

  public findByCourseId(id:number){
    let url:string = environment.baseURL + environment.sessionsURL + "/" + environment.courseURL + id;
    return this.http.get<Session[]>(url);
  }

}
