import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-suivi',
  templateUrl: './edit-suivi.component.html',
  styleUrls: ['./edit-suivi.component.scss']
})
export class EditSuiviComponent implements OnInit {

  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  constructor() { }

  ngOnInit(): void {
  }

}
