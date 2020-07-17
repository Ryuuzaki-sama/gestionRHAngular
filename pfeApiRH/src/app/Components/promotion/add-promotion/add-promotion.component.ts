import { Component, OnInit } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.scss']
})
export class AddPromotionComponent implements OnInit {

  promotionForm: FormGroup;
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  getErrorMessage() {
    return this.promotionForm.hasError('required') ? 'Required field' :
      this.promotionForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private router: Router, private api: PfeApiService,private apiAuth:AuthService, private formBuilder: FormBuilder) { }
   

  ngOnInit(): void {

    this.promotionForm = this.formBuilder.group({
      instruction_level : ['', Validators.required],
      diplome_got : ['', Validators.required],
      language_talked : ['', Validators.required],
      language_write :['', Validators.required],
      particular_knowledge :['', Validators.required],
    })
  }

  onFormSubmit(form){
    this.isLoadingResults = true;
    this.api.PostPromotion(form)
      .subscribe(res =>
        {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/promotion']);
        }, (err) => {
          this.isIncomplete = true;
          console.warn(err);
          this.error = "Certains champs ne sont pas remplis, merci de bien vouloir verifier les informations remplis";
          this.isLoadingResults = false;
        }
      )
  }

}
