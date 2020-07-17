import { Component, OnInit } from '@angular/core';
import { AbsenceLegal } from 'src/app/classes/absence-legal.model';
import { FormGroup } from '@angular/forms';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/classes/salarie.model';

@Component({
  selector: 'app-edit-absence',
  templateUrl: './edit-absence.component.html',
  styleUrls: ['./edit-absence.component.scss']
})
export class EditAbsenceComponent implements OnInit {

  absenceForm : FormGroup;
  absence_reason : AbsenceLegal[];
  salarie : Salarie[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  getErrorMessage() {
    return this.absenceForm.hasError('required') ? 'Required field' :
      this.absenceForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private api:PfeApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form){
    let id:number;
    this.isLoadingResults = true;
    this.api.PutAbsenceLegal(id,form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/absence']);
        }, (err) => {
          this.isIncomplete = true;
          console.warn(err);
          this.error = "Merci de bien vouloir verifier les informations remplis";
          this.isLoadingResults = false;
        })
  }

}
