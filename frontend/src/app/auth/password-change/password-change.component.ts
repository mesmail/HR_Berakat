import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { UserModel } from 'src/app/user/user-model';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
})
export class PasswordChangeComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
  }

  get fields() {
    return UserModel.fields;
  }

  get saveLoading() {
    return this.authService.loadingPasswordChange;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const values = this.schema.cast(this.form.value);

    return this.authService.doChangePassword(
      values.oldPassword,
      values.newPassword,
    );
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    const passwordMustMatch = (group: FormGroup) => {
      const confirm =
        group.controls[
          this.fields.newPasswordConfirmation.name
        ];
      if (
        group.controls[this.fields.newPassword.name]
          .value !== confirm.value
      )
        confirm.setErrors({ passwordMustMatch: true });
      return null;
    };

    this.form = this.schema.buildForm(
      this.authService.currentUser,
      {
        validator: passwordMustMatch,
      },
    );
  }

  get currentUser() {
    return this.authService.currentUser;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('auth.passwordChange.title')],
  ];

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.oldPassword,
        this.fields.newPassword,
        this.fields.newPasswordConfirmation,
      ],
      this.formBuilder,
    );
  }
}
