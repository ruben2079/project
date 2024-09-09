import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilitiesService } from '../services/utilities.service';
import { VfRemotingManagerService } from '../services/vf-remoting-manager.service';

export class studyMaterialsGuardGuard implements CanActivate {
  constructor(
    private vfService: VfRemotingManagerService,
    private utilitiesService: UtilitiesService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // ...
  }

  // getMemberProfileInfo(): Observable<any> {
  //   return this.vfService.getMemberProfileInfo().pipe(
  //     tap(data => this.utilitiesService.setUserData(data))
  //   );
  // }
}
