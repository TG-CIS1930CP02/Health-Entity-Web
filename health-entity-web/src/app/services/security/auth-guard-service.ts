import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
      const token = localStorage.getItem('token');
      const expectedAuthorities = route.data.expectedAuthorities;
      if (token == null){
        this.router.navigate(['not-authorized']);
        return false;
      }
      if (!this.auth.isAuthenticated() && !this.hasRole(token, expectedAuthorities)) {
        this.router.navigate(['not-authorized']);
        return false;
      }
      return true;
    }

    hasRole(token: string, expectedAuthorities: string[]): boolean{
      const parts = token.split('.');
      const payload = parts[1];
      const decodedPayload = atob(payload);
      const payloadObject = JSON.parse(decodedPayload);
      if (payloadObject.authorities.includes(expectedAuthorities)){
        return true;
      }
      return false;
    }
}
