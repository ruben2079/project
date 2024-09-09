import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { uniqBy } from 'lodash';
import { Subject, takeUntil } from 'rxjs';
import { CPDClaim, CPDCycleInfo, CPDListingInfo } from 'src/app/common/interfaces/cpd';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';
import { CpdEditDialogComponent } from './cpd-edit-dialog/cpd-edit-dialog.component';
import { CpdViewDialogComponent } from './cpd-view-dialog/cpd-view-dialog.component';
import { CpdDeleteDialogComponent } from './cpd-delete-dialog/cpd-delete-dialog.component';

@Component({
  selector: 'app-cpd',
  templateUrl: './cpd.component.html',
  styleUrls: ['./cpd.component.scss']
})
export class CpdComponent {
  private destroy$: Subject<boolean> = new Subject();
  public filterStrName: string = 'all';
  public cpdData: CPDListingInfo;
  public currentCycle: CPDCycleInfo | null;
  public dashboardCardDetails: any;
  public examAlertsList: any;
  public cycleControl: FormControl = new FormControl('cycle');
  public cycles: string[] = [];

  private destroyed$ = new Subject<void>();

  constructor(
    private router: Router, 
    private route:ActivatedRoute, 
    private vfService: VfRemotingManagerService,
    public dialog: MatDialog
  ){ }

  ngOnInit(){
    /* Set page title */
    this.route.data
    .pipe(takeUntil(this.destroyed$))
    .subscribe((data:any) => {
      document.title = data.title || 'Default Title';
    });

    this.cycleControl.disable();
    this.getCpdListingData();
    this.listenForCycle();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getCpdListingData() {
    this.vfService.getCPDListingInfo().subscribe((res:any) => {
      this.cpdData = res;
      this.cycleControl.patchValue(this.cpdData.CPDProgramInfo.currentCycle);
      this.cycleControl.enable();
      this.currentCycle = this.cpdData.CPDProgramInfo.cycles.find((cycle: CPDCycleInfo) => 
        cycle.cycleName === this.cpdData.CPDProgramInfo.currentCycle
      ) || null;
      this.cycles = uniqBy(this.cpdData.CPDProgramInfo.cycles, 'cycleName').map((cycle: any) => cycle.cycleName);
    });
  }

  listenForCycle() {
    this.cycleControl.valueChanges
    .pipe(takeUntil(this.destroyed$))
    .subscribe((value) => {
      this.currentCycle = this.cpdData.CPDProgramInfo.cycles.find((cycle: CPDCycleInfo) => 
        cycle.cycleName === value
      ) || null;
    });
  }

  navigateToEventLink() {
  }

  navigateToAddCredits() {
    const url = `https://www.garp.org/events/all`;
    window.open(url, "_blank");
  }

  downloadHandbook() {
    this.router.navigate(['/myaccount']);
  }  
  
  navigateToCreditOpportunities() {
    this.router.navigate(['/myaccount']);
  }

  openEditDialog(activity?: CPDClaim) {
    const dialogRef = this.dialog.open(CpdEditDialogComponent, {
      width: '800px',
      data: {
        activity: activity || null,
        type: activity ? 'edit' : 'add',
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 'success') {
        this.currentCycle = null;
        this.getCpdListingData();
      }
    });
  }  
  
  openViewDialog(activity?: CPDClaim) {
    const dialogRef = this.dialog.open(CpdViewDialogComponent, {
      width: '800px',
      data: activity
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 'success') {
        this.currentCycle = null;
        this.getCpdListingData();
      }
    });
  }

  openDeleteDialog(activity?: CPDClaim) {
    const dialogRef = this.dialog.open(CpdDeleteDialogComponent, {
      width: '700px',
      data: activity
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res === 'success') {
        this.currentCycle = null;
        this.getCpdListingData();
      }
    });
  }
}
