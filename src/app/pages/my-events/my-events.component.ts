import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Event, Events } from 'src/app/common/interfaces/events.interface';
import { DashboardDataService } from 'src/app/services/dashboard-data/dashboard-data.service';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent {
  private destroy$ = new Subject<void>();
  public filterStrName: string = 'all';
  public eventsData: Events;
  public dashboardCardDetails: any;
  public examAlertsList: any;

  constructor(private router: Router, private route:ActivatedRoute, private vfService: VfRemotingManagerService, private dashboardDataService: DashboardDataService){}

  ngOnInit(){
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data:any) => {
      document.title = data.title || 'Default Title';
    });

    this.getEventsData();
    this.getDashboardCardDetails();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getEventsData() {
    this.vfService.getEventsListingInfo().subscribe((res:any) => {
      this.eventsData = res;
    });
  }

  navigateToEventLink(event: Event) {
    if(event.eventType.toLowerCase() === 'webcast') {
      const url = `https://www.garp.org/${event.eventType}/slug`;
      window.open(url, "_blank");
    } else {
      // Some other event link
    }
  }

  navigateToAllEvents() {
    const url = `https://www.garp.org/events/all`;
    window.open(url, "_blank");
  }

  navigateToMyAccount() {
    this.router.navigate(['/myaccount']);
  }

  getDashboardCardDetails() {
    this.dashboardDataService.getDashboardData(this.destroy$).subscribe((data) => {
      this.dashboardCardDetails = data?.['Exam Alerts']?.['Exam Alerts'];
      this.examAlertsList = data?.['Exam Alerts']?.['Exam Alerts List'];
    });
  }
}
