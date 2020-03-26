import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PathNotFoundComponent } from './shared/path-not-found/path-not-found.component';
import { HomePractitionerComponent } from './practitioner/home-practitioner/home-practitioner.component';
import { HomePatientComponent } from './patient/home-patient/home-patient.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginPatientComponent } from './patient/login-patient/login-patient.component';
import { LoginPractitionerComponent } from './practitioner/login-practitioner/login-practitioner.component';
import { SignupPractitionerComponent } from './practitioner/signup-practitioner/signup-practitioner.component';

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
    SignupPractitionerComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
