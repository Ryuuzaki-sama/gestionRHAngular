import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.scss']
})
export class AddEntrepriseComponent implements OnInit {

  entrepriseForm : FormGroup;
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  getErrorMessage() {
    return this.entrepriseForm.hasError('required') ? 'Required field' :
      this.entrepriseForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private router: Router, private api: PfeApiService,private apiAuth:AuthService, private formBuilder: FormBuilder) { }
   
  // employeur   : string;
  // date_entree : Date;
  // date_sortie : Date;
  // last_fonct  : string;
  ngOnInit(): void {
    this.entrepriseForm = this.formBuilder.group({
      denomination : ['', Validators.required],
      slogon : ['', Validators.required],
    })
  }

  onFormSubmit(form){
    this.isLoadingResults = true;
    this.api.PostEntreprise(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/entreprise/entreprise-details',id]);
        }, (err) => {
          this.isIncomplete = true;
          console.warn(err);
          this.error = "Merci de bien vouloir verifier les informations remplis";
          this.isLoadingResults = false;
        })
  }
}
