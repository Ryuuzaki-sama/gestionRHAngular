import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PfeApiService } from '../pfe-api.service';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);


  isAuth : boolean = false;

  error:any;
  constructor(private api: AuthService, private router: Router) { }

  ngOnInit(): void {
  
  }

  Login(form){
    this.api.Login(form)
    .subscribe(res =>{
      // console.log(res);
        let jwt = res.headers.get('Authorization');
        this.api.saveToken(jwt);
        this.router.navigateByUrl('/');
      },
      err =>{
        this.isAuth = true;
        this.error = "Username or password incorrect";
      }
    );
    // if((this.username === this.usernameV) && (this.password === this.passwordV))
    // {
    //   this.isAuth = false;
    // }
    // else
    // {
    //   this.isAuth = true;
    //   this.error = "Username or password incorrect";
    // }
  }

  isAdmin(){
    return this.api.isAdmin();
  }

  isSalarie(){
    return this.api.isSalarie();
  }

  isUser(){
    return this.api.isUser();
  }

}
