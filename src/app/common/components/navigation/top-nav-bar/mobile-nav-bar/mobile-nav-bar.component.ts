import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { navItemsList } from '../nav-items-list';

@Component({
  selector: 'app-mobile-nav-bar',
  templateUrl: './mobile-nav-bar.component.html',
  styleUrls: ['./mobile-nav-bar.component.scss']
})
export class MobileNavBarComponent implements OnInit {
  @Output() logOut = new EventEmitter<void>();
  public isMainOpen = false;
  public isSecondaryOpen = false;
  public isAnyDropdownOpen = false;

  public isOpened = false;
  public selectedNavItem: string | null | undefined = null;

  public navItemsList = navItemsList;

  constructor() { }
  ngOnInit(): void {
    console.log("navItemsList", navItemsList);
  }

  toggleContainerDropdown() {
    this.isAnyDropdownOpen = !this.isAnyDropdownOpen;
    this.isSecondaryOpen = false; // Always reset the dropdown to main dropdown when opened/closed
    this.isMainOpen = !this.isSecondaryOpen;
  }

  togglePrimaryDropdown() {
    this.isMainOpen = !this.isMainOpen;
  }

  toggleSecondaryDropdown(navItem?: string) {
    this.togglePrimaryDropdown();
    this.isSecondaryOpen = !this.isMainOpen;
    this.selectedNavItem = navItem;

    console.log("navItem", navItem);
  }

  logOutUser() {
    this.logOut.emit();
  }
}


