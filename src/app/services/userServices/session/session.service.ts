import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/model/User/User';
import { HttpService } from '../../http/http.service';
import { LoginDTO } from 'src/model/User/LoginDTO';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpService) { }

  public login(user:LoginDTO){
    let url:string = `${environment.baseURL}login`;
    return this.http.post<LoginDTO,User>(url, user);
  }

}
