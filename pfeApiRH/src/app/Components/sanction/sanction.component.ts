import { Component, OnInit } from '@angular/core';
import { Sanction } from 'src/app/classes/Model/sanction.model';
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
    this.loadData();
  }

  loadData(){
    this.api.GetSanctions()
    .subscribe(san=>{
        this.sanction = san;
        console.log("this means that it works"+this.sanction);
      },
      err=>{
        console.warn("can not load sanction data");
      }
    )
  }

}
