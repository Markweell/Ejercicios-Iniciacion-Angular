import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiSpotifyService {
  private readonly  url = 'https://restcountries.eu/rest/v2/lang/es';

  constructor(private httpClient: HttpClient) {

   }
   getElementos(): Observable<any>{
     return this.httpClient.get(this.url);
   }
}
