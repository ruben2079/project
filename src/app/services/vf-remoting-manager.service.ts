import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, defer, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VfRemotingManagerService {
  constructor() {
    console.log('service', (window as any).garpService);
  }

  // public getMemberProfileInfo(): Observable<any> {
  //   return defer(() => {
  //     return new Promise((resolve) => {
  //       (window as any).garpService.getMemberProfileInfo(
  //         (err: any, data: any) => {
  //           if (!data.status) resolve(new Error(err));
  //           console.log('vfService.getMemberProfileInfo - data', data);
  //           resolve(data.result);
  //         }
  //       );
  //     });
  //   });
  // }

  public getAlertBarInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getAlertBarInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getAlertBarInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getProfileDemographicsFormInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getProfileDemographicsFormInfo(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getProfileDemographicsFormInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public setUpdateProfileFormInfo(data: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.setUpdateProfileFormInfo(data,
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.setUpdateProfileFormInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getNavBarInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getNavBarInfo(
          (err: any, data: any) => {
            if (!data.status) resolve(new Error(err));
            console.log('vfService.getNavBarInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getStudyMaterials(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getStudyMaterials(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getStudyMaterials - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getStudyMaterialListing(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getStudyMaterialListing(
          (err: any, data: any) => {
            if (!data) resolve(new Error(err));
            console.log('vfService.getStudyMaterialListing - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public muteProfileComponent(data: boolean): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.muteProfileComponent(data,
          (err: any, data: any) => {
            if (!data) resolve(new Error(err));
            console.log('vfService.muteProfileComponent - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  // public getMyEBooks(): Observable<any> {
  //   console.log('getMyEBooks', (window as any).garpService.getMyEBooks);
  //   return defer(() => {
  //     return new Promise((resolve) => {
  //       (window as any).garpService.getStudyMaterials(
  //         (err: any, data: any) => {
  //           console.log('Error:', err);
  //           console.log('Data:', data);
  //           if (err) resolve(new Error(err));
  //           console.log('vfService.getStudyMaterials - data', data);
  //           resolve(data.result);
  //         }
  //       );
  //     });
  //   });
  // }

  // DASHBOARD METHODS
  public getDashboardInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getDashboardInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getDashboardInfo - data', data);
            resolve(data.result.dashboardComponents);
            /*
              dashboardComponents: [{name: 'Member Profile', rankOrder: 8}
              {name: 'Advertisement', rankOrder: 10}
              {name: 'Member Directory', rankOrder: 30}]
            */
          }
        );
      });
    });
  }

  public getComponentAdInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getComponentAdInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getComponentAdInfo - data', data);
            resolve(data.result);
            /*
              dashboardComponents: [{name: 'Member Profile', rankOrder: 8}
              {name: 'Advertisement', rankOrder: 10}
              {name: 'Member Directory', rankOrder: 30}]
            */
          }
        );
      });
    });
  }

  public getComponentUpdateProfileInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getComponentUpdateProfileInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getComponentUpdateProfileInfo - data', data);
            resolve(data.result);
            /*
              dashboardComponents: [{name: 'Member Profile', rankOrder: 8}
              {name: 'Advertisement', rankOrder: 10}
              {name: 'Member Directory', rankOrder: 30}]
            */
          }
        );
      });
    });
  }

  public getComponentNewNotificationsInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getComponentNewNotificationsInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getComponentNewNotificationsInfo - data', data);
            resolve(data.result);
            /*
              dashboardComponents: [{name: 'Member Profile', rankOrder: 8}
              {name: 'Advertisement', rankOrder: 10}
              {name: 'Member Directory', rankOrder: 30}]
            */
          }
        );
      });
    });
  }

  public getComponentCPDInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getComponentCPDInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getComponentCPDInfo - data', data);
            resolve(data.result);
            /*
              dashboardComponents: [{name: 'Member Profile', rankOrder: 8}
              {name: 'Advertisement', rankOrder: 10}
              {name: 'Member Directory', rankOrder: 30}]
            */
          }
        );
      });
    });
  }

  public getComponentEnrolledProgramsInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getComponentEnrolledProgramsInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getComponentEnrolledProgramsInfo - data', data);
            resolve(data.result);
            /*
              dashboardComponents: [{name: 'Member Profile', rankOrder: 8}
              {name: 'Advertisement', rankOrder: 10}
              {name: 'Member Directory', rankOrder: 30}]
            */
          }
        );
      });
    });
  }

  public getComponentUpcomingEventsInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getComponentUpcomingEventsInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getComponentUpcomingEventsInfo - data', data);
            resolve(data.result);
            /*
              dashboardComponents: [{name: 'Member Profile', rankOrder: 8}
              {name: 'Advertisement', rankOrder: 10}
              {name: 'Member Directory', rankOrder: 30}]
            */
          }
        );
      });
    });
  }

  public getProgramsListingInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getProgramsListingInfo(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getProgramsListingInfo - data', data);
            resolve(data.result);
            /*
              dashboardComponents: [{name: 'Member Profile', rankOrder: 8}
              {name: 'Advertisement', rankOrder: 10}
              {name: 'Member Directory', rankOrder: 30}]
            */
          }
        );
      });
    });
  }
  public getFRMProgramDetailInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getFRMProgramDetailInfo(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getFRMProgramDetailInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getSCRProgramDetailInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getSCRProgramDetailInfo(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getSCRProgramDetailInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getRiskAIProgramDetailInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getRiskAIProgramDetailInfo(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getRiskAIProgramDetailInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getFRRProgramDetailInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getFRRProgramDetailInfo(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getFRRProgramDetailInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }
  public getFFRProgramDetailInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getFFRProgramDetailInfo(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getFFRProgramDetailInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getEventsListingInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getEventsListingInfo(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            resolve(data.result);
          }
        );
      });
    });
  }

  public getAllNotifications(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getAllNotifications(
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getAllNotifications - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getDirectorySearchFormInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getDirectorySearchFormInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getDirectorySearchFormInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getDirectorySearchResults(obj: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.searchMemberDirectory(obj,
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getDirectorySearchResults - data', data);
            resolve(data.result);
          });
      });
    });
  }

  public sendMemberDirectoryMessage(obj: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.sendMemberDirectoryMessage(obj,
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.sendMemberDirectoryMessage - data', data);
            resolve(data);
          });
      })
    })
  }

  public getEBookAccessURL(vendorId: string): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getEBookAccessURL(vendorId,
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getEBookAccessURL - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getEBookAccessURLs(ebookItems: any[]): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getEBookAccessURLs(ebookItems,
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getEBookAccessURLs - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getMyEBooksInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getMyEBooksInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getMyEBooksInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public EPPOptIn(optIn: string): Observable<any> {
    console.log('garpService', (window as any).garpService);
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.EPPOptIn(optIn,
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.getEBookAccessURL - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getExamResultsListing(obj: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getExamResultsListing(obj,
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getExamResultsListing - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public getCPDListingInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getCPDListingInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getCPDListingInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  getPurchaseHistoryInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getPurchaseHistoryInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getPurchaseHistoryInfo - data', data);

          })
      })
    })
  }

  public getCPDClaimFormInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getCPDClaimFormInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getCPDClaimFormInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }
  getOrderInfo(orderNumber: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getOrderInfo(orderNumber,
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getOrderInfo - data', data);
          })
      })
    })
  }


  public setCPDClaimInfo(data: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.setCPDClaimInfo(data,
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.setCPDClaimInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  getProfilePersonalFormInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getProfilePersonalFormInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            // console.log('vfService.getProfilePersonalInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }
  getProfileChaptersInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getProfileChaptersInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getProfileChaptersInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }
  setProfileChaptersInfo(chapterPrimary: any, chapterSecondary: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.setProfileChaptersInfo(chapterPrimary, chapterSecondary,
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.setProfileChaptersInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }
  getProfileExpertiseInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getProfileExpertiseInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getProfileExpertiseInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }
  setProfileExpertiseInfo(obj: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.setProfileExpertiseInfo(obj,
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.setProfileExpertiseInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  getMemberDirectorySettingsFormInfo(): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.getMemberDirectorySettingsFormInfo(
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.getMemberDirectorySettingsFormInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }
  setMemberDirectorySettingsFormInfo(obj: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.setMemberDirectorySettingsFormInfo(obj,
          (err: any, data: any) => {
            console.log('Error:', err);
            if (err) resolve(new Error(err));
            console.log('vfService.setMemberDirectorySettingsFormInfo - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }

  public deleteCPDClaim(data: any): Observable<any> {
    return defer(() => {
      return new Promise((resolve) => {
        (window as any).garpService.deleteCPDClaim(data,
          (err: any, data: any) => {
            if (err) resolve(new Error(err));
            console.log('vfService.deleteCPDClaim - data', data);
            resolve(data.result);
          }
        );
      });
    });
  }
}
