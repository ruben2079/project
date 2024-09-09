import { Injectable, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, forkJoin, map, switchMap, takeUntil, tap, of, take, mergeMap, shareReplay } from 'rxjs';
import { CourseDetailInfo, EbookItem, ProgramData } from '../common/interfaces';
import { VfRemotingManagerService } from './vf-remoting-manager.service';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  private userDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  private profileModalDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public profileModalData$: Observable<any> = this.profileModalDataSubject;
  public profileModalooleanChanged = new EventEmitter<boolean>();
  public userData$: Observable<any> = this.userDataSubject.asObservable();

  private profileModalSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public isProfileModalOpen$: Observable<any> = this.profileModalSubject.asObservable();

  private componentCPDInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  public componentCPDInfo$: Observable<any> = this.componentCPDInfo.asObservable();

  private destroy$ = new Subject<void>();

  private frmProgramDetailInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  private scrProgramDetailInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  private frrProgramDetailInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  private ffrProgramDetailInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  private raiProgramDetailInfo: BehaviorSubject<any> = new BehaviorSubject(null);

  private ebookItems = new BehaviorSubject<EbookItem[]>([]);
  public ebookItems$ = this.ebookItems.asObservable();

  private pendingRequests = new Map<string, Observable<any>>();

  constructor(private router: Router, private title: Title, private route: ActivatedRoute, private vfRemoter: VfRemotingManagerService) { }

  setFRMProgramDetailInfo(frmProgramDetailInfo: ProgramData) {
    this.frmProgramDetailInfo.next(frmProgramDetailInfo);
  }

  getFRMProgramDetailInfo(useCache = true): Observable<ProgramData> {
    if (!useCache || !this.frmProgramDetailInfo.value) {
      if (this.pendingRequests.has('frmProgramDetailInfo')) {
        return this.pendingRequests.get('frmProgramDetailInfo') as Observable<ProgramData>;
      } else {
        const request = this.vfRemoter.getFRMProgramDetailInfo().pipe(
          mergeMap((details: any) => {
            const eBookItems = details?.programsDetailInfo?.examResources?.eBookItems;
            this.setFRMProgramDetailInfo(details.programsDetailInfo);

            if (eBookItems && eBookItems.length > 0) {
              return this.vfRemoter.getEBookAccessURLs(eBookItems).pipe(
                tap(updatedEbookItems => {
                  if (updatedEbookItems) {
                    details.programsDetailInfo.examResources.ebookItems = updatedEbookItems;
                    this.setEbookItems(updatedEbookItems);
                  }
                }),
                map(() => details)
              );
            } else {
              return of(details);
            }
          }),
          shareReplay(1),
          tap(() => this.pendingRequests.delete('frmProgramDetailInfo'))
        );
        this.pendingRequests.set('frmProgramDetailInfo', request);
        return request;
      }
    } else {
      return this.frmProgramDetailInfo.asObservable();
    }
  }

  setSCRProgramDetailInfo(scrProgramDetailInfo: ProgramData) {
    this.scrProgramDetailInfo.next(scrProgramDetailInfo);
  }

  getSCRProgramDetailInfo(useCache = true): Observable<ProgramData> {
    if (!useCache || !this.scrProgramDetailInfo.value) {
      if (this.pendingRequests.has('scrProgramDetailInfo')) {
        return this.pendingRequests.get('scrProgramDetailInfo') as Observable<ProgramData>;
      } else {
        const request = this.vfRemoter.getSCRProgramDetailInfo().pipe(
          mergeMap((details: any) => {
            const eBookItems = details?.programsDetailInfo?.examResources?.eBookItems;
            this.setSCRProgramDetailInfo(details?.programsDetailInfo);

            if (eBookItems && eBookItems.length > 0) {
              return this.vfRemoter.getEBookAccessURLs(eBookItems).pipe(
                tap(updatedEbookItems => {
                  if (updatedEbookItems) {
                    details.programsDetailInfo.examResources.ebookItems = updatedEbookItems;
                    this.setEbookItems(updatedEbookItems);
                  }
                }),
                map(() => details)
              );
            } else {
              return of(details);
            }
          }),
          shareReplay(1),
          tap(() => this.pendingRequests.delete('scrProgramDetailInfo'))
        );
        this.pendingRequests.set('scrProgramDetailInfo', request);
        return request;
      }
    } else {
      return this.scrProgramDetailInfo.asObservable();
    }
  }

  // FFR (also known as FBR)
  getFFRProgramDetailInfo(useCache = true): Observable<ProgramData> {
    if (!useCache || !this.ffrProgramDetailInfo.value) {
      if (this.pendingRequests.has('ffrProgramDetailInfo')) {
        return this.pendingRequests.get('ffrProgramDetailInfo') as Observable<ProgramData>;
      } else {
        const request = this.vfRemoter.getFFRProgramDetailInfo().pipe(
          mergeMap((details: any) => {
            const eBookItems = details?.programsDetailInfo?.examResources?.eBookItems;
            this.setFFRProgramDetailInfo(details.programsDetailInfo);

            if (eBookItems && eBookItems.length > 0) {
              return this.vfRemoter.getEBookAccessURLs(eBookItems).pipe(
                tap(updatedEbookItems => {
                  if (updatedEbookItems) {
                    details.programsDetailInfo.examResources.ebookItems = updatedEbookItems;
                    this.setEbookItems(updatedEbookItems);
                  }
                }),
                map(() => details)
              );
            } else {
              return of(details);
            }
          }),
          shareReplay(1),
          tap(() => this.pendingRequests.delete('ffrProgramDetailInfo'))
        );
        this.pendingRequests.set('ffrProgramDetailInfo', request);
        return request;
      }
    } else {
      return this.ffrProgramDetailInfo.asObservable();
    }
  }

  setFFRProgramDetailInfo(ffrProgramDetailInfo: ProgramData) {
    this.ffrProgramDetailInfo.next(ffrProgramDetailInfo);
  }

  // FRR (also known as ICBRR)
  getFRRProgramDetailInfo(useCache = true): Observable<ProgramData> {
    if (!useCache || !this.ffrProgramDetailInfo.value) {
      if (this.pendingRequests.has('frrProgramDetailInfo')) {
        return this.pendingRequests.get('frrProgramDetailInfo') as Observable<ProgramData>;
      } else {
        const request = this.vfRemoter.getFRRProgramDetailInfo().pipe(
          mergeMap((details: any) => {
            const eBookItems = details?.programsDetailInfo?.examResources?.eBookItems;
            this.setFRRProgramDetailInfo(details?.programsDetailInfo);

            if (eBookItems && eBookItems.length > 0) {
              return this.vfRemoter.getEBookAccessURLs(eBookItems).pipe(
                tap(updatedEbookItems => {
                  if (updatedEbookItems) {
                    details.programsDetailInfo.examResources.ebookItems = updatedEbookItems;
                    this.setEbookItems(updatedEbookItems);
                  }
                }),
                map(() => details)
              );
            } else {
              return of(details);
            }
          }),
          shareReplay(1),
          tap(() => this.pendingRequests.delete('frrProgramDetailInfo'))
        );
        this.pendingRequests.set('frrProgramDetailInfo', request);
        return request;
      }
    } else {
      return this.frrProgramDetailInfo.asObservable();
    }
  }

  setFRRProgramDetailInfo(frrProgramDetailInfo: ProgramData) {
    this.frrProgramDetailInfo.next(frrProgramDetailInfo);
  }


  getRiskAIProgramDetailInfo(useCache = true): Observable<ProgramData> {
    if (!useCache || !this.raiProgramDetailInfo.value) {
      if (this.pendingRequests.has('raiProgramDetailInfo')) {
        return this.pendingRequests.get('raiProgramDetailInfo') as Observable<ProgramData>;
      } else {
        const request = this.vfRemoter.getRiskAIProgramDetailInfo().pipe(
          mergeMap((details: any) => {
            const eBookItems = details?.programsDetailInfo?.examResources?.eBookItems;
            this.setRAIProgramDetailInfo(details?.programsDetailInfo);

            if (eBookItems && eBookItems.length > 0) {
              return this.vfRemoter.getEBookAccessURLs(eBookItems).pipe(
                tap(updatedEbookItems => {
                  if (updatedEbookItems) {
                    details.programsDetailInfo.examResources.ebookItems = updatedEbookItems;
                    this.setEbookItems(updatedEbookItems);
                  }
                }),
                map(() => details)
              );
            } else {
              return of(details);
            }
          }),
          shareReplay(1),
          tap(() => this.pendingRequests.delete('raiProgramDetailInfo'))
        );
        this.pendingRequests.set('raiProgramDetailInfo', request);
        return request;
      }
    } else {
      return this.raiProgramDetailInfo.asObservable();
    }
  }

  setRAIProgramDetailInfo(frrProgramDetailInfo: ProgramData) {
    this.frrProgramDetailInfo.next(frrProgramDetailInfo);
  }

  setTitleFromRouteData() {
    this.route.data.pipe(
      map((data: any) => data['title']),
      takeUntil(this.destroy$)
    ).subscribe(title => {
      this.title.setTitle(title);
    });
  }

  isObjectEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  setUserData(userData: any) {
    this.userDataSubject.next(userData);
  }

  getUserData(): Observable<any> {
    return this.userData$;
  }

  setProfileModalData(profileModalData: any) {
    this.profileModalDataSubject = profileModalData;
  }

  getProfileModalData(): Observable<any> {
    return this.profileModalData$;
  }

  updateProfileModalData(value: boolean) {
    this.profileModalooleanChanged.emit(value);
  }

  setProfileModalOn(toggle: boolean) {
    this.profileModalSubject.next(toggle);
  }

  getProfileModalOn(): Observable<any> {
    return this.isProfileModalOpen$;
  }

  navigateToRegistration(): void {
    this.router.navigateByUrl('https://www.garp.org/#!/frm/register');
  }

  setComponentCPDInfo(data: any) {
    this.componentCPDInfo.next(data);
  }

  getComponentCPDInfo(): Observable<any> {
    return this.componentCPDInfo$;
  }

  getProgramDisplayName(programType: string) {
    if (programType) {

      switch (programType.toLowerCase()) {
        case 'frm':
          return 'Financial Risk Manager (FRM \u00AE)';
        case 'scr':
          return 'Sustainability & Climate Risk Manager (SCR \u00AE)';
        case 'ffr':
          return 'Foundations of Financial Risk (FFR \u00AE)';
        case 'frr':
          return 'Financial Risk & Regulation (FRR \u00AE)';
        case 'rai':
          return 'Risk AI (RAI \u00AE)';
        default:
          return '';
      }
    }
    return '';
  }

  setEbookItems(ebookItems: EbookItem[]) {
    this.ebookItems.next(ebookItems);
  }

  getEbookItems(): Observable<any> {
    return this.ebookItems$;
  }
}
