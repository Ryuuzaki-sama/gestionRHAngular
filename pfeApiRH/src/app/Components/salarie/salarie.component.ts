import { Component, OnInit, ViewChild } from '@angular/core';
import { Salarie } from '../../classes/Model/salarie.model';
import { PfeApiService } from '../../Services/pfe-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.scss']
})
export class SalarieComponent implements OnInit {

  displayedColumns: string[] = ['title','nom complet du salarie', 'gender','nationalite','adresse','telephone'];
  data: Salarie[] ;
  isLoadingResults = true;

  dataSource = new MatTableDataSource<Salarie>(this.data);

 
  constructor(private api: PfeApiService) { }
 
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.api.GetSalaries().subscribe(res=>{
      console.warn(res);
      this.data = res;
      // console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = true;
    });

    this.dataSource.paginator = this.paginator;
  }

}
