import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-instruction',
  templateUrl: './add-instruction.component.html',
  styleUrls: ['./add-instruction.component.scss']
})
export class AddInstructionComponent implements OnInit {

  instructionForm : FormGroup;
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  instruction_level : string[]= ["niveau Bac","Bac","Bac+2","Licence Professionelle","Master Professionelle"]
  languages : string[]= ["العربية","francais","english","others"];
  error : any;


  getErrorMessage() {
    return this.instructionForm.hasError('required') ? 'Required field' :
      this.instructionForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private router: Router, private api: PfeApiService,private apiAuth:AuthService, private formBuilder: FormBuilder) { }
   

  ngOnInit(): void {

    this.instructionForm = this.formBuilder.group({
      instruction_level : ['', Validators.required],
      diplome_got : ['', Validators.required],
      language_talked : ['', Validators.required],
      language_write :['', Validators.required],
      particular_knowledge :['', Validators.required],
    })
  }

  onFormSubmit(form){
    this.isLoadingResults = true;
    this.api.PostEmploisAnterieur(form)
      .subscribe(res =>
        {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/instruction']);
        }, (err) => {
          this.isIncomplete = true;
          console.warn(err);
          this.error = "Certains champs ne sont pas remplis, merci de bien vouloir verifier les informations remplis";
          this.isLoadingResults = false;
        }
      )
  }

}
