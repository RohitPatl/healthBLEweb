import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientname'
})
export class PatientnamePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender.toLowerCase() == 'male'){
      return "Mr. " + value;
    } else {
      return "Mrs. " + value;
    }
  }

}
