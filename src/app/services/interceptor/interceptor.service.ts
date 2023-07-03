import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token:string = sessionStorage.getItem('token')||"";
    let request = req;

    if(token != null){
      request = req.clone({
        setHeaders:{
          Authorization: `${token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse) => {
        if(err.status == 401){
          this.router.navigate(['']);
        }
        return throwError(()=>err);
      })
    );
  }
}
