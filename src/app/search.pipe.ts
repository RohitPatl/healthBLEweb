import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(args);
    if(!args) {
      return value;
    }
    return value.filter((item: { firstName: any[][]; }) => item.firstName.indexOf(args) > -1);
  }

}
