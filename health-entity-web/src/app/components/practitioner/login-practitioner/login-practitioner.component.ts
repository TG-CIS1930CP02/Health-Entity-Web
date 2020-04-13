import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { Practitioner } from '../../../models/practitioner';
import { PractitionerService } from '../../../services/practitioner.service';
import { OptionsList } from '../../../models/options-lists';
import { AuthenticationModeEnum } from 'app/models/authentication-mode-enum';
import { RoleEnum } from 'app/models/role-enum';
import { environment } from 'environments/environment';

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
  hide = true;

  incorrectLogin = false;
  invalidAuthorities = false;
  checked = false;

  options = OptionsList.identificationTypes;

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.idType, this.id, this.password)
      .subscribe(result => {
        const role = this.getRole(result.token, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION);
        if (role == null)
          this.invalidAuthorities = true;
        else{
          this.incorrectLogin = false;
          localStorage.setItem('token', result.token);
          if (role === RoleEnum.DOCTOR)
            this.router.navigate(['practitioner/home']);
          else if (role === RoleEnum.NURSE)
            this.router.navigate(['practitioner/home']);
        }
      },
      error => {
        this.incorrectLogin = true;
        console.error(error);
      });
  }

  close() {
    this.incorrectLogin = false;
  }

  getRole(token: string, authenticationMode: AuthenticationModeEnum): RoleEnum{
    const parts = token.split('.');
    const payload = parts[1];
    const decodedPayload = atob(payload);
    const payloadObject = JSON.parse(decodedPayload);
    if (payloadObject.authorities.includes(authenticationMode) && payloadObject.authorities.includes(environment.healthEntityAuthority)){
      if (payloadObject.authorities.includes(RoleEnum.DOCTOR))
        return RoleEnum.DOCTOR;
      if (payloadObject.authorities.includes(RoleEnum.NURSE))
        return RoleEnum.NURSE;
    }
    return null;
  }
}
