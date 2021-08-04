import { Pipe, PipeTransform } from '@angular/core';
import { Musteri } from '../models/musteri';


@Pipe({
  name: 'filterDurum'
})
export class FilterDurumPipe implements PipeTransform {

  transform(value: Musteri[], filterDurumText:string): Musteri[] {
    filterDurumText=filterDurumText?filterDurumText.toLocaleLowerCase():""
      return filterDurumText?value.filter((p:Musteri)=>p.gercekTuzel.toLocaleLowerCase().indexOf(filterDurumText)!==-1):value;
    }

}
