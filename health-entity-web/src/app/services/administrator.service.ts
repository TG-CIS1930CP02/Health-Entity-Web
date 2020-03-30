import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  constructor(private http: HttpClient) { }

  urlBase = 'http:/localhost:8080/administrator';

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
}
