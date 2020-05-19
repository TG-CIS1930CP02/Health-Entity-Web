import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Person } from 'app/models/person';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'app/models/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {}

  login(idType: string, id: number, password: string): Observable<User> {
    const formHeaders = new HttpHeaders();
    formHeaders.append('Content-Type', 'application/json');
    const body = {
      healthEntityId: environment.healthEntityId,
      identificationType: idType,
      identificationNumber: id.toString(),
      password: password
    }
    return this.http.post<User>(environment.remoteAuthenticationServerUrl + 'login-password', body, {
      headers: formHeaders,
      withCredentials: false
    });
  }

  loginFingerprint(idType: string, id: number, password: string, fingerprint: string): Observable<User> {
    const formHeaders = new HttpHeaders();
    formHeaders.append('Content-Type', 'application/json');
    const body = {
      healthEntityId: environment.healthEntityId,
      identificationType: idType,
      identificationNumber: id.toString(),
      password: password,
      fingerprint: fingerprint
    }
    return this.http.post<User>(environment.remoteAuthenticationServerUrl + 'login-password-and-fingerprint', body, {
      headers: formHeaders,
      withCredentials: false
    });
  }

  logOut() {
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true
    });
  }
}
