import { Pipe, PipeTransform } from '@angular/core';
import { Musteri } from '../models/musteri';
@Pipe({
  name: 'filterTc'
})
export class FilterTcPipe implements PipeTransform {

  transform(value: Musteri[], filterTcText:string): Musteri[] {
    filterTcText=filterTcText?filterTcText.toLocaleLowerCase():""
      return filterTcText?value.filter((p:Musteri)=>p.tckn.indexOf(filterTcText)!==-1):value;
    }

}
