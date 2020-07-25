import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AbsenceReason } from 'src/app/classes/model/absence-reason.model';
import { Router } from '@angular/router';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Salarie } from 'src/app/classes/model/salarie.model';

@Component({
  selector: 'app-add-accident',
  templateUrl: './add-accident.component.html',
  styleUrls: ['./add-accident.component.scss']
})
export class AddAccidentComponent implements OnInit {

  accidentForm : FormGroup;
  salarie: Salarie[];
  absence_reason : AbsenceReason[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  nature : string[] =["premier_nature","deuxieme_nature"];
  error : any;

  getErrorMessage() {
    return this.accidentForm.hasError('required') ? 'Required field' :
      this.accidentForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private router: Router, private api: PfeApiService,private apiAuth:AuthService, private formBuilder: FormBuilder) { }
    // date            : Date;
  // nature          : string;
  // circonstances   : string;
  // jours_Absences  : number;
   
  ngOnInit(): void {
    this.accidentForm = this.formBuilder.group({
      date : ['', Validators.required],
      nature : ['', Validators.required],
      circonstances : ['', Validators.required],
      jours_Absences :['', Validators.required],
      salarie_id : ['', Validators.required]
    })
    this.api.GetSalaries().subscribe(slr=>{
      this.salarie = slr;
    })
  }

  onFormSubmit(form){
    this.isLoadingResults = true;
    
    const payload = {
      date : form.date.toLocaleDateString(),
      nature : form.nature,
      circonstances : form.circonstances,
      jours_Absences : form.jours_Absences,
      salarie_id : +form.salarie_id,
    }

    this.api.PostAccident(payload)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/accident']);
        }, (err) => {
          this.isIncomplete = true;
          console.warn(err);
          this.error = "Merci de bien vouloir verifier les informations remplis";
          this.isLoadingResults = false;
        })
  }

}
