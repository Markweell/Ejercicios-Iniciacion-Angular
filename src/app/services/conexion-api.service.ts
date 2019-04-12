import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService{

  private readonly  url = 'http://localhost/proyectos/ApiRest-PhP/api_php/public/api/v1/';

  constructor(private httpClient: HttpClient) {}

  getUsuarios(): Observable<any> {
    // return this.httpClient.get(this.url + 'usuarios', { headers : new HttpHeaders({
    //   'Token': 'auth'
    // })});
    return this.httpClient.get(this.url + 'usuarios');
  }
  getUsuario(id): Observable<any> {
    return this.httpClient.get(this.url + 'usuarios/' + id);
  }
}
