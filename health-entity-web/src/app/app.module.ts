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
import { LoginComponent } from './patient/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PathNotFoundComponent,
    HomePractitionerComponent,
    HomePatientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
