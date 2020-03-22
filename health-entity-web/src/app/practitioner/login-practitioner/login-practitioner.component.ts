import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Practitioner } from '../../models/practitioner';
import { PractitionerService } from '../../services/practitioner.service';

@Component({
  selector: 'app-login-practitioner',
  templateUrl: './login-practitioner.component.html',
  styleUrls: ['./login-practitioner.component.css']
})
export class LoginPractitionerComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private practitionerService: PractitionerService) { }

  practitioner: Practitioner = null;
  email: string = null;
  password: string = null;

  incorrectLogin = false;

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.email, this.password)
      .subscribe(data => {
        this.incorrectLogin = false;
        this.practitionerService.findByEmailPassword(this.email, this.password)
          .subscribe(result => {
            this.practitioner = result;
            this.router.navigate(['practitioner/home']); // TODO agregar id del usuario
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
