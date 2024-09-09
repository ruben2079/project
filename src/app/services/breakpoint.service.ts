import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  deviceType$: Observable<string>;

  constructor() {
    this.deviceType$ = fromEvent(window, 'resize').pipe(
      startWith(this.getDeviceType(window.innerWidth)),
      map(() => this.getDeviceType(window.innerWidth))
    );
  }

  private getDeviceType(width: number): string {
    if (width < 959.98) {
      return 'mobile';
    } else {
    return 'desktop';
  }
  }
}
