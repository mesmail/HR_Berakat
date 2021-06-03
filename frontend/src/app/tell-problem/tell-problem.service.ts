import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Permissions } from 'src/security/permissions';

@Injectable({
  providedIn: 'root',
})
export class TellProblemService {
  constructor(private authService: AuthService) {}

  get lockedForCurrentPlan() {
    return this.authService.lockedForCurrentPlan(
      Permissions.values.tellProblemRead,
    );
  }

  get hasPermissionToRead() {
    return this.authService.hasPermission(
      Permissions.values.tellProblemRead,
    );
  }

  get hasPermissionToDestroy() {
    return this.authService.hasPermission(
      Permissions.values.tellProblemDestroy,
    );
  }

  get hasPermissionToEdit() {
    return this.authService.hasPermission(
      Permissions.values.tellProblemEdit,
    );
  }

  get hasPermissionToCreate() {
    return this.authService.hasPermission(
      Permissions.values.tellProblemCreate,
    );
  }

  get hasPermissionToImport() {
    return this.authService.hasPermission(
      Permissions.values.tellProblemImport,
    );
  }
}
