import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Users } from '../classes/auth/users.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject : BehaviorSubject<Users>;
  public currentUser: Observable<Users>;

  url:string = "http://localhost:8000/api/users";
  jwt:string;
  username:string;
  roles:Array<string>;

  constructor(private httpauth: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Users {
    return this.currentUserSubject.value;
  }
  
  Login(user){
    return this.httpauth.post<Users>(this.url,user,{observe:'response'});
  }

  saveToken(jwt:string) {
    localStorage.setItem('token',jwt);
    this.jwt = jwt;
    this.parsejwt();

  }

  parsejwt(){
    let jwthelper = new JwtHelperService();
    let objJWT = jwthelper.decodeToken(this.jwt);
    this.username= objJWT.obj;
    this.roles= objJWT.roles;

  }

  isAdmin(){
    return this.roles.indexOf('admin')>=0;
  }

  isSalarie(){
    return this.roles.indexOf('salarie')>=0;
  }

  isUser(){
    return this.roles.indexOf('users')>=0;
  }

  isAuthenticated(){
    return this.roles && (this.isAdmin || this.isSalarie || this.isUser);
  }

  loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parsejwt();
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.initParams();
  }

  initParams(){
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

}
