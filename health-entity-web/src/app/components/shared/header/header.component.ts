import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth-service';
import { DataSharingService } from 'app/services/data-sharing.services';
import { UserData } from 'app/models/user-data';
import { RoleEnum } from 'app/models/role-enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;
  role: string;
  roles = RoleEnum;

  constructor(private authService: AuthService, private dataSharingService: DataSharingService) {
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isLogin = value.isLogin;
      this.role = value.role;
    });
  }

  ngOnInit(): void { }

  logout() {
    this.dataSharingService.userData = new UserData('', false);
    this.authService.logOut();
  }
}
