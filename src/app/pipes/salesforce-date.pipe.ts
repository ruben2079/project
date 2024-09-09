import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment-timezone';

@Pipe({
  name: 'salesforceDate'
})
export class SalesforceDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(salesForceDate: any): string {
    const date = this.formatGMT(salesForceDate);
    return this.datePipe.transform(date, 'longDate') || '';
  }

  formatGMT(salesForceDate: string): Date | null {
    if (salesForceDate !== null && typeof salesForceDate !== 'undefined') {
      const mdate = moment.tz(salesForceDate, 'GMT');
      const dateString = mdate.format('YYYY-MM-DD');
      const momentObj = moment(dateString, 'YYYY-MM-DD');
      const dateObj = momentObj.toDate();
      return dateObj;
    } else {
      return null
    }
  }
}