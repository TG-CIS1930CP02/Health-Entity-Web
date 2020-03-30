import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { Router } from '@angular/router';
import { PatientService } from 'app/services/patient.service';
import { Patient } from 'app/models/patient';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private patientService: PatientService) { }

  patient: Patient = new Patient();

  idType: string;
  id: number;
  password: string;

  incorrectLogin = false;

  options = [
    { name: 'Cédula de Ciudadanía', value: 'CC' },
    { name: 'Cédula de Extranjería', value: 'CE' },
    { name: 'Registro Civil', value: 'RC' },
    { name: 'Tarjeta de Identidad', value: 'TI' }
  ];

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.idType, this.id, this.password)
      .subscribe(data => {
        this.incorrectLogin = false;
        this.patientService.findByIdentification(this.idType, this.id)
          .subscribe(result => {
            this.patient = result;
            this.router.navigate(['patient/home']); // TODO agregar id del usuario
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

  close() {
    this.incorrectLogin = false;
  }
}
