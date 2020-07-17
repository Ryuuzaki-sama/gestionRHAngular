import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-situation-familial',
  templateUrl: './situation-familial.component.html',
  styleUrls: ['./situation-familial.component.scss']
})
export class SituationFamilialComponent implements OnInit {

  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  constructor() { }

  ngOnInit(): void {
  }

}
