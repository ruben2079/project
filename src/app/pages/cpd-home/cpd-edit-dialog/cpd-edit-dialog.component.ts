import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { chain, findKey, get, map, omit } from 'lodash';
import { distinctUntilChanged } from 'rxjs';
import { ActivityLabels } from 'src/app/common/const/activity-labels.const';
import { CPDClaim } from 'src/app/common/interfaces/cpd';
import { validDateValidator } from 'src/app/common/validators/valid-date.validator';
import { SalesforceDatePipe } from 'src/app/pipes/salesforce-date.pipe';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-cpd-edit-dialog',
  templateUrl: './cpd-edit-dialog.component.html',
  styleUrls: ['./cpd-edit-dialog.component.scss']
})
export class CpdEditDialogComponent implements OnInit {
  type: string = 'add';
  activity: CPDClaim | any;
  activityForm: FormGroup = this.createForm();
  cpdClaimFormInfo: any;
  activityTypes: string[] = [];
  areasOfStudy: string[] = [];
  showFields: string[] = [];
  currentActivity: any;
  submitting: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CpdEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private vfService: VfRemotingManagerService,
    private fb: FormBuilder,
    private salesforceDatePipe: SalesforceDatePipe
  ){
    this.type = this.data.type;

    if(this.type === 'edit') {
      this.activity = this.data.activity;
    } else {
      this.activity = {
        claimId: null,
        activityType: null,
        dateOfCompletion: null,
        dateOfCompletionString: null,
        credits: null,
        areaOfStudy: null,
        comments: null,
        URL: null,
        provider: null,
        providerOther: null,
        title: null,
        organizationName: null,
        contactEmail: null,
        publication: null,
        approvalComments: null,
        isFRM: false,
        isERP: false,
        isSCR: false
      };
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.listenForActivityType();
    this.getClaimFormInfo();

    if(this.activity){
      this.setInitialForm()
    }
  }

  getClaimFormInfo() {
    this.vfService.getCPDClaimFormInfo().subscribe((res: any) => {
      this.cpdClaimFormInfo = res;
      this.areasOfStudy = res.areasOfStudy;
      this.processActivityType(this.activity?.activityType || '');
    });
  }

  createForm() {
    return this.fb.group({
      activityType: [null, Validators.required],
      dateOfCompletion: [null, [Validators.required, validDateValidator()]],
      credits: [null, [Validators.required, Validators.min(0.5), Validators.max(50)]],
      areaOfStudy: [null],
      comments: [null, [Validators.minLength(2)]],
      URL: [null, [Validators.pattern('.+\\..+')]],
    });
  }

  setInitialForm() {
    this.activityForm.patchValue({
      ...this.activity, 
      ...{
        dateOfCompletion: new Date(this.salesforceDatePipe.transform(this.activity?.dateOfCompletion)) || new Date(),
      }
    });
  }

  addControls() {
    this.showFields.forEach(field => {
      if (field === 'contactEmail') {
        this.activityForm.addControl(field, this.fb.control(this.activity[field], [Validators.required, Validators.email]));
      } else if (['title', 'organizationName', 'publication'].includes(field) ) {
          this.activityForm.addControl(field, this.fb.control(this.activity[field], [Validators.required, Validators.minLength(2)]));
      } else {
        this.activityForm.addControl(field, this.fb.control(this.activity[field], [Validators.minLength(2)]));
      }
    });
  }

  removeControls() {
    this.showFields.forEach(field => {
      this.activityForm.removeControl(field);
    });
  }

  processActivityType(activityId: string) {
    this.activityTypes = map(this.cpdClaimFormInfo.cpdActivityFieldInfo, 'name');

    if(activityId) {
      this.currentActivity = get(this.cpdClaimFormInfo.cpdActivityFieldInfo, activityId);
      this.activityForm.patchValue({activityType: this.currentActivity.name});
    }

    const copy = omit(this.currentActivity, ['name']);
    this.showFields = chain(copy)
      .keys()
      .map(key => ActivityLabels[key as keyof typeof ActivityLabels])
      .value();

    this.addControls();
  }

  listenForActivityType() {
    this.activityForm.get('activityType')?.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        if(this.cpdClaimFormInfo) {
          this.removeControls();
          const activityId = Object.entries(this.cpdClaimFormInfo.cpdActivityFieldInfo)
            .find(([key, val]: [string, any]) => val.name === value)?.[0];
  
          this.processActivityType(activityId!);
        }
      });
  }

  save() {
    let payload: CPDClaim = {
      ...this.activity,
      ...this.activityForm.value,
    }

    payload.dateOfCompletionString = payload.dateOfCompletion?.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    delete payload.dateOfCompletion

    payload.activityType = findKey(this.cpdClaimFormInfo.cpdActivityFieldInfo, { name: payload.activityType }) || '';

    this.submitting = true;
    this.vfService.setCPDClaimInfo(payload).subscribe((res: any) => {
      this.dialogRef.close('success');
    });
  }

  close() {
    this.dialogRef.close('cancel');
  }

  /* Can use for debugging controls */
  // printInvalidControls() {
  //   Object.keys(this.activityForm.controls).forEach(key => {
  //     const control = this.activityForm.controls[key];
  //     if (control.invalid) {
  //       console.log(`Control ${key} is invalid. Value: ${control.value}`);
  //     }
  //   });
  // }
}
