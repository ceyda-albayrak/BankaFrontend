import { Pipe, PipeTransform } from '@angular/core';
import { Musteri } from '../models/musteri';

@Pipe({
  name: 'filterSurname'
})
export class FilterSurnamePipe implements PipeTransform {

  transform(value: Musteri[], filterSurnameText:string): Musteri[] {
    filterSurnameText=filterSurnameText?filterSurnameText.toLocaleLowerCase():""
      return filterSurnameText?value.filter((p:Musteri)=>p.soyad.toLocaleLowerCase().indexOf(filterSurnameText)!==-1):value;
    }
  

}
