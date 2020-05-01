import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Administrator } from '../models/administrator';
import { environment } from 'environments/environment';
import { Person } from 'app/models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError('An error has occurred');
  }

  private get<T>(url, parameters: HttpParams = null): Observable<T> {
    console.log('get:', url);
    return this.http
      .get<T>(url, { withCredentials: false, params: parameters })
      .pipe(catchError(this.handleError));
  }

  findByIdentification(type: string, id: number) {
    return this.get<Person>(`${environment.remoteAuthenticationServerUrl}person/${type}/${id}`);
  }
}
