import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotiAppRoutingModule } from './spoti-app-routing.module';
import { SpotiAppComponent } from '../spoti-app/spoti-app.component';
import { NavBarSpotiModule } from './nav-bar-spoti/nav-bar-spoti.module';

@NgModule({
  declarations: [SpotiAppComponent],
  imports: [
    CommonModule,
    SpotiAppRoutingModule,
    NavBarSpotiModule
    ]
})
export class SpotiAppModule { }
