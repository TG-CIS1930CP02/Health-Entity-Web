import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '../../services/administrator.service';
import { LoginService } from 'app/services/login.service';
import { Router } from '@angular/router';
import { Administrator } from 'app/models/administrator';

@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.component.html',
  styleUrls: ['./login-administrator.component.css']
})
export class LoginAdministratorComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private administratorService: AdministratorService) { }

  administrator: Administrator = new Administrator();

  email: string;
  password: string;

  incorrectLogin = false;

  ngOnInit(): void { }

  login() {
    console.log('jm');
    this.loginService.login(this.email, this.password)
      .subscribe(data => {
        this.incorrectLogin = false;
        this.administratorService.findByEmailPassword(this.email, this.password)
          .subscribe(result => {
            this.administrator = result;
            this.router.navigate(['administrator/home']);
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
