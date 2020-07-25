import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { AbsenceReason } from 'src/app/classes/model/absence-reason.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/classes/model/salarie.model';

@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.scss']
})
export class AddAbsenceComponent implements OnInit {

  absenceForm : FormGroup;
  absence_reason : AbsenceReason[];
  salarie: Salarie[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  getErrorMessage() {
    return this.absenceForm.hasError('required') ? 'Required field' :
      this.absenceForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private router: Router, private api: PfeApiService,private apiAuth:AuthService, private formBuilder: FormBuilder) { }
   
  ngOnInit(): void {
    this.absenceForm = this.formBuilder.group({
      date : ['', Validators.required],
      absence_reason_id : ['', Validators.required],
      periode_start : ['', Validators.required],
      periode_end : ['', Validators.required],
      total_days :['', Validators.required],
      observation:['', Validators.required],
      salarie_id : ['', Validators.required]

    });

    this.api.GetSalaries().subscribe(res=>{
      this.salarie = res;
    })

    this.api.GetAbsenceReasones().subscribe(res=>{
      this.absence_reason = res;
    })

  }

  onFormSubmit(form){
    this.isLoadingResults = true;
    let dateStart = new Date(form.periode_start).getTime();
    let dateEnd = new Date(form.periode_end).getTime();
    let joursAbsence = (dateEnd - dateStart) / (1000*60*60*24);

    const payload = {
      date : form.date.toLocaleDateString(),
      absence_reason_id : +form.absence_reason_id,
      periode_start : form.periode_start.toLocaleDateString(),
      periode_end : form.periode_end.toLocaleDateString(),
      total_days : +joursAbsence,
      observation: form.observation,
      salarie_id : form.salarie_id,
    }


    // console.warn("payload = "+JSON.stringify(payload));

    // const salarie  = {
    //   absence_legal_id : +form.salarie_id, 
    // }


    this.api.PostAbsenceLegal(payload)
      .subscribe(res => {
          let id = res['id'];
          // this.api.PutSalarie(id,salarie).subscribe(res=>{
          //   alert("I think this is connected");
          // })

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
