import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-program-card-shimmer',
  templateUrl: './program-card-shimmer.component.html',
  styleUrls: ['./program-card-shimmer.component.scss']
})
export class ProgramCardShimmerComponent {
  public lines: number[] = [];

  @Input() shimmerStyle?: any;
  @Input() maxNumberOfLines: number = 8;

  ngOnInit() {
    const numberOfLines = Math.floor(Math.random() * this.maxNumberOfLines) + 3;
    this.lines = Array(numberOfLines).fill(0);
  }
}
