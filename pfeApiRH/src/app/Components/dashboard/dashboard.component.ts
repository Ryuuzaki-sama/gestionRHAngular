import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { PfeApiService } from 'src/app/Services/pfe-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;
  entreprise: number;
  salarie: number;
  absence: number;
  
  promotion: number;


  constructor(private api:PfeApiService) { }

  ngOnInit(): void {
    
    this.api.GetSalaries().subscribe(slr=>{
      this.salarie = slr.length;
    })
    this.api.GetEntreprises().subscribe(ent=>{
      this.entreprise = ent.length;
    })
    this.api.GetAbsenceLegals().subscribe(abs=>{
      let absenceDate =[];
      let absDate = abs.map(res=> {
       let dateStart = new Date(res.periode_start).getTime();
       let dateEnd = new Date(res.periode_end).getTime();
       let joursAbsence = (dateEnd - dateStart) / (1000*60*60*24);
       console.warn(dateStart +" - " +dateEnd+ " = "+ joursAbsence +" jours");
      });
      console.warn(absDate);
      this.absence = abs.length;
    })
    this.api.GetPromotions().subscribe(promo=>{
      this.promotion = promo.length;
    })
  }

}
