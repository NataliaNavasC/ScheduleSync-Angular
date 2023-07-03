import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public get<Response>(url: string) {
    console.log('get: ' + url);
    return this.http.get<Response>(url).pipe(catchError(this.handleError));
  }

  public post<Request, Response>(url: string, bodyData: Request) {
    console.log('post: ' + url);
    return this.http
      .post<Response>(url, bodyData, { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  public put<Request, Response>(url: string, bodyData: Request) {
    console.log('put: ' + url);
    return this.http
      .put<Response>(url, bodyData)
      .pipe(catchError(this.handleError));
  }

  public delete<Response>(url: string) {
    console.log('delete: ' + url);
    return this.http.delete<Response>(url).pipe(catchError(this.handleError));
  }
  public handleError(error: Response | any) {
    let errorMessage: string;
    if (error instanceof Response) {
      const err = error || '';
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.errorMessage ? error.message : error.toString();
    }
    return throwError(() => errorMessage);
  }
}
