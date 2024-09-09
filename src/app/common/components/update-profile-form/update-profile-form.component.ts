import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject, startWith, map } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-update-profile-form',
  templateUrl: './update-profile-form.component.html',
  styleUrls: ['./update-profile-form.component.scss']
})
export class UpdateProfileFormComponent implements OnInit {
  mainForm: FormGroup = new FormGroup({});
  monthOfYear: string[] = [];
  currentYear: number = new Date().getFullYear();
  years: string[] = [];
  graduationYear: string[] = [];
  riskManagementYear: string[] = [];
  riskSpecialtyList: string[] = [];
  workingStatus: string[] = [];
  industriesList: string[] = [];
  workingYears: string[] = [];
  professionalLevels: string[] = [];
  jobFunctions: string[] = [];
  institutions: string[] = [];
  organizations: string[] = [];
  degreePrograms: string[] = [];
  filteredSchoolOptions?: Observable<string[]>;
  filteredOrganizationOptions?: Observable<string[]>;
  isSchoolEditable: boolean = true;
  isOrganizationEditable: boolean = true;
  isOptionSchoolSelected: boolean = true;
  isOptionOrganizationSelected: boolean = true;
  schoolSelected: string = '';
  isOtherDesignationsOn: boolean = false;
  isRiskSpecialtyOn: boolean = false;
  private destroy$: Subject<boolean> = new Subject();
  isOpen: boolean = false;

  constructor(private formBuilder: FormBuilder, private vfRemotingManager: VfRemotingManagerService, private snackbar: MatSnackBar, private utilitiesService: UtilitiesService ){
  }

  ngOnInit(){
    this.getProfileDemographicsFormInfo();
    this.mainForm = new FormGroup({
      workStatus: new FormControl(null),
      specializedIndustry: new FormControl(null),
      industryStartWorkingYear: new FormControl(null),
      company: new FormControl(null),
      professionalLevel: new FormControl(null),
      jobFunction: new FormControl(null),
      riskManagementStartWorkingYear: new FormControl(null),
      riskSpecialty: new FormControl(null),
      ACCA: new FormControl(false),
      CA: new FormControl(false),
      CAIA: new FormControl(false),
      CFA: new FormControl(false),
      CFP: new FormControl(false),
      CIA: new FormControl(false),
      CMA: new FormControl(false),
      CMT: new FormControl(false),
      CPA: new FormControl(false),
      CQF: new FormControl(false),
      PMP: new FormControl(false),
      Other: new FormControl(false),
      OtherQualifications: new FormControl(''),
      school: new FormControl(null),
      highestDegree: new FormControl(null),
      expectedGraduationYear: new FormControl(null),
      expectedGraduationMonth: new FormControl(null)
    });

    this.utilitiesService.profileModalooleanChanged.subscribe(response => {
      this.isOpen = response;
    })
  }

  rangeOfYears(years: any): string[] {
    years = [];
    for(let i = 0; i < this.currentYear; i++){
      if(i < 100){
        years.push(String(this.currentYear - i));
      }
    }
    return years;
  }

  getProfileDemographicsFormInfo(): void {
    this.vfRemotingManager.getProfileDemographicsFormInfo().subscribe((data: any) => {
      console.log('profile update - modal component');
      console.log(data);
      /* setting institutions array */
      for(let i = 0; i < data.updateProfileDemographicsSelectOptions?.institutions?.length; i++){
        if(data.updateProfileDemographicsSelectOptions?.institutions[i].type === 'Academic'){
          this.institutions.push(data.updateProfileDemographicsSelectOptions?.institutions[i].name);
        }
      }

      for(let j = 0; j < data.updateProfileDemographicsSelectOptions?.institutions?.length; j++){
        if(data.updateProfileDemographicsSelectOptions?.institutions[j].type === 'Organization'){
          this.organizations.push(data.updateProfileDemographicsSelectOptions?.institutions[j].name);
        }
      }

      if(data?.updateProfileDemographicsContactInfo?.jobFunction?.length > 0){
        this.isRiskSpecialtyOn = true;
      }

      this.workingStatus = data.updateProfileDemographicsSelectOptions?.workingStatus;
      this.industriesList = data.updateProfileDemographicsSelectOptions?.industries;
      this.workingYears = data.updateProfileDemographicsSelectOptions?.workingYears;
      this.professionalLevels = data.updateProfileDemographicsSelectOptions?.professionalLevels;
      this.jobFunctions =  data.updateProfileDemographicsSelectOptions?.jobFunctions;
      this.monthOfYear = data.updateProfileDemographicsSelectOptions?.graduationMonths;
      this.degreePrograms = data.updateProfileDemographicsSelectOptions?.degrees;
      this.riskSpecialtyList = data.updateProfileDemographicsSelectOptions?.riskSpecialties;
      this.graduationYear = this.rangeOfYears("100");
      this.riskManagementYear = this.rangeOfYears("100");
      this.mainForm.get('workStatus')?.setValue(data.updateProfileDemographicsContactInfo?.workingStatus);
      this.mainForm.get('specializedIndustry')?.setValue(data.updateProfileDemographicsContactInfo?.industry);
      this.mainForm.get('riskManagementStartWorkingYear')?.setValue(data.updateProfileDemographicsContactInfo?.riskManagementStartWorkingYear);
      this.mainForm.get('riskSpecialty')?.setValue(data.updateProfileDemographicsContactInfo?.riskSpecialty);
      this.mainForm.get('company')?.setValue(data.updateProfileDemographicsContactInfo?.company);
      this.mainForm.get('school')?.setValue(data.updateProfileDemographicsContactInfo?.school);
      this.mainForm.get('industryStartWorkingYear')?.setValue(data.updateProfileDemographicsContactInfo?.industryStartWorkingYear);
      this.mainForm.get('professionalLevel')?.setValue(data.updateProfileDemographicsContactInfo?.professionalLevel);
      this.mainForm.get('highestDegree')?.setValue(data.updateProfileDemographicsContactInfo?.highestDegree);
      this.mainForm.get('jobFunction')?.setValue(data.updateProfileDemographicsContactInfo?.jobFunction);
      this.mainForm.get('ACCA')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationACCA);
      this.mainForm.get('CA')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationCA);
      this.mainForm.get('CAIA')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationCAIA);
      this.mainForm.get('CFA')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationCFA);
      this.mainForm.get('CFP')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationCFP);
      this.mainForm.get('CIA')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationCIA);
      this.mainForm.get('CMA')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationCMA);
      this.mainForm.get('CMT')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationCMT);
      this.mainForm.get('CPA')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationCPA);
      this.mainForm.get('CQF')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationCQF);
      this.mainForm.get('PMP')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationPMP);
      this.mainForm.get('Other')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationOther);
      if(data.updateProfileDemographicsContactInfo?.professionalDesignationOther){
        this.isOtherDesignationsOn = true;
        this.mainForm.get('OtherQualifications')?.setValue(data.updateProfileDemographicsContactInfo?.professionalDesignationOtherQualifications);
      }
      this.mainForm.get('expectedGraduationMonth')?.setValue(data.updateProfileDemographicsContactInfo?.expectedGraduationMonth);
      this.mainForm.get('expectedGraduationYear')?.setValue(data.updateProfileDemographicsContactInfo?.expectedGraduationYear);
      if(this.mainForm.get('school')?.value != ''){
        this.mainForm.controls['school']?.disable();
        this.isSchoolEditable = false;
      }
      if(this.mainForm.get('company')?.value != ''){
        this.mainForm.controls['compnay']?.disable();
        this.isOrganizationEditable = false;
      }
      //Filter school field to apply autocomplete options
      this.filteredSchoolOptions = this.mainForm.get('school')?.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterInstitutions(val))
      );
      this.filteredOrganizationOptions = this.mainForm.get('company')?.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterOrganizations(val))
      );
    }, (error)=> {
      console.debug(error);
    });
  }

  cancelIcon(str: string): void {
    this.mainForm.controls[str].enable();
    if(str === 'school'){
      this.isSchoolEditable = true;
    } else {
      this.isOrganizationEditable = true;
    }
  }

  addNewInstitution(str: string): void {
    this.mainForm.controls[str].disable();
    if(str === 'school'){
      this.isSchoolEditable = false;
      this.isOptionSchoolSelected = true;
    } else {
      this.isOrganizationEditable = false;
      this.isOptionOrganizationSelected = true;
    }
  }

  onfieldChange(fieldValue: string, str: string): void {
    if(str === 'school'){
      for(let i = 0; i < this.institutions?.length; i++){
        if(this.institutions.indexOf(fieldValue) > -1 || fieldValue === ''){
          this.isOptionSchoolSelected = true;
        } else {
          this.isOptionSchoolSelected = false;
        }
      }
    } else {
      for(let i = 0; i < this.organizations?.length; i++){
        if(this.organizations.indexOf(fieldValue) > -1 || fieldValue === ''){
          this.isOptionOrganizationSelected = true;
        } else {
          this.isOptionOrganizationSelected = false;
        }
      }
    }
  }

  optionSchoolSelected(evt: any): void {
    this.schoolSelected = evt.option.value;
    if(evt.option_selected !== ''){
      this.isOptionSchoolSelected = true;
      this.isSchoolEditable = false;
      this.mainForm.get('school')?.disable();
    }
  }

  optionOrganizationSelected(evt: any): void {
    this.schoolSelected = evt.option.value;
    if(evt.option_selected !== ''){
      this.isOptionOrganizationSelected = true;
      this.isOrganizationEditable = false;
      this.mainForm.get('company')?.disable();
    }
  }

  otherDesignations(event: any): void {
    if(event.checked){
      this.isOtherDesignationsOn = true;
    } else {
      this.isOtherDesignationsOn = false;
    }
    this.mainForm.get('Other')?.setValue(this.isOtherDesignationsOn);
  }

  riskSelected(event: any): void {
    if(event.value === 'Risk Management'){
      this.isRiskSpecialtyOn = true;
    } else {
      this.isRiskSpecialtyOn = false;
    }
  }

  sendForm(){
    if(this.mainForm.get('Other')?.value === false){
      this.mainForm.get('OtherQualifications')?.setValue('');
    }

    if(this.mainForm.get('jobFunction')?.value !== 'Risk Management'){
      this.mainForm.get('riskSpecialty')?.setValue('');
    }
    let obj = {
      workingStatus: this.mainForm.get('workStatus')?.value,
      industry: this.mainForm.get('specializedIndustry')?.value,
      industryStartWorkingYear: this.mainForm.get('industryStartWorkingYear')?.value,
      company: this.mainForm.get('company')?.value,
      professionalLevel: this.mainForm.get('professionalLevel')?.value,
      jobFunction: this.mainForm.get('jobFunction')?.value,
      school: this.mainForm.get('school')?.value,
      highestDegree: this.mainForm.get('highestDegree')?.value == undefined ? '': this.mainForm.get('highestDegree')?.value,
      expectedGraduationYear: this.mainForm.get('expectedGraduationYear')?.value,
      expectedGraduationMonth: this.mainForm.get('expectedGraduationMonth')?.value,
      riskManagementStartWorkingYear: this.mainForm.get('riskManagementStartWorkingYear')?.value,
      riskSpecialty: this.mainForm.get('riskSpecialty')?.value,
      professionalDesignationACCA: this.mainForm.get('ACCA')?.value,
      professionalDesignationCA: this.mainForm.get('CA')?.value,
      professionalDesignationCAIA: this.mainForm.get('CAIA')?.value,
      professionalDesignationCFA: this.mainForm.get('CFA')?.value,
      professionalDesignationCFP: this.mainForm.get('CFP')?.value,
      professionalDesignationCIA: this.mainForm.get('CIA')?.value,
      professionalDesignationCMA: this.mainForm.get('CMA')?.value,
      professionalDesignationCMT: this.mainForm.get('CMT')?.value,
      professionalDesignationCPA: this.mainForm.get('CPA')?.value,
      professionalDesignationCQF: this.mainForm.get('CQF')?.value,
      professionalDesignationPMP: this.mainForm.get('PMP')?.value,
      professionalDesignationOther: this.mainForm.get('Other')?.value,
      professionalDesignationOtherQualifications: this.mainForm.get('OtherQualifications')?.value
    };

    this.vfRemotingManager.setUpdateProfileFormInfo(obj).subscribe(res => {
      this.snackbar.open(`${res.statusMessage}, your data has been updated`);
      setTimeout(()=>{
        this.snackbar.dismiss();
        location.reload();
      }, 3000);
      this.isOpen = false;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  closeModal(): void {
    this.isOpen = false;
  }

  filterInstitutions(val: string): string[] {
    return this.institutions.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  filterOrganizations(val: string): string[] {
    return this.organizations.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
