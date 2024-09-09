import { Pipe, PipeTransform } from '@angular/core';
import { SalesforceDatePipe } from './salesforce-date.pipe';
import { Event } from '../common/interfaces/events.interface';

@Pipe({
  name: 'sortEvents'
})
export class SortEventsPipe implements PipeTransform {

  constructor(private salesforceDatePipe: SalesforceDatePipe) { }

  transform(events: Event[]): Event[] {
    return [...events].sort((a, b) => {
      const dateA = new Date(this.salesforceDatePipe.transform(a.eventStartDate));
      const dateB = new Date(this.salesforceDatePipe.transform(b.eventStartDate));
      return dateA.getTime() - dateB.getTime();
    });
  }
}