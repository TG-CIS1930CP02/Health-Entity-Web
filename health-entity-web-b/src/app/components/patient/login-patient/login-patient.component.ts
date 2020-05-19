import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { Router } from '@angular/router';
import { Patient } from 'app/models/patient';
import { OptionsList } from '../../../models/options-lists';
import { RoleEnum } from 'app/models/role-enum';
import { AuthenticationModeEnum } from 'app/models/authentication-mode-enum';
import { environment } from 'environments/environment';
import { DataSharingService } from '../../../services/data-sharing.services';
import { UserData } from 'app/models/user-data';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.scss']
})
export class LoginPatientComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private dataSharingService: DataSharingService) { }

  patient: Patient = new Patient(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  idType: string;
  id: number;
  password: string;
  hide = true;

  incorrectLogin = false;
  invalidAuthorities = false;

  idOptions = OptionsList.IdentificationTypes;

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.idType, this.id, this.password)
      .subscribe(result => {
        if (this.validateAuthorities(result.token, RoleEnum.PATIENT, AuthenticationModeEnum.PASSWORD_AUTHENTICATED_USER)) {
          this.incorrectLogin = false;
          this.dataSharingService.userData = new UserData(RoleEnum.PATIENT, true);
          localStorage.setItem('token', result.token);
          this.router.navigate(['patient/home']);
        } else {
          this.invalidAuthorities = true;
        }
      },
      error => {
        this.incorrectLogin = true;
        console.error(error);
      });
    }

  close() {
    this.incorrectLogin = false;
    this.invalidAuthorities = false;
  }

  validateAuthorities(token: string, role: RoleEnum, authenticationMode: AuthenticationModeEnum): boolean {
    const parts = token.split('.');
    const payload = parts[1];
    const decodedPayload = atob(payload);
    const payloadObject = JSON.parse(decodedPayload);
    if (payloadObject.authorities.includes(role) && payloadObject.authorities.includes(authenticationMode) &&
    payloadObject.authorities.includes(environment.healthEntityAuthority)) {
      return true;
    }
    return false;
  }
}
