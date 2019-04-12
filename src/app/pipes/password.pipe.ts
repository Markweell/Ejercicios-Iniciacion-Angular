import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
  transform(value: any, visible: boolean = false): any {
    return (visible) ? value : value.replace(/\w/g, '*');
  }
}
