import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/user/user-model';
import { UserFormService } from 'src/app/user/form/user-form.service';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { i18n } from 'src/i18n';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
})
export class UserEditFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private service: UserFormService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doInit(
      this.route.snapshot.paramMap.get('id'),
    );
    this.buildSchema();
    this.buildForm();
  }

  get fields() {
    return UserModel.fields;
  }

  get initLoading() {
    return this.service.initLoading;
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const values = this.schema.cast(this.form.value);

    // Email is not needed for update
    delete values.email;
    return this.service.doUpdate({
      id: this.user.id,
      ...values,
    });
  }

  get user() {
    return this.service.user;
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm(this.service.user);
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('user.menu'), '/user'],
    [i18n('user.edit.title')],
  ];

  private buildSchema() {
    this.schema = new FormSchema(
      [this.fields.email, this.fields.roles],
      this.formBuilder,
    );
  }
}
