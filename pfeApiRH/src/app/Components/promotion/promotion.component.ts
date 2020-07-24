import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Promotion } from 'src/app/classes/Model/promotion.model';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  displayedColumns : string[] =["Date","fonct_cat","salaire_taux"]
  promotion : Promotion[];
  
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  
  constructor(private api:PfeApiService, private apiAuth:AuthService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.api.GetPromotions().subscribe(res=>{
      this.promotion = res;
    })
  }

}
