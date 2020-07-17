import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-suivi',
  templateUrl: './add-suivi.component.html',
  styleUrls: ['./add-suivi.component.scss']
})
export class AddSuiviComponent implements OnInit {

  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
