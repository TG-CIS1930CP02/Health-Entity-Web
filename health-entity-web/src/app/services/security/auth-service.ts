import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    public jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private router: Router) {}
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        if (token == null)
          return false;
        return !this.jwtHelper.isTokenExpired(token);
    }

    public logOut(){
      localStorage.clear();
      this.router.navigate(['home']);
    }
}
