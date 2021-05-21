import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Permissions } from 'src/security/permissions';
import { PermissionChecker } from 'src/app/auth/permission-checker';

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  constructor(private authService: AuthService) {}

  get hasPermissionToRead() {
    return true;
  }

  hasPermissionToDestroy(tenant) {
    return new PermissionChecker(
      tenant,
      this.authService.currentUser,
    ).match(Permissions.values.tenantDestroy);
  }

  hasPermissionToEdit(tenant) {
    return new PermissionChecker(
      tenant,
      this.authService.currentUser,
    ).match(Permissions.values.tenantEdit);
  }

  get hasPermissionToCreate() {
    return true;
  }
}
