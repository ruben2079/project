import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject, of, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';
import { defaultProfile } from 'src/app/common/const/defaultProfile.const';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeIn } from '../../animations/fadein';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [fadeIn],
})
export class SideNavbarComponent {
  private destroy$: Subject<boolean> = new Subject();
  public studiesRoute: boolean = false;
  public navBarInfoData: any = {};
  public navBarInfo: any = {};
  public institution = 'GARP';
  public isMember = false;
  public hasCPDProgram = true;
  public isCurrentRoute = true;
  public hasProgram = true;
  public isLoaded = false;
  public defaultProfile: string = defaultProfile;
  public firstName: string | undefined;
  public lastName: string | undefined;
  public garpId: string | undefined;
  public avatarPhotoURL: string | undefined;
  public deviceType$: Observable<string> = of('default');
  public isProfileModalOpen: boolean = false;

  private destroyed$ = new Subject<void>();
  @Output() navItemClicked = new EventEmitter<void>();


  constructor(private vfRemotingManager: VfRemotingManagerService, private utilities: UtilitiesService, private breakpointService: BreakpointService) { }

  ngOnInit() {
    this.utilities.getUserData()
    .pipe(takeUntil(this.destroyed$)).subscribe((res) => {
      if (res !== null) {
        this.navBarInfo = res.navBarInfo;
        this.firstName = res.firstName;
        this.lastName = res.lastName;
        this.garpId = res.garpId;
        this.avatarPhotoURL = res?.avatarPhotoURL;
        this.isLoaded = true;
      } else {
        this.getNavBarInfo();
      }
    });
    this.deviceType$ = this.breakpointService.deviceType$;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getNavBarInfo() {
    this.vfRemotingManager.getNavBarInfo()
    .pipe(takeUntil(this.destroyed$)).subscribe((res) => {
      if (res instanceof Error) {
        console.error(res);
        return;
      }
      this.utilities.setUserData(res);
      this.navBarInfo = res.navBarInfo;
      this.firstName = res.firstName;
      this.lastName = res.lastName;
      this.garpId = res.garpId;
      this.avatarPhotoURL = res?.avatarPhotoURL;
      this.isLoaded = true;
    });
  }

  toggleMobileDropdown() {
    this.deviceType$.pipe(takeUntil(this.destroyed$)).subscribe((deviceType: any) => {
      if (deviceType !== 'desktop') {
        this.navItemClicked.emit();
      }
    });
  }

  profileModal(): void {
    this.isProfileModalOpen = true;
    this.utilities.updateProfileModalData(this.isProfileModalOpen);
  }
}
