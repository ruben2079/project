import { ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-member-profile-card',
  templateUrl: './member-profile-card.component.html',
  styleUrls: ['./member-profile-card.component.scss']
})
export class MemberProfileCardComponent implements OnInit, DoCheck {
  @Input() dashCard?: any;
  @Input() dashboardCardDetails?: any;
  isNotificationHidden: boolean = false;
  
  public profileProgressVal: number = 0;

  constructor(private utilities: UtilitiesService, private cdr: ChangeDetectorRef, private vfRemotingManager: VfRemotingManagerService) { }

  ngOnInit(): void {
    this.setProfileProgressBar();
    console.log("member-profile-card - dashCard", this.dashCard);
    console.log("dashboardCardDetails", this.dashboardCardDetails);
  }

  ngDoCheck(): void {
    this.setProfileProgressBar();
  }

  setProfileProgressBar(): void {
  
    if (this.dashCard?.name === 'Member Profile' && this.dashboardCardDetails.percentComplete || this.dashCard?.name === 'Member Profile' && this.dashboardCardDetails.isProfileModalOpen === true) {
      this.profileProgressVal = this.dashboardCardDetails.percentComplete;
      this.cdr.detectChanges();
    }
  }

  profileModal(): void {
    this.utilities.updateProfileModalData(true);
  }

  muteProfileComponent(data: boolean): void {
    this.vfRemotingManager.muteProfileComponent(data).subscribe((res: any) => {
      this.isNotificationHidden = data;
    })
  }

  hideNotification(): void {
    this.muteProfileComponent(true);
  }

  undoChanges(): void {
    this.muteProfileComponent(false);
  }
}
