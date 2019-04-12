import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    value = value.toLowerCase();
    let nombres = value.split(" ");
    for (let i in nombres){
      nombres[i]= nombres[i][0].toUpperCase()+nombres[i].substr(1)
    }

    return nombres.join(" ");
  }
}
