import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shimmer-loader',
  templateUrl: './shimmer-loader.component.html',
  styleUrls: ['./shimmer-loader.component.scss'],
  animations: [
    trigger('shimmerAnimation', [
      transition('void => *', [
        style({ backgroundPosition: '-100% 0' }),
        animate('2s', style({ backgroundPosition: '100% 0' }))
      ])
    ])
  ]
})
export class ShimmerLoaderComponent {
}