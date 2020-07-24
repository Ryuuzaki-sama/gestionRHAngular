import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Salarie } from 'src/app/classes/model/salarie.model';

@Component({
  selector: 'app-edit-promotion',
  templateUrl: './edit-promotion.component.html',
  styleUrls: ['./edit-promotion.component.scss']
})
export class EditPromotionComponent implements OnInit {

  promotionForm: FormGroup;
  salarie : Salarie[];
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
    this.api.GetSalaries().subscribe(slt=>{
      this.salarie = slt;
    })
  }

  onFormSubmit(form){
    this.isLoadingResults = true;
    let id :number;
    this.api.PutPromotion(id,form)
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
