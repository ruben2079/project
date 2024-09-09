import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-browse-explore',
  templateUrl: './browse-explore.component.html',
  styleUrls: ['./browse-explore.component.scss']
})
export class BrowseExploreComponent {
  @Output() navItemClicked = new EventEmitter<string>();

  constructor( ) { }

  ngOnInit() {
  }

  onNavItemClicked(navItem: string) {
    console.log("browse-explore - navItem", navItem);
    this.navItemClicked.emit(navItem);
  }
}
