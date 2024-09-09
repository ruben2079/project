import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { navItemsList } from './nav-items-list';
import { fadeIn } from '../../animations/fadein';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
  animations: [fadeIn]
})
export class TopNavBarComponent implements OnInit {
  public navItemsList = navItemsList;
  public debugMode: boolean = true;
  constructor() { }

  ngOnInit(): void {
    console.log("navItemsList", navItemsList);
  }

  handleLogOut() {
    window.open("/secur/logout.jsp", "_self");
  }
}
