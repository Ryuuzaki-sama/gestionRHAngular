import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AbsenceReason } from 'src/app/classes/absence-reason.model';
import { Router } from '@angular/router';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-accident',
  templateUrl: './add-accident.component.html',
  styleUrls: ['./add-accident.component.scss']
})
export class AddAccidentComponent implements OnInit {

  accidentForm : FormGroup;
  absence_reason : AbsenceReason[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  nature : string[]=["premier_nature","deuxieme_nature"];
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
    })
  }

  onFormSubmit(form:NgForm){
    this.isLoadingResults = true;
    this.api.PostAccident(form)
      .subscribe(res => {
          let id = res['_id'];
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
