import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { AllergyIntolerance } from 'app/models/allergy-intolerance';

@Injectable({
  providedIn: 'root'
})

export class AllergyIntolleranceService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError(error);
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

  createAllergyIntolerance(type: string, id: number, allergyIntolerance: AllergyIntolerance) {
    return this.post<AllergyIntolerance>(`${environment.healthEntityServerUrl}${type}/${id}/allergy-intolerance`, allergyIntolerance);
  }
}
