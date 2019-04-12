import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotiAppRoutingModule } from './spoti-app-routing.module';
import { SpotiAppComponent } from '../spoti-app/spoti-app.component';

@NgModule({
  declarations: [SpotiAppComponent],
  imports: [
    CommonModule,
    SpotiAppRoutingModule
  ]
})
export class SpotiAppModule { }
