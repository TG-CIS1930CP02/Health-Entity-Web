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
import { SignupPatientComponent } from './components/patient/signup-patient/signup-patient.component';
import { SearchPatientComponent } from './components/patient/search-patient/search-patient.component';
import { ViewResourcesComponent } from './components/resources/view-resources/view-resources.component';
import { CreateResourcesComponent } from './components/resources/create-resources/create-resources.component';
import { RoleGuardService } from './services/security/auth-guard.service';
import { RoleEnum } from './models/role-enum';
import { NotAuthorizedComponent } from './components/shared/not-authorized/not-authorized.component';
import { AuthenticationModeEnum } from './models/authentication-mode-enum';
import { ListAuthorizationComponent } from './components/authorization/list-authorization/list-authorization.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'login-patient', component:  LoginPatientComponent},
  { path: 'login-practitioner', component: LoginPractitionerComponent },
  { path: 'login-administrator', component: LoginAdministratorComponent },
  { path: 'admin/home', component: HomeAdministratorComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.ADMINISTRATOR, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]} },
  { path: 'admin/signup-practitioner', component: SignupPractitionerComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.ADMINISTRATOR, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]}},
  { path: 'admin/signup-administrative-assistant', component: SignupAdministrativeAssistantComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.ADMINISTRATOR, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]}},
  { path: 'admin/authorizations', component: ListAuthorizationComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.ADMINISTRATOR, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]}},
  { path: 'admin-assistant/home', component: HomeAdministrativeAssistantComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.ADMINISTRATIVE_ASSISTANT, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]} },
  { path: 'admin-assistant/signup-patient', component: SignupPatientComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.ADMINISTRATIVE_ASSISTANT, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]} },
  { path: 'practitioner/home', component: HomePractitionerComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.DOCTOR, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]} },
  { path: 'practitioner/create-resources/:idType/:id', component: CreateResourcesComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.DOCTOR, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]} },
  { path: 'practitioner/view-resources/:idType/:id', component: ViewResourcesComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.DOCTOR, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]} },
  { path: 'practitioner/search-patient', component: SearchPatientComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.DOCTOR, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION]} },
  { path: 'patient/home', component: HomePatientComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.PATIENT, AuthenticationModeEnum.PASSWORD_AUTHENTICATED_USER]} },
  { path: 'patient/medical-record/:idType/:id', component: ViewResourcesComponent, canActivate: [RoleGuardService], data: {expectedAuthorities: [RoleEnum.PATIENT, AuthenticationModeEnum.PASSWORD_AUTHENTICATED_USER]} },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
