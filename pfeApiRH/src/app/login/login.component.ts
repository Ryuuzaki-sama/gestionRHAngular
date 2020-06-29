import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PfeApiService } from '../pfe-api.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  usernameV :any;
  passwordV : any;

  isAuth : boolean = false;

  error:any;
  constructor(private api: PfeApiService, private router: Router) { 
  }

  

  ngOnInit(): void {
  
  }

  login(form){
    if((this.username === this.usernameV) && (this.password === this.passwordV))
    {
      this.isAuth = false;
    }
    else
    {
      this.isAuth = true;
      this.error = "Username or password incorrect";
    }
  }

}
