import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './classes/login.model';
import { Register } from './classes/register.model';
import { Admin } from './classes/admin.model';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'token': "base64:jpKAcM1IWrMK6k51F7F6xzeC6t2N9mWvqTsmzr/pG+c='"
    },
  )
};

const url = "http://localhost:8000/api/user";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpauth: HttpClient) { }

  
  Login(user){
    return this.httpauth.post<Login>(url,user);
  }

}
