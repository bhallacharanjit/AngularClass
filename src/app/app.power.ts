import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'power'
})
export class PowerPipe implements PipeTransform {
   transform(val : number) : number {
      return Math.pow(val,5);
   }
}