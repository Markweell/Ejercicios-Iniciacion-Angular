import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeSpotiRoutingModule } from './home-spoti-routing.module';
import { HomeSpotiComponent } from './home-spoti.component';
import { ConexionApiSpotifyService } from 'src/app/services/conexion-api-spotify.service';

@NgModule({
  declarations: [HomeSpotiComponent],
  imports: [
    CommonModule,
    HomeSpotiRoutingModule
  ],
  exports: [HomeSpotiComponent]
})
export class HomeSpotiModule { }
