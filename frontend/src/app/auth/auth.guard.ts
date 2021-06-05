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
import { PermissionChecker } from 'src/app/auth/permission-checker';
import { environment } from 'src/environments/environment';
import { tenantSubdomain } from 'src/app/tenant/tenant-subdomain';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    return this.canActivate(childRoute, state);
  }

  public canLoad(route: Route) {
    return this.canActivate(null, null);
  }

  public async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    await this.auth.initialized;

    const permissionChecker = new PermissionChecker(
      this.auth.currentTenant,
      this.auth.currentUser,
    );

    if (!permissionChecker.isAuthenticated) {
      this.router.navigate(['/auth/signin']);
      return false;
    }

    if (
      !this.nextEquals(next, 'email-unverified') &&
      !permissionChecker.isEmailVerified
    ) {
      this.router.navigate(['/auth/email-unverified']);
      return false;
    }

    if (
      ['multi', 'multi-with-subdomain'].includes(
        environment.tenantMode,
      ) &&
      !tenantSubdomain.isSubdomain
    ) {
      if (
        !this.nextEquals(next, 'tenant') &&
        permissionChecker.isEmailVerified &&
        permissionChecker.isEmptyTenant
      ) {
        this.router.navigate(['/auth/tenant']);
        return false;
      }
    } else {
      if (
        !this.nextEquals(next, 'empty-permissions') &&
        permissionChecker.isEmailVerified &&
        permissionChecker.isEmptyPermissions
      ) {
        this.router.navigate(['/auth/empty-permissions']);
        return false;
      }
    }

    return true;
  }

  private nextEquals(
    next: ActivatedRouteSnapshot,
    path: string,
  ) {
    if (!next || !next.url || !next.url[0]) {
      return false;
    }

    return next.url
      .map((u) => u.path)
      .find((p) => p.includes(path));
  }
}
