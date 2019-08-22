import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hurz'
})
export class HurzPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value + '  HURZ!';
  }
}
