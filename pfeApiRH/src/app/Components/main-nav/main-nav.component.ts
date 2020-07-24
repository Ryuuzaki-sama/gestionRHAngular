import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  panelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private apiAuth:AuthService) {}
  
  title = "Gestion Rh";
  ngOnInit(): void {
    this.apiAuth.loadToken();
  }

  isAdmin(){
    return this.apiAuth.isAdmin();
  }

  isSalarie(){
    return this.apiAuth.isSalarie();
  }
  isSecretaire(){
    return this.apiAuth.isUser();
  }

  isUser(){
    return this.apiAuth.isUser();
  }

  isAuth(){
    return this.apiAuth.isAuthenticated();
  }
  logout(){
    return this.apiAuth.logout();
  }
}
