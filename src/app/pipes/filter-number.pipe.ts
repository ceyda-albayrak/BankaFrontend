import { Pipe, PipeTransform } from '@angular/core';
import { Musteri } from '../models/musteri';
@Pipe({
  name: 'filterNumber'
})
export class FilterNumberPipe implements PipeTransform {

  transform(value: Musteri[], filterNoText:string): Musteri[] {
    filterNoText=filterNoText?filterNoText.valueOf():''
      return filterNoText?value.filter((p:Musteri)=>p.musteriNo.toString().indexOf(filterNoText)!==-1):value;
    }
  

}
