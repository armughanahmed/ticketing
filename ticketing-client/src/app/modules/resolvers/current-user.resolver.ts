import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { DashboardService } from '../dashboard/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserResolver implements Resolve<any> {
  constructor(private _dashboardService: DashboardService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this._dashboardService
      .currentUser()
      .pipe(catchError((error) => of(null)));
  }
}
