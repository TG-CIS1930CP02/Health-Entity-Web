import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { Practitioner } from '../../../models/practitioner';
import { PractitionerService } from '../../../services/practitioner.service';
import { OptionsList } from '../../../models/options-lists';

@Component({
  selector: 'app-login-practitioner',
  templateUrl: './login-practitioner.component.html',
  styleUrls: ['./login-practitioner.component.css']
})
export class LoginPractitionerComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private practitionerService: PractitionerService) { }

  practitioner: Practitioner = new Practitioner(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  idType = 'Selecciona un tipo';
  id: number;
  password: string;

  incorrectLogin = false;

  options = OptionsList.identificationTypes;

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.idType, this.id, this.password)
      .subscribe(data => {
        this.incorrectLogin = false;
        this.practitionerService.findByIdentification(this.idType, this.id)
          .subscribe(result => {
            this.practitioner = result;
            this.router.navigate(['practitioner/home']);
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