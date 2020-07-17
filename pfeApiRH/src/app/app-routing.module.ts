import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

import { SalarieComponent } from './Components/salarie/salarie.component';
import { AddSalarieComponent } from './Components/salarie/add-salarie/add-salarie.component';
import { EditSalarieComponent } from './Components/salarie/edit-salarie/edit-salarie.component';
import { SalarieDetailsComponent } from './Components/salarie/salarie-details/salarie-details.component';
import { PromotionComponent } from './Components/promotion/promotion.component';
import { AbsenceLegalComponent } from './Components/absence-legal/absence-legal.component';
import { AccidentComponent } from './Components/accident/accident.component';
import { EmploiAnterieurComponent } from './Components/emploi-anterieur/emploi-anterieur.component';
import { InstructionComponent } from './Components/instruction/instruction.component';
import { SanctionComponent } from './Components/sanction/sanction.component';
import { SituationFamilialComponent } from './Components/situation-familial/situation-familial.component';
import { SuiviProComponent } from './Components/suivi-pro/suivi-pro.component';
import { AuthGuard } from './guard/auth.guard';
import { AddPromotionComponent } from './Components/promotion/add-promotion/add-promotion.component';
import { EditPromotionComponent } from './Components/promotion/edit-promotion/edit-promotion.component';
import { AddAbsenceComponent } from './Components/absence-legal/add-absence/add-absence.component';
import { EditAbsenceComponent } from './Components/absence-legal/edit-absence/edit-absence.component';
import { AddAccidentComponent } from './Components/accident/add-accident/add-accident.component';
import { EditAccidentComponent } from './Components/accident/edit-accident/edit-accident.component';
import { AddEmploiAnterieurComponent } from './Components/emploi-anterieur/add-emploi-anterieur/add-emploi-anterieur.component';
import { EditEmploiAnterieurComponent } from './Components/emploi-anterieur/edit-emploi-anterieur/edit-emploi-anterieur.component';
import { AddInstructionComponent } from './Components/instruction/add-instruction/add-instruction.component';
import { EditInstructionComponent } from './Components/instruction/edit-instruction/edit-instruction.component';
import { AddSanctionComponent } from './Components/sanction/add-sanction/add-sanction.component';
import { EditSanctionComponent } from './Components/sanction/edit-sanction/edit-sanction.component';
import { AddSuiviComponent } from './Components/suivi-pro/add-suivi/add-suivi.component';
import { EditSuiviComponent } from './Components/suivi-pro/edit-suivi/edit-suivi.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EntrepriseComponent } from './Components/entreprise/entreprise.component';
import { AddEntrepriseComponent } from './Components/entreprise/add-entreprise/add-entreprise.component';
import { EditEntrepriseComponent } from './Components/entreprise/edit-entreprise/edit-entreprise.component';
import { EntrepriseDetailsComponent } from './Components/entreprise/entreprise-details/entreprise-details.component';
import { EditSituationFamilialComponent } from './Components/situation-familial/edit-situation-familial/edit-situation-familial.component';


const routes: Routes = [
  // Page Accueil
  {
    path:'',
    component: HomeComponent,
    // canActivate : [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path:'entreprise',
    component: EntrepriseComponent
  },

  {
    path:'add-entreprise',
    component: AddEntrepriseComponent,
  },
  {
    path:'edit-entreprise/:id',
    component: EditEntrepriseComponent,
  },

  {
    path:'entreprise-details/:id',
    component: EntrepriseDetailsComponent,
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate : [AuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate : [AuthGuard]
  },

  {
    path: 'salarie',
    component: SalarieComponent,
    // canActivate : [AuthGuard]
  },
  {
    path:'add-salarie',
    component: AddSalarieComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'edit-salarie/:id',
    component: EditSalarieComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'salarie-details/:id',
    component: SalarieDetailsComponent,
    // canActivate : [AuthGuard]
  },
  
  {
    path: 'promotion',
    component: PromotionComponent,
    // canActivate : [AuthGuard]
  },

  {
    path:'add-promotion',
    component: AddPromotionComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'edit-promotion/:id',
    component: EditPromotionComponent,
    // canActivate : [AuthGuard],
  },

  {
    path: 'absence',
    component: AbsenceLegalComponent,
    // canActivate : [AuthGuard]
  },
  {
    path:'add-absence',
    component: AddAbsenceComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'edit-absence/:id',
    component: EditAbsenceComponent,
    // canActivate : [AuthGuard],
  },

  {
    path: 'accident',
    component: AccidentComponent,
    // canActivate : [AuthGuard]
  },
  {
    path:'add-accident',
    component: AddAccidentComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'edit-accident/:id',
    component: EditAccidentComponent,
    // canActivate : [AuthGuard],
  },

  {
    path: 'emploi_anterieur',
    component: EmploiAnterieurComponent,
    // canActivate : [AuthGuard]
  },
  {
    path:'add-emploi_anterieur',
    component: AddEmploiAnterieurComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'edit-emploi_anterieur/:id',
    component: EditEmploiAnterieurComponent,
    // canActivate : [AuthGuard],
  },

  {
    path: 'instruction',
    component: InstructionComponent,
    // canActivate : [AuthGuard]
  },
  {
    path:'add-instruction',
    component: AddInstructionComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'edit-instruction/:id',
    component: EditInstructionComponent,
    // canActivate : [AuthGuard],
  },
  

  {
    path: 'sanction',
    component: SanctionComponent,
    // canActivate : [AuthGuard]
  },
  {
    path:'add-sanction',
    component: AddSanctionComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'edit-sanction/:id',
    component: EditSanctionComponent,
    // canActivate : [AuthGuard],
  },

  {
    path: 'situation_familial_param',
    component: SituationFamilialComponent,
    // canActivate : [AuthGuard]
  },
  {
    path: 'edit-situation_familial/:id',
    component: EditSituationFamilialComponent,
  },

  {
    path: 'suivi_pro',
    component: SuiviProComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'add-suivi_pro',
    component: AddSuiviComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'edit-suivi_pro/:id',
    component: EditSuiviComponent,
    // canActivate : [AuthGuard],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
