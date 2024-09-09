import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-image-shimmer',
  templateUrl: './image-shimmer.component.html',
  styleUrls: ['./image-shimmer.component.scss'],
  animations: [
    trigger('shimmerAnimation', [
      transition(':enter', [
        style({ backgroundPosition: '-100% 0' }),
        animate('2s', style({ backgroundPosition: '100% 0' }))
      ])
    ])
  ]
})
export class ImageShimmerComponent {
  @Input() height: string = '50px';
  @Input() width: string = '50px';
}
