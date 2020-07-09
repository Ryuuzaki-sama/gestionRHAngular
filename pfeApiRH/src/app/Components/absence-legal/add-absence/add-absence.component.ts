import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { AbsenceReason } from 'src/app/classes/absence-reason.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.scss']
})
export class AddAbsenceComponent implements OnInit {

  absenceForm : FormGroup;
  absence_reason : AbsenceReason[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  getErrorMessage() {
    return this.absenceForm.hasError('required') ? 'Required field' :
      this.absenceForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private router: Router, private api: PfeApiService,private apiAuth:AuthService, private formBuilder: FormBuilder) { }
    //  id                   : number;
    // date                  : Date;
    // absence_reason_id     : number;
    // periode_start         : Date;
    // periode_end           : Date;
    // total_days            : number;
    // observation           : Text;
   
  ngOnInit(): void {
    this.absenceForm = this.formBuilder.group({
      date : ['', Validators.required],
      absence_reason_id : ['', Validators.required],
      periode_start : ['', Validators.required],
      periode_end : ['', Validators.required],
      total_days :['', Validators.required],

    })
  }

  onFormSubmit(form){
    this.isLoadingResults = true;
    this.api.PostAbsenceLegal(form)
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
