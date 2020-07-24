import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Accident } from 'src/app/classes/model/accident.model';
import { Salarie } from 'src/app/classes/model/salarie.model';

@Component({
  selector: 'app-edit-accident',
  templateUrl: './edit-accident.component.html',
  styleUrls: ['./edit-accident.component.scss']
})
export class EditAccidentComponent implements OnInit {

  accidentForm : FormGroup;
  accident : Accident;
  accident_reason : Accident[];
  salarie : Salarie;
  nature: string[]= ["premier_nature","deuxieme_nature"];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  getErrorMessage() {
    return this.accidentForm.hasError('required') ? 'Required field' :
      this.accidentForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private api:PfeApiService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.accidentForm = this.formBuilder.group({
      date : ['', Validators.required],
      nature : ['', Validators.required],
      circonstances : ['', Validators.required],
      jours_Absences :['', Validators.required],
    })
  }

  onFormSubmit(form){
    let id:number;
    this.isLoadingResults = true;
    this.api.PutAccident(id,form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/salarie/salarie-details',id]);
        }, (err) => {
          this.isIncomplete = true;
          console.warn(err);
          this.error = "Merci de bien vouloir verifier les informations remplis";
          this.isLoadingResults = false;
        })
  }
}
