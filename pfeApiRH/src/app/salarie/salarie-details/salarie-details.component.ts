import { Component, OnInit } from '@angular/core';
import { Salarie } from 'src/app/classes/salarie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PfeApiService } from 'src/app/pfe-api.service';

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
    ville_id                   : null,
    permis_id                  : null,
    situation_familial_id       : null,
    fonction_id                 : null,
    sevice_id                   : null,
    sanction_id                 : null,
    accident_id                 : null,
    created_at                  : new Date, 
  };

  isLoadingResults = true;
  
  constructor(private route: ActivatedRoute, private api: PfeApiService, private router: Router) { }

  getSalarieDetails(id) {
    this.api.GetSalarie(id)
      .subscribe(data => {
        this.salarie = data;
        console.log(this.salarie);
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
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    } else
    {
       alert("Ce Salarie n'est pas supprimer");
    }
    
  }

}
