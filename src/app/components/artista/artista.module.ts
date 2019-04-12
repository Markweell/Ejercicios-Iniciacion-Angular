import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaComponent } from './artista.component';

@NgModule({
  declarations: [ArtistaComponent],
  imports: [
    CommonModule
  ],
  exports: [ArtistaComponent]
})
export class ArtistaModule { }
