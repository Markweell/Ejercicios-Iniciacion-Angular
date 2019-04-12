import { Component, OnInit } from '@angular/core';
import { ConexionApiSpotifyService } from 'src/app/services/conexion-api-spotify.service';

@Component({
  selector: 'ap-home-spoti',
  templateUrl: './home-spoti.component.html',
  styleUrls: ['./home-spoti.component.css']
})
export class HomeSpotiComponent implements OnInit {
  elementos;
  constructor(private conexionService: ConexionApiSpotifyService) { }

  ngOnInit() {
    this.conexionService.getElementos().subscribe((val) => {
      this.elementos = val;
    },(err) => {
      console.error(err);
    });
  }

}
