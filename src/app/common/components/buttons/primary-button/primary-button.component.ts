import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() icon?: string = '';
  @Input() text: string = '';
  @Input() action: () => void = () => { };
  @Input() fontSize?: string;
  @Input() padding?: string;
  @Input() fontWeight?: string;
  @Input() disabled?: boolean;

  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
