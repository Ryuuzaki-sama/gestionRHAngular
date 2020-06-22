import { Component, OnInit } from '@angular/core';
import { Salarie } from '../classes/salarie.model';
import { PfeApiService } from '../pfe-api.service';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.scss']
})
export class SalarieComponent implements OnInit {

  displayedColumns: string[] = ['titre','prenom_salarie','nom_salarie', 'gender','nationalite','adresse','telephone'];
  data: Salarie[] = [];
  isLoadingResults = true;
  constructor(private api: PfeApiService) { }

  ngOnInit(): void {
    this.api.GetSalarie().subscribe(res=>{
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
