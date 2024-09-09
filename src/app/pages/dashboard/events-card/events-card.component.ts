import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss']
})
export class EventsCardComponent {
  @Input() dashCard?: any;
  @Input() dashboardCardDetails?: any;
}
