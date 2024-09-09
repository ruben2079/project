import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { chain, get, omit } from 'lodash';
import { ActivityLabels } from 'src/app/common/const/activity-labels.const';
import { CPDClaim } from 'src/app/common/interfaces/cpd';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-cpd-view-dialog',
  templateUrl: './cpd-view-dialog.component.html',
  styleUrls: ['./cpd-view-dialog.component.scss']
})
export class CpdViewDialogComponent implements OnInit {
  activity: CPDClaim | any;
  cpdClaimFormInfo: any;
  currentActivity: any;
  showFields: string[] = [];
  activityTypes: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<CpdViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vfService: VfRemotingManagerService
  ){
    this.activity = this.data;
  }

  ngOnInit(): void {
    this.getClaimFormInfo();
  }

  getClaimFormInfo() {
    this.vfService.getCPDClaimFormInfo().subscribe((res: any) => {
      this.cpdClaimFormInfo = res;
      this.processActivityType();
    });
  }

  processActivityType() {
    this.currentActivity = get(this.cpdClaimFormInfo.cpdActivityFieldInfo, this.activity.activityType);
    
    const copy = omit(this.currentActivity, ['name']);
    this.showFields = chain(copy)
      .keys()
      .map(key => ActivityLabels[key as keyof typeof ActivityLabels])
      .value();
  }

  close() {
    this.dialogRef.close('cancel');
  }
}
