// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

import { HomeComponent } from './Components/home/home.component';
import { MainNavComponent } from './Components/main-nav/main-nav.component';

import { SalarieComponent } from './Components/salarie/salarie.component';
import { AddSalarieComponent } from './Components/salarie/add-salarie/add-salarie.component';
import { EditSalarieComponent } from './Components/salarie/edit-salarie/edit-salarie.component';
import { SalarieDetailsComponent } from './Components/salarie/salarie-details/salarie-details.component';

import { SharedComponent } from './Components/shared/shared.component';

import { SituationFamilialComponent } from './Components/situation-familial/situation-familial.component';


import { PfeApiService } from './Services/pfe-api.service';
import { AuthService } from './Services/auth.service';

// Promotion
import { PromotionComponent } from './Components/promotion/promotion.component';
import { AddPromotionComponent } from './Components/promotion/add-promotion/add-promotion.component';
import { EditPromotionComponent } from './Components/promotion/edit-promotion/edit-promotion.component';

// Absence Legal
import { AbsenceLegalComponent } from './Components/absence-legal/absence-legal.component';
import { AddAbsenceComponent } from './Components/absence-legal/add-absence/add-absence.component';
import { EditAbsenceComponent } from './Components/absence-legal/edit-absence/edit-absence.component';

// Accident
import { AccidentComponent } from './Components/accident/accident.component';
import { AddAccidentComponent } from './Components/accident/add-accident/add-accident.component';
import { EditAccidentComponent } from './Components/accident/edit-accident/edit-accident.component';

// Emploi Anterieur
import { EmploiAnterieurComponent } from './Components/emploi-anterieur/emploi-anterieur.component';
import { AddEmploiAnterieurComponent } from './Components/emploi-anterieur/add-emploi-anterieur/add-emploi-anterieur.component';
import { EditEmploiAnterieurComponent } from './Components/emploi-anterieur/edit-emploi-anterieur/edit-emploi-anterieur.component';

// Instruction
import { InstructionComponent } from './Components/instruction/instruction.component';
import { AddInstructionComponent } from './Components/instruction/add-instruction/add-instruction.component';
import { EditInstructionComponent } from './Components/instruction/edit-instruction/edit-instruction.component';

// Sanction
import { SanctionComponent } from './Components/sanction/sanction.component';
import { AddSanctionComponent } from './Components/sanction/add-sanction/add-sanction.component';
import { EditSanctionComponent } from './Components/sanction/edit-sanction/edit-sanction.component';

// Suivi
import { SuiviProComponent } from './Components/suivi-pro/suivi-pro.component';
import { AddSuiviComponent } from './Components/suivi-pro/add-suivi/add-suivi.component';
import { EditSuiviComponent } from './Components/suivi-pro/edit-suivi/edit-suivi.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EntrepriseComponent } from './Components/entreprise/entreprise.component';
import { AddEntrepriseComponent } from './Components/entreprise/add-entreprise/add-entreprise.component';
import { EditEntrepriseComponent } from './Components/entreprise/edit-entreprise/edit-entreprise.component';
import { EntrepriseDetailsComponent } from './Components/entreprise/entreprise-details/entreprise-details.component';
import { EditSituationFamilialComponent } from './Components/situation-familial/edit-situation-familial/edit-situation-familial.component';



// FireBase
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { environment } from '../environments/environment';


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
    SharedComponent,
    PromotionComponent,
    SanctionComponent,
    SituationFamilialComponent,
    EmploiAnterieurComponent,
    InstructionComponent,
    AbsenceLegalComponent,
    SuiviProComponent,
    AccidentComponent,
    AddPromotionComponent,
    EditPromotionComponent,
    AddAbsenceComponent,
    EditAbsenceComponent,
    EditAccidentComponent,
    AddAccidentComponent,
    AddEmploiAnterieurComponent,
    EditEmploiAnterieurComponent,
    EditInstructionComponent,
    AddInstructionComponent,
    AddSanctionComponent,
    EditSanctionComponent,
    AddSuiviComponent,
    EditSuiviComponent,
    DashboardComponent,
    EntrepriseComponent,
    AddEntrepriseComponent,
    EditEntrepriseComponent,
    EntrepriseDetailsComponent,
    EditSituationFamilialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    BrowserModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
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

    
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule // storage
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    PfeApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }