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


const routes: Routes = [
  // Page Accueil
  {
    path:'',
    component: HomeComponent,
    // canActivate : [AuthGuard]
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
    path:'salarie/add-salarie',
    component: AddSalarieComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'salarie/edit-salarie/:id',
    component: EditSalarieComponent,
    // canActivate : [AuthGuard],
  },
  {
    path:'salarie/salarie-details/:id',
    component: SalarieDetailsComponent,
    // canActivate : [AuthGuard]
  },
  
  {
    path: 'promotion',
    component: PromotionComponent,
    // canActivate : [AuthGuard]
  },

  {
    path: 'absence',
    component: AbsenceLegalComponent,
    // canActivate : [AuthGuard]
  },

  {
    path: 'accident',
    component: AccidentComponent,
    // canActivate : [AuthGuard]
  },

  {
    path: 'emploi_anterieur',
    component: EmploiAnterieurComponent,
    // canActivate : [AuthGuard]
  },

  {
    path: 'instruction',
    component: InstructionComponent,
    // canActivate : [AuthGuard]
  },

  {
    path: 'sanction',
    component: SanctionComponent,
    // canActivate : [AuthGuard]
  },

  {
    path: 'situation_familial_param',
    component: SituationFamilialComponent,
    // canActivate : [AuthGuard]
  },

  {
    path: 'suivi_pro',
    component: SuiviProComponent,
    // canActivate : [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
