import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { DiagnosticReport } from 'app/models/diagnostic-report';

@Injectable({
  providedIn: 'root'
})

export class DiagnosticReportService {
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

  createDiagnosticReport(type: string, id: number, diagnosticReport: DiagnosticReport) {
    return this.post<DiagnosticReport>(`${environment.healthEntityServerUrl}${type}/${id}/diagnostic-report`, diagnosticReport);
  }
}
