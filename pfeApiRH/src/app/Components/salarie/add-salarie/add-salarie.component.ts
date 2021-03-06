import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective,FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { Router } from '@angular/router';
import { Pays } from 'src/app/classes/localisation/pays.model';
import { Region } from 'src/app/classes/localisation/region.model';
import { Ville } from 'src/app/classes/localisation/ville.model';
import { Quartier } from 'src/app/classes/localisation/quartier.model';
import { Permis } from 'src/app/classes/Model/permis.model';
import { SituationFamilial } from 'src/app/classes/Model/situation-familial.model';
import { Fonction } from 'src/app/classes/Model/fonction.model';
import { Service } from 'src/app/classes/Model/service.model';
import { Sanction } from 'src/app/classes/Model/sanction.model';
import { Accident } from 'src/app/classes/Model/accident.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-salarie',
  templateUrl: './add-salarie.component.html',
  styleUrls: ['./add-salarie.component.scss']
})
export class AddSalarieComponent implements OnInit {

  salarieForm : FormGroup;

  title                       = ['Mr','Mrs','Ms']; 
  situation_familial : SituationFamilial[];
  fonction : Fonction[];
  service : Service[];
  sanction : Sanction[];
  accident : Accident[];
  permis : Permis[];
  pays : Pays[];
  region : Region[];
  ville : Ville[];
  quartier : Quartier[];
  public salarie_id: number;

  getErrorMessage() {
    return this.salarieForm.hasError('required') ? 'Required field' :
      this.salarieForm.hasError('email') ? 'Not a valid email' :
        '';
  }

  isLoadingResults: boolean;
  isIncomplete : boolean =false;
  error : any;

  constructor(private router: Router, private api: PfeApiService,private apiAuth:AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.salarieForm = this.formBuilder.group({
      title : ['', Validators.required],
      nom_salarie : ['', Validators.required],
      prenom_salarie : ['', Validators.required],
      gender : ['', Validators.required],
      date_naissance : ['', Validators.required],
      adresse : ['', Validators.required],
      email : ['', Validators.required],
      cin_date_created_at:['', Validators.required],
      cin_localisation_created_at:['',Validators.required],
      date_entree: ['', Validators.required],
      nationalite : ['', Validators.required],
      cin_salarie : ['', Validators.required],
      pays_id : [null, Validators.required],
      observations: ['',Validators.required],
      // region : ['', Validators.required],
      ville_id : ['', Validators.required],
      // quartier : ['', Validators.required],
      telephone : ['', Validators.required],
      situation_familial_id :  ['', [Validators.required]],
    }),

    this.api.GetSituations().subscribe(ressf=>{
      this.situation_familial =ressf;
    });

    this.api.GetPays().subscribe(resp=>{
      this.pays = resp;
    });

    // this.api.GetRegion().subscribe(resr=>{
    //   this.region = resr;
    // });

    this.api.GetVilles().subscribe(resv=>{
      this.ville = resv;
    });

    // this.api.GetQuarties().subscribe(resq=>{
    //   this.quartier = resq;
    // })
  }

  onFormSubmit(form) {
    console.warn("this is the data collected :\n" + JSON.stringify(form));
    this.isLoadingResults = true;
    this.api.PostSalarie(form)
      .subscribe(res => {
           this.salarie_id = res['id'];
           console.log("this is from salarie "+this.salarie_id);
          this.isLoadingResults = false;
          // this.router.navigate(['/salarie-details', this.id]);
        }, (err) => {
          this.isIncomplete = true;
          console.warn(err);
          this.error = "Merci de bien vouloir verifier les informations remplis";
          this.isLoadingResults = false;
        });
  }

}
