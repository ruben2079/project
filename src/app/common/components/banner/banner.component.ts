import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  private destroy$: Subject<boolean> = new Subject();
  public title: string = '';
  public subtitle: string = '';
  public device: any;
  public hidden: boolean = false;
  public notificationNumber: number = 2;

  constructor() {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
