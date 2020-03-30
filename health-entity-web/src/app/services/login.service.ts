import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {}

  login(idType: string, id: number, password: string) {
    const formHeaders = new HttpHeaders();
    formHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const formParams = new HttpParams()
      .set('id_type', idType)
      .set('id_number', id.toString())
      .set('password', password);
    return this.http.post('http://localhost:8080/login', null, {
      headers: formHeaders,
      params: formParams,
      withCredentials: true
    });
  }

  logOut() {
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true
    });
  }
}
