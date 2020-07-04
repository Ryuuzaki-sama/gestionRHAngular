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
