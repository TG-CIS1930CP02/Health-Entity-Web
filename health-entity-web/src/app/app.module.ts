import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { PathNotFoundComponent } from './shared/path-not-found/path-not-found.component';
import { HomePractitionerComponent } from './practitioner/home-practitioner/home-practitioner.component';
import { HomePatientComponent } from './patient/home-patient/home-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PathNotFoundComponent,
    HomePractitionerComponent,
    HomePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
