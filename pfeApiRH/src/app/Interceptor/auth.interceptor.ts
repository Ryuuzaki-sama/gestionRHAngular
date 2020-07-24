import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiAuth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // const currentUser = this.apiAuth.currentUserValue;
    // const isLoggedIn = currentUser && currentUser.token;
    // const isApiUrl = request.url.startsWith(this.apiAuth.url);
    // if(isLoggedIn && isApiUrl){
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${currentUser.token}`
    //     }
    //   });
    // }
    
    return next.handle(request);
  }
}
