import { Injectable } from '@angular/core';
import { VfRemotingManagerService } from '../vf-remoting-manager.service';
import { BehaviorSubject, Observable, forkJoin, map, of, shareReplay, switchMap, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  // Used to store and retrieve data from the API call
  private advertisementInfo: any;
  private memberProfileInfo: any;
  private dashCard: any;
  private examAlertsInfo: any;
  private examAlertsList: any;
  private cpdInfo: any;
  private enrolledProgramsInfo: any;
  private eventsInfo: any;
  private allNotifications: any;

  private dashboardCardDetails: any;
  private dashboardCardsList: any;
  private dashboardData$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private vfService: VfRemotingManagerService) {
    this.dashboardCardDetails = this.dashboardCardDetails || {};
  }

  getDashboardData(destroyed$: Observable<any>): Observable<any> {
    return this.dashboardData$.pipe(
      switchMap(data => {
        if (data !== null) {
          return of(data);
        } else {
          return this.vfService.getDashboardInfo().pipe(
            switchMap((cards: any) => {
              this.dashboardCardsList = cards;
              const cardDetailsObservables = cards.map((card: any) => {
                let detailsObservable: Observable<any> = of(null);
                if (card.name === 'Advertisement') {
                  detailsObservable = this.getAdvertisementInfo();
                } else if (card.name === 'Member Profile') {
                  detailsObservable = this.getMemberProfileInfo();
                } else if (card.name === 'Exam Alerts') {
                  detailsObservable = forkJoin({
                    'Exam Alerts': this.getExamAlertsInfo(),
                    'Exam Alerts List': this.getExamAlertsList()
                  });
                } else if (card.name === 'CPD') {
                  detailsObservable = this.getCPDInfo();
                } else if (card.name === 'Enrolled Programs') {
                  detailsObservable = this.getEnrolledProgramsInfo();
                } else if (card.name === 'Events') {
                  detailsObservable = this.getEventsInfo();
                }
                if (detailsObservable) {
                  return detailsObservable.pipe(
                    map((details: any) => {
                      this.dashboardCardDetails[card.name] = details;
                    }),
                    takeUntil(destroyed$)
                  );
                } else {
                  this.dashboardCardDetails[card.name] = { ...card };
                  return of(null);
                }
              });
              return forkJoin(cardDetailsObservables).pipe(
                map(() => this.dashboardCardDetails)
              );
            })
          );
        }
      })
    );
  }

  setDashboardCardList(data: any) {
    this.dashboardCardsList = data;
  }

  getDashboardCardList(): any {
    return this.dashboardCardsList;
  }

  setDashboardCardDetails(data: any) {
    this.dashboardCardDetails = data;
  }

  getDashboardCardDetails(): any {
    return this.dashboardCardDetails;
  }

  setDashcard(data: any) {
    this.dashCard = data;
  }

  getDashcard(): any {
    return this.dashCard;
  }

  setExamAlertsInfo(data: any) {
    this.examAlertsInfo = data;
  }

  getExamAlertsInfo(): Observable<any> {
    if (this.examAlertsInfo) {
      return of(this.examAlertsInfo);
    } else {
      return this.vfService.getComponentNewNotificationsInfo().pipe(
        switchMap(data => {
          this.examAlertsInfo = data;
          return of(this.examAlertsInfo);
        })
      );
    }
  }

  setExamAlertsList(data: any) {
    this.examAlertsList = data;
  }

  getExamAlertsList(): Observable<any[]> {
    if (this.examAlertsList) {
      return of(this.examAlertsList);
    } else {
      return this.vfService.getAllNotifications().pipe(
        switchMap(data => {
          this.examAlertsList = data;
          return of(this.examAlertsList);
        })
      );
    }
  }
  // Advertisement Info
  getAdvertisementInfo(): Observable<any> {
    if (this.advertisementInfo) {
      return of(this.advertisementInfo);
    } else {
      return this.vfService.getComponentAdInfo().pipe(
        tap(data => {
          this.advertisementInfo = data;
          return data;
        })
      );
    }
  }

  setAdvertisementInfo(data: any) {
    this.advertisementInfo = data;
  }

  // Member Profile Info
  getMemberProfileInfo(): Observable<any> {
    if (this.memberProfileInfo) {
      return of(this.memberProfileInfo);
    } else {
      return this.vfService.getComponentUpdateProfileInfo().pipe(
        tap(data => {
          this.memberProfileInfo = data;
          return data;
        })
      );
    }
  }

  setMemberProfileInfo(data: any) {
    this.memberProfileInfo = data;
  }

  // All Notifications
  getAllNotifications(): Observable<any> {
    if (this.allNotifications) {
      return of(this.allNotifications);
    } else {
      return this.vfService.getAllNotifications().pipe(
        tap(data => {
          this.allNotifications = data;
          return data;
        })
      );
    }
  }

  setAllNotifications(data: any) {
    this.allNotifications = data;
  }

  // CPD Info
  getCPDInfo(): Observable<any> {
    if (this.cpdInfo) {
      return of(this.cpdInfo);
    } else {
      return this.vfService.getComponentCPDInfo().pipe(
        tap(data => {
          this.cpdInfo = data;
          return data;
        })
      );
    }
  }

  setCPDInfo(data: any) {
    this.cpdInfo = data;
  }

  // Enrolled Programs Info
  getEnrolledProgramsInfo(): Observable<any> {
    if (this.enrolledProgramsInfo) {
      return of(this.enrolledProgramsInfo);
    } else {
      return this.vfService.getComponentEnrolledProgramsInfo().pipe(
        tap(data => {
          this.enrolledProgramsInfo = data;
          return data;
        })
      );
    }
  }

  setEnrolledProgramsInfo(data: any) {
    this.enrolledProgramsInfo = data;
  }

  // Upcoming Events Info
  getEventsInfo(): Observable<any> {
    if (this.eventsInfo) {
      return of(this.eventsInfo);
    } else {
      return this.vfService.getComponentUpcomingEventsInfo().pipe(
        tap(data => {
          this.eventsInfo = data;
          return data;
        })
      );
    }
  }

  setEventsInfo(data: any) {
    this.eventsInfo = data;
  }
}
