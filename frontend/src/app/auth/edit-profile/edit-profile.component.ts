import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { UserModel } from 'src/app/user/user-model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {
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
    return this.authService.loadingUpdateProfile;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const values = this.schema.cast(this.form.value);
    return this.authService.doUpdateProfile(values);
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm(
      this.authService.currentUser,
    );
  }

  get currentUser() {
    return this.authService.currentUser;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('auth.profile.title')],
  ];

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.email,
        this.fields.firstName,
        this.fields.lastName,
        this.fields.phoneNumber,
        this.fields.avatars,
      ],
      this.formBuilder,
    );
  }
}
