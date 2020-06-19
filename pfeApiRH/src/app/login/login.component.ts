import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
// import { moveIn } from '../router.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [moveIn()],
  // host:{'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error:any;
  constructor(public af: AngularFireAuth, private router: Router) { 
    // this.af.auth.subscribe(auth=>{
    //   if(auth) {
    //     this.router.navigateByUrl('/home');
    //   }
    // });
  }

  // loginFb(){
  //   this.af.auth.login({
  //     provider: AuthProviders.Facebook,
  //     method: AuthMethods.popup,
  //   }).then(
  //     success =>{
  //       this.router.navigate(['/home']);
  //     }).catch(
  //       err =>{
  //         this.error = err;
  //       })
  // }

  // loginGoogle(){
  //   this.af.auth.login({
  //     provider: AuthProviders.Google,
  //     method: AuthMethods.popup,
  //   }).then(
  //     success =>{
  //       this.router.navigate(['/home']);
  //     }).catch(
  //       err =>{
  //         this.error = err;
  //       })
  // }

  ngOnInit(): void {
  }

}
