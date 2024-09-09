import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProfessionalDesignations'
})
export class FilterProfessionalDesignationsPipe implements PipeTransform {

  transform(value: any): any {
    const designations = [];
    for (const key in value) {
      if (value.hasOwnProperty(key) && key.startsWith('professionalDesignation') && value[key] === true) {
        if (key === 'professionalDesignationOther') {
          designations.push(value.professionalDesignationOtherQualifications.toUpperCase());
        } else {
          let designation = key.replace('professionalDesignation', '');
          designation = designation?.toUpperCase();
          designations.push(designation);
        }
      }
    }
    return designations.join(', ');
  }

}