import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiSpotifyService {
  private readonly  url = 'https://api.spotify.com/v1/browse/new-releases';

  constructor(private httpClient: HttpClient) {

   }
   getElementos(): Observable<any>{
     return this.httpClient.get(this.url, { headers : new HttpHeaders({
        Authorization : 'Bearer BQA7v5DPyTNbHSsSOmIjIM6lpRwtqqY7S3eMYgPYOP0PeNwZ-WGOGfIVw1t69TrzfaJ1DA2G905Q7IlehzU'
      })});
   }
}
