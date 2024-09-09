import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeIn } from 'src/app/common/components/animations/fadein';

@Component({
  selector: 'app-cpd-card',
  templateUrl: './cpd-card.component.html',
  styleUrls: ['./cpd-card.component.scss'],
  animations: [fadeIn],
})
export class CpdCardComponent implements OnInit{
  public destroyed$ = new Subject<void>();
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
