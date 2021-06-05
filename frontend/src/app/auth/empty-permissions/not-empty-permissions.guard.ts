import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotEmptyPermissionsGuard
  implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    await this.auth.initialized;

    if (this.auth.isSignedIn && this.auth.roles.length) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
