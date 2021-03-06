import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../models/patient';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  constructor(private http: HttpClient) { }

  urlBaseRas = 'http:/localhost:8080/patients';
  urlBaseEntity = 'http:/localhost:8080/patients';

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError('An error has occurred');
  }

  private get<T>(url, parameters: HttpParams = null): Observable<T> {
    console.log('get:', url);
    return this.http
      .get<T>(url, { withCredentials: true, params: parameters })
      .pipe(catchError(this.handleError));
  }

  private post<T>(url, data: T): Observable<T> {
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

  findByIdentification(type: string, id: number) {
    const params = new HttpParams()
      .set('type', type)
      .set('id', id.toString());
    return this.get<Patient>(`${this.urlBaseRas}/find-by-identification)`, params);
  }

  createPatient(patient: Patient) {
    return this.post<Patient>(`${environment.healthEntityServerUrl}patient`, patient);
  }
}
