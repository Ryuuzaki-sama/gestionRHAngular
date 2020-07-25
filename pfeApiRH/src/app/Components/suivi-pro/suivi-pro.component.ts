import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { SuiviPro } from 'src/app/classes/Model/suivi-pro.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-suivi-pro',
  templateUrl: './suivi-pro.component.html',
  styleUrls: ['./suivi-pro.component.scss']
})
export class SuiviProComponent implements OnInit {

  // Date 	        : Date;
  // fonct_ou_cat    : string;
  // salaire_taux    : Float32Array;
  suiviPro : SuiviPro[];
  displayedColumns : string[] = ['date suivi', 'fonct_ou_cat','salaire_taux','actions'];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  constructor(private api:PfeApiService,private apiAuth:AuthService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.api.GetSuiviPros().subscribe(res=>{
      this.suiviPro = res;
      this.isLoadingResults = false;
    },
    err=>{
      this.isLoadingResults = true;
      this.isIncomplete = true;
      this.error = "some info need to be filled";
    })
  }


}
