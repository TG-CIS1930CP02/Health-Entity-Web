import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { Procedure } from 'app/models/procedure';

@Injectable({
  providedIn: 'root'
})

export class ProcedureService {
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

  createProcedure(type: string, id: number, procedure: Procedure) {
    return this.post<Procedure>(`${environment.healthEntityServerUrl}${type}/${id}/procedure`, procedure);
  }
}
