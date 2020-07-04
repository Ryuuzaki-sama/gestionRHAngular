import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PfeApiService } from '../../Services/pfe-api.service';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  usernameV :any;
  passwordV : any;

  isAuth : boolean = false;

  error:any;
  state: string='';

  constructor(private api: PfeApiService, private router: Router) { }


  ngOnInit(): void {
  
  }
  
  register(form){
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
