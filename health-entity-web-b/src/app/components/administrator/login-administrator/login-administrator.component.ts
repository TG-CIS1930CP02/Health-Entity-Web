import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { Router } from '@angular/router';
import { Administrator } from 'app/models/administrator';
import { OptionsList } from '../../../models/options-lists';
import { RoleEnum } from 'app/models/role-enum';
import { AuthenticationModeEnum } from 'app/models/authentication-mode-enum';
import { environment } from 'environments/environment';
import { DataSharingService } from '../../../services/data-sharing.services';
import { UserData } from 'app/models/user-data';

@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.component.html',
  styleUrls: ['./login-administrator.component.scss']
})
export class LoginAdministratorComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private dataSharingService: DataSharingService) { }

  administrator: Administrator = new Administrator();

  idType = 'Selecciona un tipo';
  id: number;
  password: string;
  hide = true;

  incorrectLogin = false;
  invalidAuthorities = false;
  checked = false;

  options = OptionsList.IdentificationTypes;

  ngOnInit(): void { }

  login() {
    this.loginService.loginFingerprint(this.idType, this.id, this.password, 'fingerprint_test')
      .subscribe(result => {
        const role = this.getRole(result.token, AuthenticationModeEnum.PASSWORD_AND_FINGERPRINT_AUTHENTICATION);
        if (role == null) {
          this.invalidAuthorities = true;
        } else {
          this.incorrectLogin = false;
          localStorage.setItem('token', result.token);
          this.dataSharingService.userData = new UserData(role, true);
          if (role === RoleEnum.ADMINISTRATOR) {
            this.router.navigate(['admin/home']);
          } else if (role === RoleEnum.ADMINISTRATIVE_ASSISTANT) {
            this.router.navigate(['admin-assistant/home']);
          }
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

  getRole(token: string, authenticationMode: AuthenticationModeEnum): RoleEnum {
    const parts = token.split('.');
    const payload = parts[1];
    const decodedPayload = atob(payload);
    const payloadObject = JSON.parse(decodedPayload);
    if (payloadObject.authorities.includes(authenticationMode) && payloadObject.authorities.includes(environment.healthEntityAuthority)) {
      if (payloadObject.authorities.includes(RoleEnum.ADMINISTRATOR)) {
        return RoleEnum.ADMINISTRATOR;
      }
      if (payloadObject.authorities.includes(RoleEnum.ADMINISTRATIVE_ASSISTANT)) {
        return RoleEnum.ADMINISTRATIVE_ASSISTANT;
      }
    }
    return null;
  }

}
