import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.scss']
})
export class AdvertisementCardComponent {
  @Input() dashCard?: any;
  @Input() dashboardCardDetails?: any;

  public imgURL: string = 'https://www.garp.org/hubfs/GARP%20Member%20Portal%202.0/Development/Assets/Register-FRM-Image.png';
}
