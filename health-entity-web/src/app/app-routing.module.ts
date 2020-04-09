import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { PathNotFoundComponent } from './components/shared/path-not-found/path-not-found.component';
import { LoginPatientComponent } from './components/patient/login-patient/login-patient.component';
import { LoginPractitionerComponent } from './components/practitioner/login-practitioner/login-practitioner.component';
import { LoginAdministratorComponent } from './components/administrator/login-administrator/login-administrator.component';
import { SignupPatientComponent } from './components/patient/signup-patient/signup-patient.component';
import { SignupPractitionerComponent } from './components/practitioner/signup-practitioner/signup-practitioner.component';
import { SignupAdministrativeAssistantComponent } from './components/administrative-assistant/signup-administrative-assistant/signup-administrative-assistant.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent},
  { path: 'login-patient', component:  LoginPatientComponent},
  { path: 'login-practitioner', component: LoginPractitionerComponent},
  { path: 'login-administrator', component: LoginAdministratorComponent},
  { path: 'admin/signup-patient', component: SignupPatientComponent},
  { path: 'admin/signup-practitioner', component: SignupPractitionerComponent},
  { path: 'admin/signup-administrative-assistant', component: SignupAdministrativeAssistantComponent},
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
