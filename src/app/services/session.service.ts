import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  public login(user:User){
    return this.http.post(
      `${environment.usersURL}login`, user, {observe: 'response'})
  }

  /*private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
        const err = error || '';
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }

    return throwError(errMsg);
  }*/
}
