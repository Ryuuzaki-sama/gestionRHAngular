import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective,FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PfeApiService } from 'src/app/pfe-api.service';
import { Router } from '@angular/router';
import { Pays } from 'src/app/classes/localisation/pays.model';
import { Region } from 'src/app/classes/localisation/region.model';
import { Ville } from 'src/app/classes/localisation/ville.model';
import { Quartier } from 'src/app/classes/localisation/quartier.model';
import { Permis } from 'src/app/classes/permis.model';
import { SituationFamilial } from 'src/app/classes/situation-familial.model';
import { Fonction } from 'src/app/classes/fonction.model';
import { Service } from 'src/app/classes/service.model';
import { Sanction } from 'src/app/classes/sanction.model';
import { Accident } from 'src/app/classes/accident.model';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-add-salarie',
  templateUrl: './add-salarie.component.html',
  styleUrls: ['./add-salarie.component.scss']
})
export class AddSalarieComponent implements OnInit {

  salarieForm: FormGroup;
  title                       : FormControl;
  nom_salarie                 : FormControl;
  prenom_salarie              : FormControl;
  gender                      = ['Male','Female'];
  nationalite                 : FormControl;
  date_naissance              : FormControl;
  adresse                     : FormControl;
  telephone                   : FormControl;
  date_entree                : FormControl;
  cin_salarie                 : FormControl;
  cin_date_created_at         : FormControl;
  cin_localisation_created_at : FormControl;
  created_at                 :  FormControl; 

  situation_familial : SituationFamilial[];
  fonction : Fonction[];
  service : Service[];
  sanction : Sanction[];
  accident : Accident[];
  permis : Permis[];
  pays : Pays[];
  region : Region[];
  ville : Ville[];
  quartier : Quartier;

  isLoadingResults: boolean;

  errorMessage = 'Custom error message';


  constructor(private router: Router, private api: PfeApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.api.GetPays().subscribe(pays=>{
      
    })
    this.salarieForm = this.formBuilder.group({
      'title' : [null, Validators.compose([Validators.minLength(1), Validators.maxLength(5), Validators.required])],
      'nom_salarie' : [null,  Validators.compose([Validators.minLength(3), Validators.maxLength(15), Validators.required])],
      'prenom_salarie' : [null, Validators.compose([Validators.minLength(3), Validators.maxLength(15), Validators.required])],
      'gender' : [null, Validators.required],
      'nationalite' : [null, Validators.required],
      'date_naissance' : [null, Validators.required],
      'adresse' : [null, Validators.required],
      'telephone' : [null, Validators.required],
      'cin_salarie' : [null, Validators.required],
      'cin_date_created_at' : [null, Validators.required],
      'cin_localisation_created_at' : [null, Validators.required],
      'pays' : [null, Validators.required],
      'region' : [null, Validators.required],
      'ville' : [null, Validators.required],
      'quartier' : [null, Validators.required],
    });
    this.title = new FormControl('', Validators.required);
    this.nom_salarie = new FormControl('', Validators.required);
    this.prenom_salarie = new FormControl('', Validators.required);
    this.nationalite = new FormControl('', Validators.required);
    this.date_naissance = new FormControl('', Validators.required);
    this.adresse = new FormControl('', Validators.required);
    this.telephone = new FormControl('', Validators.required);
    this.cin_salarie = new FormControl('', Validators.required);
    this.cin_date_created_at = new FormControl('', Validators.required);
  }

  onFormSubmit(form:NgForm) {
    const payload = {

    }
    
    this.isLoadingResults = true;
    this.api.PostSalarie(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/salarie/salarie-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
