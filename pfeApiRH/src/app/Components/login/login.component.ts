import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PfeApiService } from '../../Services/pfe-api.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error :string= '';
 
  isAuth : boolean = false;

  constructor(
    private apiAuth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) 
  { 
    //   if (this.apiAuth.currentUserValue) { 
    //     this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password :  ['', [Validators.required]],
    }),
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  Login(form){
    console.warn(form);
    this.apiAuth.Login(form)
    .subscribe(res =>{
      console.log(res);
        let jwt = res['success']['token'];
        let name = res['name']['name'];
        console.warn(name);
        this.apiAuth.saveToken(jwt);
        this.router.navigateByUrl('/');
      },
      err =>{
        this.isAuth = true;
        this.error = "Username or password incorrect";
      }
    );
  }

  // isAdmin(){
  //   return this.apiAuth.isAdmin();
  // }

  // isSalarie(){
  //   return this.apiAuth.isSalarie();
  // }
  // isSecretaire(){
  //   return this.apiAuth.isAdmin();
  // }

  // isUser(){
  //   return this.apiAuth.isUser();
  // }
  

}
