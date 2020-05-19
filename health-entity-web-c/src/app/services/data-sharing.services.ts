import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../models/user-data';

@Injectable()
export class DataSharingService {b
    public isUserLoggedIn = new BehaviorSubject<UserData>(this.userData);

    set userData(userData: UserData) {
      localStorage.setItem('role', userData.role);
      localStorage.setItem('isLogin', String(userData.isLogin));
      this.isUserLoggedIn.next(new UserData(userData.role, userData.isLogin));
    }

    get userData() {
      const role = localStorage.getItem('role');
      const isLogin = localStorage.getItem('isLogin');
      return new UserData(role, (isLogin === 'true'));
    }

}
