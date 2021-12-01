import { Pipe, PipeTransform } from '@angular/core';
import { Patients } from './patients';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Patients[], searchTerm: string): Patients[] {
    // console.log(args);
    if(!value || !searchTerm) {
      return value;
    }
    return value.filter(item => item.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
