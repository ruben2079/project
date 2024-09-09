import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { VfRemotingManagerService } from '../../services/vf-remoting-manager.service';
import { Subject, forkJoin, of } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { ActivatedRoute } from '@angular/router';
import { DashboardDataService } from 'src/app/services/dashboard-data/dashboard-data.service';


export interface Tile {
  title?: string;
  subtitle?: string;
  content?: string;
  imageURL?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public isLoading = true;
  public memberProfileData: any;
  public dashboardCardDetails: any = {};
  public dashboardCardsList: any;
  public isProfileModalOpen: boolean = false;

  private destroyed$ = new Subject<void>();
  tiles: Tile[] = [
    { title: 'Title', subtitle: 'Subtitle', content: 'Content Description', imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content Description', imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content Description', imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg" },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content Description', imageURL: "https://material.angular.io/assets/img/examples/shiba2.jpg" }
  ];

  constructor(private vfService: VfRemotingManagerService, private changeDetectorRef: ChangeDetectorRef, private utilities: UtilitiesService, private route: ActivatedRoute, private dashboardDataService: DashboardDataService) { }

  ngOnInit(): void {
    console.log('DashboardComponent initialized');
    this.fetchDashboardList();
    this.getProfileDemographicsFormInfo();
    this.utilities.profileModalooleanChanged.subscribe(res => {
      this.isProfileModalOpen = res;
    })
    this.route.data.subscribe((data: any) => {
      document.title = data.title || 'Default Title';
    });
  }

  getProfileDemographicsFormInfo() {
    this.vfService.getProfileDemographicsFormInfo()
      .pipe(takeUntil(this.destroyed$)).subscribe((data) => {
        if (data instanceof Error) {
          console.error(data);
          return;
        }
        console.log('dashboard - getProfileDemographicsFormInfo()', data);
      });
  }

  fetchDashboardList() {
    this.dashboardDataService.getDashboardData(this.destroyed$).subscribe(data => {
      this.dashboardCardDetails = data;
      this.dashboardCardsList = this.dashboardDataService.getDashboardCardList();
      console.log('dashboard - dashboardCardDetails()', this.dashboardCardDetails);
      console.log('dashboard - dashboardCardsList()', this.dashboardCardsList);
    });
  }

  isObjectEmpty(obj: any) {
    return this.utilities.isObjectEmpty(obj);
  }
}
