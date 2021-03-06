import { Component, OnInit } from '@angular/core';
import { Accident } from 'src/app/classes/model/accident.model';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss']
})
export class AccidentComponent implements OnInit {
  displayedColumns : string[] = ['Date',"nature accident", 'circonstances','nombre de jours absences','actions']
  accident : Accident[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;


  constructor(private api:PfeApiService, private apiAuth:AuthService) { }

  ngOnInit(): void {
    this.api.GetAccidents().subscribe(resAbs=>{
      this.accident = resAbs;
      this.isLoadingResults = false;
    },err=>{
      this.isLoadingResults = true;
    })
  }
}
