import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PathNotFoundComponent } from './components/shared/path-not-found/path-not-found.component';
import { HomePractitionerComponent } from './components/practitioner/home-practitioner/home-practitioner.component';
import { HomePatientComponent } from './components/patient/home-patient/home-patient.component';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginPatientComponent } from './components/patient/login-patient/login-patient.component';
import { LoginPractitionerComponent } from './components/practitioner/login-practitioner/login-practitioner.component';
import { LoginAdministratorComponent } from './components/administrator/login-administrator/login-administrator.component';
import { SignupPractitionerComponent } from './components/practitioner/signup-practitioner/signup-practitioner.component';
import { DetailsPractitionerComponent } from './components/practitioner/details-practitioner/details-practitioner.component';
import { SignupPatientComponent } from './components/patient/signup-patient/signup-patient.component';
import { DetailsPatientComponent } from './components/patient/details-patient/details-patient.component';
import { SignupAdministrativeAssistantComponent } from './components/administrative-assistant/signup-administrative-assistant/signup-administrative-assistant.component';
import { HomeAdministratorComponent } from './components/administrator/home-administrator/home-administrator.component';
import { DetailsFormPatientComponent } from './components/patient/details-form-patient/details-form-patient.component';
import { HomeAdministrativeAssistantComponent } from './components/administrative-assistant/home-administrative-assistant/home-administrative-assistant.component';
import { CreateAllergyIntoleranceComponent } from './components/allergy-intolerance/create-allergy-intolerance/create-allergy-intolerance.component';
import { ReadAllergyIntoleranceComponent } from './components/allergy-intolerance/read-allergy-intolerance/read-allergy-intolerance.component';
import { SearchPatientComponent } from './components/patient/search-patient/search-patient.component';
import { CreateDiagnosticReportComponent } from './components/diagnostic-report/create-diagnostic-report/create-diagnostic-report.component';
import { CreateObservationComponent } from './components/observation/create-observation/create-observation.component';
import { ReadDiagnosticReportComponent } from './components/diagnostic-report/read-diagnostic-report/read-diagnostic-report.component';
import { ReadObservationComponent } from './components/observation/read-observation/read-observation.component';
import { CreateConditionComponent } from './components/condition/create-condition/create-condition.component';
import { ReadConditionComponent } from './components/condition/read-condition/read-condition.component';
import { CreateProcedureComponent } from './components/procedure/create-procedure/create-procedure.component';
import { ReadProcedureComponent } from './components/procedure/read-procedure/read-procedure.component';
import { ResourcesComponent } from './components/practitioner/resources/resources.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginPatientComponent,
    PathNotFoundComponent,
    HomePractitionerComponent,
    HomePatientComponent,
    HomeComponent,
    LoginPractitionerComponent,
    LoginAdministratorComponent,
    SignupPractitionerComponent,
    DetailsPractitionerComponent,
    SignupPatientComponent,
    DetailsPatientComponent,
    SignupAdministrativeAssistantComponent,
    HomeAdministratorComponent,
    DetailsFormPatientComponent,
    HomeAdministrativeAssistantComponent,
    CreateAllergyIntoleranceComponent,
    ReadAllergyIntoleranceComponent,
    SearchPatientComponent,
    CreateDiagnosticReportComponent,
    CreateObservationComponent,
    ReadDiagnosticReportComponent,
    ReadObservationComponent,
    CreateConditionComponent,
    ReadConditionComponent,
    CreateProcedureComponent,
    ReadProcedureComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
