import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipeComponent } from './pipe.component';
import { CapitalizePipe } from 'src/app/pipes/capitalize.pipe';
import { DomSeguroPipe } from 'src/app/pipes/dom-seguro.pipe';
import { PasswordPipe } from 'src/app/pipes/password.pipe';


@NgModule({
  declarations: [
    PipeComponent,
    CapitalizePipe,
    DomSeguroPipe,
    PasswordPipe
  ],
  imports: [
    CommonModule,
    PipeRoutingModule
  ]

})
export class PipeModule { }
