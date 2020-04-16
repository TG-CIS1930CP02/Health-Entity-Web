import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

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
    CreateDiagnosticReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
