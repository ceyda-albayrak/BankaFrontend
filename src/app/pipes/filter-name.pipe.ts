import { Pipe, PipeTransform } from '@angular/core';
import { Musteri } from '../models/musteri';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(value: Musteri[], filterNameText:string): Musteri[] {
    filterNameText=filterNameText?filterNameText.toLocaleLowerCase():""
      return filterNameText?value.filter((p:Musteri)=>p.ad.toLocaleLowerCase().indexOf(filterNameText)!==-1):value;
    }
  
}
