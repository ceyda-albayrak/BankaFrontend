import { Pipe, PipeTransform } from '@angular/core';
import { Musteri } from '../models/musteri';

@Pipe({
  name: 'filterUnvan'
})
export class FilterUnvanPipe implements PipeTransform {

  transform(value: Musteri[], filterUnvanText:string): Musteri[] {
    filterUnvanText=filterUnvanText?filterUnvanText.toLocaleLowerCase():""
      return filterUnvanText?value.filter((p:Musteri)=>p.unvan.toLocaleLowerCase().indexOf(filterUnvanText)!==-1):value;
    }

}
