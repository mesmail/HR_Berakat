import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { UserModel } from 'src/app/user/user-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
  ) {}

  ngOnInit() {
    this.buildSchema();
    this.form = this.schema.buildForm();
  }

  get backgroundImageUrl() {
    return (
      this.authService.backgroundImageUrl ||
      '/assets/images/forgotPassword.jpg'
    );
  }

  get logoUrl() {
    return this.authService.logoUrl;
  }

  get fields() {
    return UserModel.fields;
  }

  get loading() {
    return this.authService.loadingPasswordResetEmail;
  }

  async submit() {
    if (!this.form.valid) {
      return;
    }

    let { email } = this.form.value;
    await this.authService.doSendPasswordResetEmail(email);
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [this.fields.email],
      this.formBuilder,
    );
  }
}
