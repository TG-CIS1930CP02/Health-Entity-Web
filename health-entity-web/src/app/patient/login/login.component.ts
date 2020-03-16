import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private patientService: PatientService) { }

  patient: Patient = null;
  email: string = null;
  password: string = null;

  incorrectLogin = false;

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.email, this.password)
      .subscribe(data => {
        this.incorrectLogin = false;
        this.patientService.findByEmailPassword(this.email, this.password)
          .subscribe(result => {
            this.patient = result;

          },
          error => {
            console.error(error);
        });
      },
      error => {
        this.incorrectLogin = true;
        console.error(error);
      });
    }
}
