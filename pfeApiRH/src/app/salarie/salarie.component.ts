import { Component, OnInit, ViewChild } from '@angular/core';
import { Salarie } from '../classes/salarie.model';
import { PfeApiService } from '../pfe-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.scss']
})
export class SalarieComponent implements OnInit {

  displayedColumns: string[] = ['title','nom complet du salarie', 'gender','nationalite','adresse','telephone'];
  data: Salarie[] = [];
  isLoadingResults = true;

  dataSource = new MatTableDataSource<Salarie>(this.data);

 
  constructor(private api: PfeApiService) { }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.api.GetSalaries().subscribe(res=>{
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

    this.dataSource.paginator = this.paginator;
  }

}
