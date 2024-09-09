import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() color: string = '';
  @Input() fontSize?: string;
  @Input() padding?: string;
  @Input() fontWeight?: string;
  @Input() disabled?: boolean = false;

  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
