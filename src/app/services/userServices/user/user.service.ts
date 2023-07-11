import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/model/User/User';
import { HttpService } from '../../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  public findByUsername(username:string){
    let url:string = `${environment.baseURL}${environment.usersURL}/${username}`;
    return this.http.get<User>(url);
  }
  

}
