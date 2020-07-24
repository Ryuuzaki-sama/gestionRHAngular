import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { AbsenceLegal } from 'src/app/classes/Model/absence-legal.model';

@Component({
  selector: 'app-absence-legal',
  templateUrl: './absence-legal.component.html',
  styleUrls: ['./absence-legal.component.scss']
})
export class AbsenceLegalComponent implements OnInit {
  
  displayedColumns : string[] = ['Date','Periode Debut', 'periode Fin','nombre de jours absence']
  absenceLegal : AbsenceLegal[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;


  constructor(private api:PfeApiService, private apiAuth:AuthService) { }

  ngOnInit(): void {
    this.api.GetAbsenceLegals().subscribe(resAbs=>{
      this.absenceLegal = resAbs;
      this.isLoadingResults = false;
    },err=>{
      this.isLoadingResults = true;
    })
  }

  calculateDiff(sentOn){

    let todayDate = new Date();
    let sentOnDate = new Date(sentOn);
    sentOnDate.setDate(sentOnDate.getDate());
    let differenceInTime = todayDate.getTime() - sentOnDate.getTime();
    // To calculate the no. of days between two dates
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
    return differenceInDays;
}

}
