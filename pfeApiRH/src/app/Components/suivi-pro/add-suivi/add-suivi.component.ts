import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, NgForm, FormGroup } from '@angular/forms';
import { Salarie } from 'src/app/classes/model/salarie.model';

@Component({
  selector: 'app-add-suivi',
  templateUrl: './add-suivi.component.html',
  styleUrls: ['./add-suivi.component.scss']
})
export class AddSuiviComponent implements OnInit {

  suiviForm : FormGroup;
  salarie : Salarie[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;


  getErrorMessage() {
    return this.suiviForm.hasError('required') ? 'Required field' :
      this.suiviForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private api:PfeApiService, private authApi: AuthService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.suiviForm = this.formBuilder.group({
      date : ['', Validators.required],
      fonct_ou_cat : ['', Validators.required],
      salaire_taux : ['', Validators.required],
    });
    this.api.GetSalaries().subscribe(res=>{
      this.salarie = res;
    })
  }

  onFormSubmit(form:NgForm) {
    this.api.PostSuiviPro(form).subscribe(res=>{
      let id = res['_id'];
      this.isLoadingResults = false;
      this.router.navigate(['/suivi_pro']);
    }, (err) => {
      this.isIncomplete = true;
      console.warn(err);
      this.error = "Merci de bien vouloir verifier les informations remplis";
      this.isLoadingResults = false;
    });
  }

}
