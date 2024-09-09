import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, forkJoin, of, takeUntil } from 'rxjs';
import { BreakpointService } from 'src/app/services/breakpoint.service';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';
import { MatDialog } from '@angular/material/dialog';
import { MemberDetailsDialogComponent } from '../member-directory/member-details-dialog/member-details-dialog.component';

export interface Section {
  name: string;
  updated: string;
  avatarPhotoURL: string;
  cert: string;
  frm: string;
  erp: string;
  scr: string;
}

@Component({
  selector: 'app-member-directory',
  templateUrl: './member-directory.component.html',
  styleUrls: ['./member-directory.component.scss']
})
export class MemberDirectoryComponent {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  hasUpsellMembershipType: any;
  noResultText: string;
  seachName: any;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
  }
  public deviceType$: Observable<string> = of('default');
  isChecked: Boolean = false;
  @ViewChild('searchbar') searchbar!: ElementRef;

  frm = 'https://www.garp.org/hubfs/Website/FRM/Images/a2r5d000003oVAjAAM_FRM_Badge_web.png';
  erp = 'https://www.garp.org/hubfs/Website/Logos/ERP-Badge.png';
  scr = 'https://www.garp.org/hubfs/Website/Logos/SCR-Badge.png';
 
  memberData:any =[];
  public isLoaded = true;
  searchText = '';
  toppings = new FormControl();
  hideFlag = false;
  selectedIndustries: any;
  selectedJobFunctions: any;
  selectedProfessionalLevel: any;
  selectedRiskSpecialties: any;

  public bankMultiFilterCtrl: FormControl = new FormControl();

  toggleSearch: boolean = false;
  columnsToDisplay = ['industries', 'jobFunctions', 'professionallevel', 'riskSpecialty', 'cert'];
  private destroyed$ = new Subject<void>();
  public isFRMOnly: boolean = false;
  public isERPOnly: boolean = false;
  public isSCROnly: boolean = false;
  public industries: string = "";
  public jobFunctions: string = "";
  public riskSpecialties: string = "";
  public corporateTitles: string = "";
  public company: string = "";
  public sortField: string = "";
  public sortOrder: string = "";
  public pageSize: number = 10;
  public pageCurrent: number = 1;
  industriesList: any = [];
  jobFunctionsList: any = [];
  professionalLevelList: any = [];
  public isLoading: boolean = true;
  isShowList: boolean = true;
  riskSpecialtiesList: any = [];
  hasAdvancedSearch: any;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<Section> = new MatTableDataSource<Section>(this.memberData);

  constructor(public dialog: MatDialog,private breakpointService: BreakpointService, private vfService: VfRemotingManagerService, private changeDetectorRef: ChangeDetectorRef, private route:ActivatedRoute) {
    this.toggleSearch = false;
    this.deviceType$ = this.breakpointService.deviceType$;
  }

  ngOnInit(){
    this.route.data.subscribe((data:any) => {
      document.title = data.title || 'Default Title';
    });
    this.route.queryParams.subscribe((params:any) => {
        this.searchText =  params['text'];
       
      });
      this.searchText ? this.openSearch() : "";
    this.getDirectorySearchFormInfo();
  }

  ngAfterContentChecked() {
    this.changeDetectorRef.detectChanges();
    this.obs = this.dataSource.connect();
  }
  getDirectorySearchFormInfo() {
    this.vfService.getDirectorySearchFormInfo()
      .pipe(takeUntil(this.destroyed$)).subscribe((data) => {
        this.industriesList = data.industries;
        this.jobFunctionsList = data.jobFunctions;
        this.professionalLevelList = data.professionalLevels;
        this.riskSpecialtiesList = data.riskSpecialties;
        this.hasAdvancedSearch = data.hasAdvancedSearch;
        this.hasUpsellMembershipType = data.hasUpsellMembershipType;
        this.isLoading = false;
        this.hasAdvancedSearch ? this.seachName="HIDE ADVANCED" : this.seachName ="SHOW ADVANCED";
        this.hideFlag =  this.hasAdvancedSearch;
      });
  }

  fetchAdvancedSearch() {
    this.memberData=[];
    let obj = {
      FRMOnly: this.isFRMOnly,
      ERPOnly: this.isERPOnly,
      SCROnly: this.isSCROnly,
      searchText: this.searchText,
      industries: this.selectedIndustries ? this.selectedIndustries.join(", ") : "",
      jobFunctions: this.selectedJobFunctions ? this.selectedJobFunctions.join(", ") : "",
      riskSpecialties: this.selectedRiskSpecialties ? this.selectedRiskSpecialties.join(", ") : "",
      corporateTitles: this.selectedProfessionalLevel ? this.selectedProfessionalLevel.join(", ") : "",
      company: this.company,
      sortField: 'LastName',
      sortOrder: 'DESC',
      pageSize: this.pageSize,
      pageCurrent: this.pageCurrent
    }
    forkJoin([
      this.vfService.getDirectorySearchResults(obj)
    ])
      .pipe(takeUntil(this.destroyed$)).subscribe(([memberInfo]) => {

        if (memberInfo instanceof Error) {
          console.error(memberInfo);
          return;
        }
        if(memberInfo.searchResults.members.length > 0){
         this.isShowList =true;
         this.memberData = memberInfo.searchResults.members;
         this.dataSource = new MatTableDataSource <any> (this.memberData); //pass the array you want in the table

        } else {
          this.isShowList =false;
          this.memberData=[];
          this.noResultText = "No results found.";
        }
      });
  }

  showAdvanced() {
    this.hideFlag = !this.hideFlag;
    this.hideFlag ? this.seachName="HIDE ADVANCED" : this.seachName ="SHOW ADVANCED";
  }

  openSearch() {
    this.searchText ? this.fetchAdvancedSearch() : "";
    this.toggleSearch = true;
    this.searchbar?.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }
  clearFilter(event: any) {
    this.searchText = "";
    this.selectedIndustries = null;
    this.selectedJobFunctions = null;
    this.selectedProfessionalLevel = null;
    this.selectedRiskSpecialties = null;
    this.isFRMOnly = false;
    this.isERPOnly = false;
    this.isSCROnly = false;
  }
  memberDetails(member:any) {
    this.dialog.open(MemberDetailsDialogComponent, {
      data: {
        member: member,
      }
    });
    }
  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}
