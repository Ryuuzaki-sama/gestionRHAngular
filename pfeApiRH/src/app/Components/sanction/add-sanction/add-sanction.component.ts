import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
      motif : ['', Validators.required],
    })
  }

  onFormSubmit(form:NgForm) {
    this.api.PostSanction(form).subscribe(res=>{
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
