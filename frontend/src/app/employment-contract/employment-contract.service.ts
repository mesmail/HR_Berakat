import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Permissions } from 'src/security/permissions';

@Injectable({
  providedIn: 'root',
})
export class EmploymentContractService {
  constructor(private authService: AuthService) {}

  get lockedForCurrentPlan() {
    return this.authService.lockedForCurrentPlan(
      Permissions.values.employmentContractRead,
    );
  }

  get hasPermissionToRead() {
    return this.authService.hasPermission(
      Permissions.values.employmentContractRead,
    );
  }

  get hasPermissionToDestroy() {
    return this.authService.hasPermission(
      Permissions.values.employmentContractDestroy,
    );
  }

  get hasPermissionToEdit() {
    return this.authService.hasPermission(
      Permissions.values.employmentContractEdit,
    );
  }

  get hasPermissionToCreate() {
    return this.authService.hasPermission(
      Permissions.values.employmentContractCreate,
    );
  }

  get hasPermissionToImport() {
    return this.authService.hasPermission(
      Permissions.values.employmentContractImport,
    );
  }
}
