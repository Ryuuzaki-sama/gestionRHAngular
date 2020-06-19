import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
// import { moveIn, fallIn } from '../router.animations';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // animations: [moveIn(), fallIn()],
  // host:{'[@moveIn]': ''}
})
export class RegisterComponent implements OnInit {

  state: string='';
  error:any;
  constructor(public af:AngularFireAuth, private router: Router) { }


  ngOnInit(): void {
  }

}
