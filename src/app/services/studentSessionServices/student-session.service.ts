import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { StudentSession } from 'src/model/StudentSession';

@Injectable({
  providedIn: 'root'
})
export class StudentSessionService {

  constructor(private http: HttpService) { }

  public findByStudentUsername(username:string){
    let url:string = environment.baseURL + environment.studentSessionsURL + "/" + environment.studentURL + username;
    return this.http.get<StudentSession[]>(url);
  }

  public findById(id:number){
    let url:string = environment.baseURL + environment.studentSessionsURL + "/" + id;
    return this.http.get<StudentSession>(url);
  }
  
  public createStudentSession(newStudentSession:StudentSession){
    let url:string = environment.baseURL + environment.studentSessionsURL;
    return this.http.post<StudentSession,StudentSession>(url,newStudentSession);
  }
  
  public deleteStudentSession(id:number){
    let url:string = environment.baseURL + environment.studentSessionsURL + "/" + id;
    return this.http.delete<StudentSession>(url);
  }

}
