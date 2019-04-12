import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConexionInterceptorService } from './interceptor/conexion-interceptor.service';
import { NavModule } from './components/nav/nav.module';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PasswordPipe } from './pipes/password.pipe';

  // the second parameter 'fr' is optional
  registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ConexionInterceptorService,
      multi: true
    },
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
