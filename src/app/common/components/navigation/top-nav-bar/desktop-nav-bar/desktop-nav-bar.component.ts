import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-desktop-nav-bar',
  templateUrl: './desktop-nav-bar.component.html',
  styleUrls: ['./desktop-nav-bar.component.scss']
})
export class DesktopNavBarComponent {
  @Input() navItemsList: any[] = [];
  @Output() logOut = new EventEmitter<void>();

  logOutUser() {
    this.logOut.emit();
  }
}
