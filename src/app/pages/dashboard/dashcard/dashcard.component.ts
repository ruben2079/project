import { Component, Input } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { ChangeDetectorRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dashcard',
  templateUrl: './dashcard.component.html',
  styleUrls: ['./dashcard.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class DashcardComponent {
  @Input() dashCard?: any;
  @Input() dashboardCardDetails?: any;
@Input() loading?: boolean = false;

  public profileProgressVal: number = 0;

  constructor(private utilities: UtilitiesService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log("dashCard", this.dashCard);
    console.log("dashboardCardDetails", this.dashboardCardDetails);
  }


  ngDoCheck(): void {
  }

  isObjectEmpty(obj: any) {
    return this.utilities.isObjectEmpty(obj);
  }

}
