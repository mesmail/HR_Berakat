import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SettingsService } from 'src/app/settings/settings.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    await this.authService.initialized;

    if (!route.data['permission']) {
      this.router.navigate(['']);
      return false;
    }

    if (
      !this.authService.hasPermission(
        route.data['permission'],
      )
    ) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
