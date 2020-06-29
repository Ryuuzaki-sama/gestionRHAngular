export class Salarie {
    id                           : number;
    title                        : string;
    nom_salarie                  : string;
    prenom_salarie               : string;
    gender                       : string;
    nationalite                  : string;
    date_naissance               : Date;
    adresse                      : string;
    telephone                    : string;
    date_entree?                 : Date;
    observations?                : string;
    cin_salarie                  : string;
    cin_date_created_at?         : Date;
    cin_localisation_created_at? : string;
    pays_id?                     : number;
    ville_id?                    : number;
    permis_id?                   : number;
    situation_familial_id?       : number;
    fonction_id?                 : number;
    sevice_id?                   : number;
    sanction_id?                 : number;
    accident_id?                 : number;
    promotion_id?                : number;
    absence_legal_id?            : number;
    suivi_professionel_id?       : number;
    created_at?                  : any;

}
