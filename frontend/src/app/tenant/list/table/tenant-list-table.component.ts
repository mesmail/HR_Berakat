import { Component, OnInit } from '@angular/core';
import { TenantListService } from 'src/app/tenant/list/tenant-list.service';
import { TenantService } from 'src/app/tenant/tenant.service';
import { TenantModel } from 'src/app/tenant/tenant-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TenantDestroyService } from 'src/app/tenant/destroy/tenant-destroy.service';
import { i18n } from 'src/i18n';
import { TenantInvitationService } from 'src/app/tenant/invitation/tenant-invitation.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Plans } from 'src/security/plans';
import { environment } from 'src/environments/environment';
import { tenantSubdomain } from 'src/app/tenant/tenant-subdomain';

@Component({
  selector: 'app-tenant-list-table',
  templateUrl: './tenant-list-table.component.html',
})
export class TenantListTableComponent implements OnInit {
  constructor(
    public service: TenantListService,
    public authService: AuthService,
    public destroyService: TenantDestroyService,
    public tenantService: TenantService,
    public tenantInvitationService: TenantInvitationService,
    private confirmService: ConfirmService,
  ) {}

  ngOnInit() {
    return this.service.doFetch();
  }

  presenter(row, fieldName) {
    return TenantModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  get tenantSubdomain() {
    return tenantSubdomain;
  }

  doSelectTenant(tenant) {
    return this.authService.doSelectTenant(tenant);
  }

  urlOf(tenant) {
    return `${tenant.url}.${environment.frontendUrl.host}`;
  }

  async doAcceptInvitation(token) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.tenantInvitationService.doAccept(token);
  }

  async doDeclineInvitation(token) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.tenantInvitationService.doDecline(token);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get invitationLoading() {
    return this.tenantInvitationService.loading;
  }

  invitationToken(row) {
    return this.tenantInvitationService.invitationToken(
      row,
    );
  }

  hasPermissionToEdit(row) {
    return this.tenantService.hasPermissionToEdit(row);
  }

  hasPermissionToDestroy(row) {
    return this.tenantService.hasPermissionToDestroy(row);
  }

  get fields() {
    return TenantModel.fields;
  }

  get columns() {
    return [
      this.fields.name.name,
      tenantSubdomain.isEnabled && this.fields.url.name,
      environment.isPlanEnabled && this.fields.plan.name,
      '_actions',
    ].filter(Boolean);
  }

  get plans() {
    return Plans.values;
  }

  planLabelOf(plan) {
    return i18n(`plan.${plan}.label`);
  }

  isCurrentTenant(row) {
    return this.authService.currentTenant.id === row.id;
  }
}
