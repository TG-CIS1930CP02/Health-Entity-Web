import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathNotFoundComponent } from './shared/path-not-found/path-not-found.component';
import { LoginComponent } from './patient/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/patientLogin' },
  { path: 'patientLogin', component:  LoginComponent},
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
