import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TenantModel } from 'src/app/tenant/tenant-model';
import { AuthService } from 'src/app/auth/auth.service';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { TenantInvitationService } from 'src/app/tenant/invitation/tenant-invitation.service';

@Component({
  selector: 'app-tenant-select-form',
  templateUrl: './tenant-select-form.component.html',
})
export class TenantSelectFormComponent implements OnInit {
  @Output() viewToggle = new EventEmitter();

  form: FormGroup;
  schema: FormSchema;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public authService: AuthService,
    public tenantInvitationService: TenantInvitationService,
  ) {}

  ngOnInit() {
    this.buildSchema();
    this.form = this.schema.buildForm({
      [this.fields.tenantId.name]: this.invitedTenants[0]
        .id,
    });
  }

  get fields() {
    return TenantModel.fields;
  }

  get loading() {
    return this.tenantInvitationService.loading;
  }

  get invitedTenants() {
    return this.authService.invitedTenants;
  }

  async doSubmit() {
    if (!this.form.valid) {
      return;
    }

    const tenantUserInvitation = this.authService.currentUser.tenants.find(
      (tenantUser) =>
        tenantUser.tenant.id === this.form.value.id,
    );

    await this.tenantInvitationService.doAccept(
      tenantUserInvitation.invitationToken,
    );
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [this.fields.tenantId],
      this.formBuilder,
    );
  }
}
