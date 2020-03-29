import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Practitioner } from '../models/practitioner';

@Injectable({
  providedIn: 'root'
})

export class PractitionerService {
  constructor(private http: HttpClient) { }

  urlBase = 'http:/localhost:8080/practitioner';

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
        withCredentials: true,
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
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

  findByEmailPassword(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.get<null>(`${this.urlBase}/find-by-email-and-password`, params);
  }

  findByIdentification(type: string, id: number) {
    const params = new HttpParams()
      .set('type', type)
      .set('id', id.toString());
    return this.get<Practitioner>(`${this.urlBase}/find-by-identification)`, params);
  }

  createPractitioner(practitioner: Practitioner) {
    return this.post<Practitioner>(this.urlBase, practitioner);
  }
}
