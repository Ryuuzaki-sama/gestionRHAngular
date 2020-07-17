import { Component, OnInit } from '@angular/core';
import { Sanction } from 'src/app/classes/sanction.model';
import { PfeApiService } from 'src/app/Services/pfe-api.service';

@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.scss']
})
export class SanctionComponent implements OnInit {

 
  sanction : Sanction[];
  displayedColumns : string[]= ["Date sanction", "nature de sanction", "motif sanction"];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  constructor(private api:PfeApiService) { }

  ngOnInit(): void {
  }

  loadData(){
    this.api.GetSanction()
    .subscribe(san=>{
        this.sanction = san;
      },
      err=>{
        alert("can not load sanction data");
      }
    )
  }

}
