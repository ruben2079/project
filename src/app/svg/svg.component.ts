import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
})
export class SvgComponent implements OnInit {
  @Input() svgIcon!: string;
  @Input() fillColor!: string;
  @Input() size: string = '48px';
  @Input() color!: string;
  @Input() cursor: string = 'default';

  constructor() {}

  ngOnInit(): void {}
}
