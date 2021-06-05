import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { PermissionChecker } from 'src/app/auth/permission-checker';

@Injectable({
  providedIn: 'root',
})
export class NotEmptyTenantGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  async canActivate(
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

    if (!permissionChecker.isEmptyTenant) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
