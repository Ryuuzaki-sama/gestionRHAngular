import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { EmploisAnterieur } from 'src/app/classes/emplois-anterieur.model';

@Component({
  selector: 'app-emploi-anterieur',
  templateUrl: './emploi-anterieur.component.html',
  styleUrls: ['./emploi-anterieur.component.scss']
})
export class EmploiAnterieurComponent implements OnInit {

  displayedColumns : string[] = ['employeur ',"date_entree", 'date_sortie','Recent Fonction']
  emploi_anterieur : EmploisAnterieur[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  
  constructor(private api:PfeApiService,private apiAuth:AuthService) { }

  ngOnInit(): void {
    this.api.GetEmploisAnterieur()
    .subscribe(resEA=>
      {
        this.emploi_anterieur = resEA;
        this.isLoadingResults = false;
      },err=>{
        this.isLoadingResults = true;
      }
    )
  }

}
