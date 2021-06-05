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
import { TenantFormPageService } from 'src/app/tenant/form/tenant-form-page.service';
import { tenantSubdomain } from 'src/app/tenant/tenant-subdomain';
import { environment } from 'src/environments/environment';
import { urlfy } from 'src/app/shared/urfly';

@Component({
  selector: 'app-tenant-new-form',
  templateUrl: './tenant-new-form.component.html',
})
export class TenantNewFormComponent implements OnInit {
  @Output() viewToggle = new EventEmitter();

  form: FormGroup;
  schema: FormSchema;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public authService: AuthService,
    public tenantFormService: TenantFormPageService,
  ) {}

  ngOnInit() {
    this.buildSchema();
    this.form = this.schema.buildForm();
    this.form
      .get(this.fields.tenantName.name)
      .valueChanges.subscribe((val) => {
        this.form
          .get(this.fields.tenantUrl.name)
          .setValue(urlfy(val));
      });
  }

  get fields() {
    return TenantModel.fields;
  }

  get loading() {
    return this.tenantFormService.saveLoading;
  }

  get invitedTenants() {
    return this.authService.invitedTenants;
  }

  get frontendUrlHost() {
    return `.${environment.frontendUrl.host}`;
  }

  get tenantSubdomain() {
    return tenantSubdomain;
  }

  async doSubmit() {
    if (!this.form.valid) {
      return;
    }

    await this.tenantFormService.doCreate(this.form.value);
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.tenantName,
        tenantSubdomain.isEnabled && this.fields.tenantUrl,
      ].filter(Boolean),
      this.formBuilder,
    );
  }
}
