import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitaze: DomSanitizer){}

  transform(value: string, url: string): any {
    return this.domSanitaze.bypassSecurityTrustResourceUrl(url + value);
  }

}
