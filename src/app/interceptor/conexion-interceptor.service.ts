import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const rgx = /http:\/\/localhost\/proyectos\/ApiRest-PhP\/api_php\/public\/api\/v1/;

    if (!rgx.test(req.url)) {
      return next.handle(req);
    }
    const authReq = req.clone({ headers : new HttpHeaders({
      Token : 'autorizado'
     })});

    return next.handle(authReq);
  }
}
