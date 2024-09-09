import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CPDClaim } from 'src/app/common/interfaces/cpd';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-cpd-delete-dialog',
  templateUrl: './cpd-delete-dialog.component.html',
  styleUrls: ['./cpd-delete-dialog.component.scss']
})
export class CpdDeleteDialogComponent implements OnInit {
  activity: CPDClaim | any;
  cpdClaimFormInfo: any;
  currentActivity: any;
  showFields: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<CpdDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vfService: VfRemotingManagerService
  ){
    this.activity = this.data;
  }

  ngOnInit(): void { }

  delete() {
    this.vfService.deleteCPDClaim(this.activity.claimId).subscribe((res: any) => {
      this.dialogRef.close('success');
    });
  }
  
  close() {
    this.dialogRef.close('cancel');
  }
}
