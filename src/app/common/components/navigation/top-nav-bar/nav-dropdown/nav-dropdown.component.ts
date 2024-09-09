import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BreakpointService } from 'src/app/services/breakpoint.service';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss']
})
export class NavDropdownComponent{
  @Input() navItem: any = '';
  isDropdownVisible = [false, false, false, false, false];
  isOverlayVisible = false;
  hideDropdownTimeout: any;
  @Input() navItemIndex: number = 0;
  public deviceType$: Observable<string> = of('default');

  constructor(private breakpointService: BreakpointService) {
    this.deviceType$ = breakpointService.deviceType$;
  }

  @HostListener('mouseenter') onMouseEnter() {
    clearTimeout(this.hideDropdownTimeout);
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.hideDropdown();
  }

  hideDropdown() {
    // this.isDropdownVisible = this.isDropdownVisible.map(() => false);
    this.isOverlayVisible = false;
    this.isDropdownVisible[this.navItemIndex] = false;
  }

toggleDropdown() {
  if(this.isDropdownVisible[this.navItemIndex] == false)
    this.isDropdownVisible[this.navItemIndex] = !this.isDropdownVisible[this.navItemIndex];
    this.isOverlayVisible = this.isDropdownVisible.some(isVisible => isVisible);
  }
}
