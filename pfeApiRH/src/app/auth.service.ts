import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './classes/login.model';
import { JwtHelperService } from "@auth0/angular-jwt";
// import { Register } from './classes/register.model';
// import { Admin } from './classes/admin.model';

// const httpOptions = {
//   headers: new HttpHeaders(
//     {
//       'Content-Type': 'application/json',
//       'token': "base64:jpKAcM1IWrMK6k51F7F6xzeC6t2N9mWvqTsmzr/pG+c='"
//     },
//   )
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "http://localhost:8000/api/user";
  jwt:string;
  username:string;
  roles:Array<string>;

  constructor(private httpauth: HttpClient) { }

  
  Login(user){
    return this.httpauth.post<Login>(this.url,user,{observe:'response'});
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
    return this.roles.indexOf('ADMIN')>=0;
  }

  isSalarie(){
    return this.roles.indexOf('SALARIE')>=0;
  }

  isUser(){
    return this.roles.indexOf('USER')>=0;
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
    this.initParams();
  }

  initParams(){
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

}
