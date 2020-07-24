import { Component, OnInit,Input } from '@angular/core';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Salarie } from 'src/app/classes/Model/salarie.model';

@Component({
  selector: 'app-add-emploi-anterieur',
  templateUrl: './add-emploi-anterieur.component.html',
  styleUrls: ['./add-emploi-anterieur.component.scss']
})
export class AddEmploiAnterieurComponent implements OnInit {

  emploiForm : FormGroup;
  salarie : Salarie[];
  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;
  @Input() public salarie_id;
  getErrorMessage() {
    return this.emploiForm.hasError('required') ? 'Required field' :
      this.emploiForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private router: Router, private api: PfeApiService,private apiAuth:AuthService, private formBuilder: FormBuilder) { }
   
  // employeur   : string;
  // date_entree : Date;
  // date_sortie : Date;
  // last_fonct  : string;
  ngOnInit(): void {
    this.emploiForm = this.formBuilder.group({
      employeur : ['', Validators.required],
      date_entree : ['', Validators.required],
      date_sortie : ['', Validators.required],
      last_fonct :['', Validators.required],
      // salarie_id : ['', Validators.required]
    });
    this.api.GetSalaries().subscribe(slt=>{
      this.salarie = slt;
    })
  }

  onFormSubmit(form){
    this.isLoadingResults = true;
    this.api.PostEmploisAnterieur(form)
      .subscribe(res =>
        {
          let id = res['id'];
          this.isLoadingResults = false;
          // this.router.navigate(['/emploi-anterieur']);
        }, (err) => {
          this.isIncomplete = true;
          console.warn(err);
          this.error = "Merci de bien vouloir verifier les informations remplis";
          this.isLoadingResults = false;
        }
      )
  }
}
