// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Menu Material
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SalarieComponent } from './salarie/salarie.component';
import { AddSalarieComponent } from './salarie/add-salarie/add-salarie.component';
import { EditSalarieComponent } from './salarie/edit-salarie/edit-salarie.component';
import { SalarieDetailsComponent } from './salarie/salarie-details/salarie-details.component';

export const firebaseConfig ={
  apiKey : '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSnderId:''
};

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainNavComponent,
    SalarieComponent,
    AddSalarieComponent,
    EditSalarieComponent,
    SalarieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
