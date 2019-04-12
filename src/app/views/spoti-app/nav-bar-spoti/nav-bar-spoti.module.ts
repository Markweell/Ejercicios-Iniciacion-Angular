import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarSpotiComponent } from './nav-bar-spoti.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarSpotiComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavBarSpotiComponent]
})
export class NavBarSpotiModule { }
