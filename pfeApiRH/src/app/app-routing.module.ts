import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { SalarieComponent } from './salarie/salarie.component';
import { AddSalarieComponent } from './salarie/add-salarie/add-salarie.component';
import { EditSalarieComponent } from './salarie/edit-salarie/edit-salarie.component';
import { SalarieDetailsComponent } from './salarie/salarie-details/salarie-details.component';
import { PromotionComponent } from './promotion/promotion.component';
import { AbsenceLegalComponent } from './absence-legal/absence-legal.component';
import { AccidentComponent } from './accident/accident.component';
import { EmploiAnterieurComponent } from './emploi-anterieur/emploi-anterieur.component';
import { InstructionComponent } from './instruction/instruction.component';
import { SanctionComponent } from './sanction/sanction.component';
import { SituationFamilialComponent } from './situation-familial/situation-familial.component';
import { SuiviProComponent } from './suivi-pro/suivi-pro.component';


const routes: Routes = [
  // Page Accueil
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },

  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'salarie',
    component: SalarieComponent
  },
  {
    path:'salarie/add-salarie',
    component: AddSalarieComponent
  },
  {
    path:'salarie/edit-salarie/:id',
    component: EditSalarieComponent
  },
  {
    path:'salarie/salarie-details/:id',
    component: SalarieDetailsComponent
  },
  
  {
    path: 'promotion',
    component: PromotionComponent
  },

  {
    path: 'absence',
    component: AbsenceLegalComponent
  },

  {
    path: 'accident',
    component: AccidentComponent
  },

  {
    path: 'emploi_anterieur',
    component: EmploiAnterieurComponent
  },

  {
    path: 'instruction',
    component: InstructionComponent
  },

  {
    path: 'sanction',
    component: SanctionComponent
  },

  {
    path: 'situation_familial_param',
    component: SituationFamilialComponent
  },

  {
    path: 'suivi_pro',
    component: SuiviProComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
