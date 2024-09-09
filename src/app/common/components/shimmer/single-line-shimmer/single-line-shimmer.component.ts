import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-single-line-shimmer',
  templateUrl: './single-line-shimmer.component.html',
  styleUrls: ['./single-line-shimmer.component.scss'],
  animations: [
    trigger('shimmerAnimation', [
      state('start', style({
        backgroundPosition: '200% 0'
      })),
      state('end', style({
        backgroundPosition: '-200% 0'
      })),
      transition('start => end', animate('1s ease-in-out', style({
        backgroundPosition: '-200% 0'
      }))),
      transition('end => start', animate('1s ease-in-out', style({
        backgroundPosition: '200% 0'
      })))
    ])
  ]
})
export class SingleLineShimmerComponent {
  @Input() width?: string;
  @Input() height: string = "1rem";

  public animationState: string = 'start';

  ngOnInit() {
    setInterval(() => {
      this.animationState = this.animationState === 'start' ? 'end' : 'start';
    }, 1000);
  }
}
