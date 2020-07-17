import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { AbsenceLegal } from 'src/app/classes/absence-legal.model';

@Component({
  selector: 'app-absence-legal',
  templateUrl: './absence-legal.component.html',
  styleUrls: ['./absence-legal.component.scss']
})
export class AbsenceLegalComponent implements OnInit {
  displayedColumns : string[] = ['date','Periode Debut', 'periode Fin','nombre de jours absence']
  absenceLegal : AbsenceLegal[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;


  constructor(private api:PfeApiService, private apiAuth:AuthService) { }

  ngOnInit(): void {
    this.api.GetAbsenceLegal().subscribe(resAbs=>{
      this.absenceLegal = resAbs;
      this.isLoadingResults = false;
    },err=>{
      this.isLoadingResults = true;
    })
  }

}
