import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FormGroup } from '@angular/forms';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-emploi-anterieur',
  templateUrl: './edit-emploi-anterieur.component.html',
  styleUrls: ['./edit-emploi-anterieur.component.scss']
})
export class EditEmploiAnterieurComponent implements OnInit {

  emploiForm : FormGroup;
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  getErrorMessage() {
    return this.emploiForm.hasError('required') ? 'Required field' :
      this.emploiForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private api:PfeApiService,private apiAuth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form){
    let id:number;
    this.isLoadingResults = true;
    this.api.PutEmploisAnterieur(id,form)
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
