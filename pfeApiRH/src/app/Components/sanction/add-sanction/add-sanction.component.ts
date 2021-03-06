import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Salarie } from 'src/app/classes/model/salarie.model';

@Component({
  selector: 'app-add-sanction',
  templateUrl: './add-sanction.component.html',
  styleUrls: ['./add-sanction.component.scss']
})
export class AddSanctionComponent implements OnInit {

   // Date 	: Date;
  // nature  : string;
  // motifs  : string;
  sanctionForm : FormGroup;
  salarie : Salarie[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;


  getErrorMessage() {
    return this.sanctionForm.hasError('required') ? 'Required field' :
      this.sanctionForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private api:PfeApiService, private authApi: AuthService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sanctionForm = this.formBuilder.group({
      date : ['', Validators.required],
      nature : ['', Validators.required],
      motifs : ['', Validators.required],
      salarie_id : ['', Validators.required],
    })
    this.api.GetSalaries().subscribe(res=>{
      this.salarie = res;
    })
  }

  onFormSubmit(form) {
    
    const payload = {
      date : form.date.toLocaleDateString(),
      nature : form.nature,
      motifs : form.motifs,
      salarie_id : +form.salarie_id,
    }

    this.api.PostSanction(payload).subscribe(res=>{
      let id = res['_id'];
      this.isLoadingResults = false;
      this.router.navigate(['/sanction']);
    }, (err) => {
      this.isIncomplete = true;
      console.warn(err);
      this.error = "Merci de bien vouloir verifier les informations remplis";
      this.isLoadingResults = false;
    });
  }

}
