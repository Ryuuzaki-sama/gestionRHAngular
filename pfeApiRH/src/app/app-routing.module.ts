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


const routes: Routes = [
  // Page Accueil
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
