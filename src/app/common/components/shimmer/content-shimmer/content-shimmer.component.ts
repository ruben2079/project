import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-content-shimmer',
  templateUrl: './content-shimmer.component.html',
  styleUrls: ['./content-shimmer.component.scss'],
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
export class ContentShimmerComponent {
  @Input() itemCount?: number = 3;
  @Input() randomCount?: boolean = false;
  @Input() min?: number = 1;
  @Input() max?: number = 10;
  shimmerItems: string[] = [];

  public animationState: string = 'start';

  ngOnInit() {
    let count = this.randomCount ? this.getRandomInt(this.min || 1, this.max || 10) : this.itemCount;
    this.shimmerItems = Array(count).fill('');

    setInterval(() => {
      this.animationState = this.animationState === 'start' ? 'end' : 'start';
    }, 1000);
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
