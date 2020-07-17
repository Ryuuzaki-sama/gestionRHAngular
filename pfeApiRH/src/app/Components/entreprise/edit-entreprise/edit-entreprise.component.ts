import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-entreprise',
  templateUrl: './edit-entreprise.component.html',
  styleUrls: ['./edit-entreprise.component.scss']
})
export class EditEntrepriseComponent implements OnInit {

  entrepriseForm : FormGroup;
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  getErrorMessage() {
    return this.entrepriseForm.hasError('required') ? 'Required field' :
      this.entrepriseForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private api:PfeApiService,private apiAuth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form){
    let id:number;
    this.isLoadingResults = true;
    this.api.PutEntreprise(id,form)
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
