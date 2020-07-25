import { Component, OnInit } from '@angular/core';
import { Salarie } from 'src/app/classes/Model/salarie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PfeApiService } from 'src/app/Services/pfe-api.service';
import { Entreprise } from 'src/app/classes/model/entreprise.model';
import { Pays } from 'src/app/classes/localisation/pays.model';
import { Ville } from 'src/app/classes/localisation/ville.model';
import { Permis } from 'src/app/classes/model/permis.model';
import { SituationFamilial } from 'src/app/classes/model/situation-familial.model';
import { Instruction } from 'src/app/classes/model/instruction.model';
import { Promotion } from 'src/app/classes/model/promotion.model';
import { SuiviPro } from 'src/app/classes/model/suivi-pro.model';

@Component({
  selector: 'app-salarie-details',
  templateUrl: './salarie-details.component.html',
  styleUrls: ['./salarie-details.component.scss']
})
export class SalarieDetailsComponent implements OnInit {
  salarie: Salarie = 
  {
    id: null,
    title                       : '',
    nom_salarie                 : '',
    prenom_salarie              : '',
    gender                      : '',
    nationalite                 : '',
    date_naissance              : new Date,
    adresse                     : '',
    telephone                   : '',
    date_entree                : new Date,
    cin_salarie                 : '',
    cin_date_created_at         : new Date,
    cin_localisation_created_at : '',
    pays_id                    : null,
    email                       : '',
    ville_id                   : null,
    permis_id                  : null,
    situation_familial_id       : null,
    fonction_id                 : null,
    sevice_id                   : null,
    sanction_id                 : null,
    accident_id                 : null,
    entreprise	                 : '',
    fonction                  : '',
    pays	                     : '',
    ville	                     : '',
    // accidents                 : '',
    permis	                     : '',
    situation_familial	         : '',
    sanctions                   : '',
    absences                    : '',
    instructions                : '',
    promotions	                 : '',
    suivi_pros                  : '',
    created_at                  : new Date, 
  };
  // entreprise : Entreprise = {
  //   id : this.salarie.entreprise['id']
  // }

  isLoadingResults = true;
  
  constructor(private route: ActivatedRoute, private api: PfeApiService, private router: Router) { }

  getSalarieDetails(id) {
    this.api.GetSalarie(id)
      .subscribe(data => {
        this.salarie = data;
        // console.warn("this is the all data we get for salarie "+ JSON.stringify(data.fonction))
        // console.log(this.salarie.entreprise);
        this.isLoadingResults = false;
      });
  }

  ngOnInit(): void {
    this.getSalarieDetails(this.route.snapshot.params['id']);
  }

  deletesalarie(id) {
    if(confirm('Voulez vous vraiment supprimer ce salarie ?'))
    {
      this.isLoadingResults = true;
      this.api.Deletesalarie(id)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/salarie']);
            alert("you should navigate to salarie");
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }else
    {
       alert("Ce Salarie n'est pas supprimer");
    }
    
  }

}
