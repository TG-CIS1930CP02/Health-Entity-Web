import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { PathNotFoundComponent } from './components/shared/path-not-found/path-not-found.component';
import { LoginPatientComponent } from './components/patient/login-patient/login-patient.component';
import { LoginPractitionerComponent } from './components/practitioner/login-practitioner/login-practitioner.component';
import { LoginAdministratorComponent } from './components/administrator/login-administrator/login-administrator.component';
import { SignupPractitionerComponent } from './components/practitioner/signup-practitioner/signup-practitioner.component';
import { SignupAdministrativeAssistantComponent } from './components/administrative-assistant/signup-administrative-assistant/signup-administrative-assistant.component';
import { HomeAdministratorComponent } from './components/administrator/home-administrator/home-administrator.component';
import { HomePractitionerComponent } from './components/practitioner/home-practitioner/home-practitioner.component';
import { HomeAdministrativeAssistantComponent } from './components/administrative-assistant/home-administrative-assistant/home-administrative-assistant.component';
import { HomePatientComponent } from './components/patient/home-patient/home-patient.component';
import { CreateAllergyIntoleranceComponent } from './components/allergy-intolerance/create-allergy-intolerance/create-allergy-intolerance.component';
import { ReadAllergyIntoleranceComponent } from './components/allergy-intolerance/read-allergy-intolerance/read-allergy-intolerance.component';
import { SignupPatientComponent } from './components/patient/signup-patient/signup-patient.component';
import { SearchPatientComponent } from './components/patient/search-patient/search-patient.component';
import { CreateDiagnosticReportComponent } from './components/diagnostic-report/create-diagnostic-report/create-diagnostic-report.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'login-patient', component:  LoginPatientComponent },
  { path: 'login-practitioner', component: LoginPractitionerComponent },
  { path: 'login-administrator', component: LoginAdministratorComponent },
  { path: 'admin/signup-practitioner', component: SignupPractitionerComponent },
  { path: 'admin/signup-administrative-assistant', component: SignupAdministrativeAssistantComponent },
  { path: 'admin-assistant/signup-patient', component: SignupPatientComponent },
  { path: 'admin/home', component: HomeAdministratorComponent },
  { path: 'practitioner/home', component: HomePractitionerComponent },
  { path: 'admin-assistant/home', component: HomeAdministrativeAssistantComponent },
  { path: 'patient/home', component: HomePatientComponent },
  { path: 'practitioner/record-resource/allergy', component: CreateAllergyIntoleranceComponent },
  { path: 'practitioner/view-resource/allergy', component: ReadAllergyIntoleranceComponent },
  { path: 'practitioner/record-resource/diagnostic', component: CreateDiagnosticReportComponent },
  { path: 'practitioner/view-resource/diagnostic', component: CreateDiagnosticReportComponent },
  { path: 'practitioner/search-patient', component: SearchPatientComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
