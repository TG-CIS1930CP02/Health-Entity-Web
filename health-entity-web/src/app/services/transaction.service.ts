import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Transaction } from '../models/transaction';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
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
      .delete<T>(url, { withCredentials: false,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        })  })
      .pipe(catchError(this.handleError));
  }

  getMedicalRecords(idType: string, idNumber: number) {
    return this.get<Transaction[]>(`${environment.healthEntityServerUrl}transactions/medical-history/patient/${idType}/${idNumber}`);
  }

  getTransactions(idType: string, idNumber: number) {
    return this.get<Transaction[]>(`${environment.healthEntityServerUrl}transactions/patient/${idType}/${idNumber}`);
  }

  getMedicalRecordsEmergency(idType: string, idNumber: number) {
    return this.get<Transaction[]>(`${environment.healthEntityServerUrl}transactions/emergency-medical-history/patient/${idType}/${idNumber}`);
  }
}
