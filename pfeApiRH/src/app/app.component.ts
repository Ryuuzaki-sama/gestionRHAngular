import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myPFEApp';

  constructor(private apiAuth:AuthService){}
  
  isAdmin(){
    return this.apiAuth.isAdmin();
  }

  isSalarie(){
    return this.apiAuth.isSalarie();
  }

  isUser(){
    return this.apiAuth.isUser();
  }
}
