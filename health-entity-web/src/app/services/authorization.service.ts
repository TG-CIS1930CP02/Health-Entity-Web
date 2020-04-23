import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../models/patient';
import { environment } from 'environments/environment';
import { TokenAuthorization } from 'app/models/token-authorization';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  constructor(private http: HttpClient) { }


  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError(error);
  }

  private get<T>(url, parameters: HttpParams = null): Observable<T> {
    console.log('get:', url);
    return this.http
      .get<T>(url, { withCredentials: false, params: parameters,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      })
      .pipe(catchError(this.handleError));
  }

  private post<T>(url, data: any): Observable<T> {
    console.log('post:', url);
    return this.http
      .post<T>(url, data, {
        withCredentials: false,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })
      })
      .pipe(catchError(this.handleError));
  }

  private put<T>(url, data: T): Observable<T> {
    console.log('put:', url);
    return this.http
      .put<T>(url, data, { withCredentials: true })
      .pipe(catchError(this.handleError));
  }

  private delete<T>(url): Observable<T> {
    console.log('delete:', url);
    return this.http
      .delete<T>(url, { withCredentials: true })
      .pipe(catchError(this.handleError));
  }

  authorizatePatient(type: string, id: number, fingerprint: string) {
    return this.post<any>(`${environment.remoteAuthenticationServerUrl}user/${type}/${id}/authorization/role_patient/${environment.healthEntityId}`, fingerprint);
  }
  authorizateDoctor(type: string, id: number, fingerprint: string) {
    return this.post<any>(`${environment.remoteAuthenticationServerUrl}user/${type}/${id}/authorization/role_doctor/${environment.healthEntityId}`, fingerprint);
  }
  authorizateNurse(type: string, id: number, fingerprint: string) {
    return this.post<any>(`${environment.remoteAuthenticationServerUrl}user/${type}/${id}/authorization/role_nurse/${environment.healthEntityId}`, fingerprint);
  }
  authorizateAdministrativeAssistant(type: string, id: number, fingerprint: string) {
    return this.post<any>(`${environment.remoteAuthenticationServerUrl}user/${type}/${id}/authorization/role_administrative_assistant/${environment.healthEntityId}`, fingerprint);
  }

  getAuthorizationForPatientInformation(type: string, id: number) {
    return this.get<TokenAuthorization>(`${environment.remoteAuthenticationServerUrl}authorization/patient/${type}/${id}`, null);
  }

}
