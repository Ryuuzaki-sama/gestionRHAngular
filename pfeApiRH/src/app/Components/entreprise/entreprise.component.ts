import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Entreprise } from 'src/app/classes/Model/entreprise.model';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {
  displayedColumns : string[] = ['denomination',"slogon"]
  entreprise : Entreprise[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  // denomination    : string;
  // slogon          : string;
  constructor(private api:PfeApiService, private apiAuth:AuthService) { }

  ngOnInit(): void {
    this.api.GetEntreprises().subscribe(resE=>{
      this.entreprise= resE;
    })
  }

}
