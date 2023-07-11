import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Course } from 'src/model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpService) { }

  public findById(id:number){
    let url:string = environment.baseURL + environment.coursesURL + "/" + id;
    return this.http.get<Course>(url);
  }
}
