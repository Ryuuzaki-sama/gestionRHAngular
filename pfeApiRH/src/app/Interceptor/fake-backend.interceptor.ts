import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../classes/auth/users.model';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  // const users: Users[] = [{ id: 1, username: 'test', email 'test@working.com', password: 'test', firstName: 'Test', lastName: 'User' }];
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
