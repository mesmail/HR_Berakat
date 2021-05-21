import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/user/user-model';
import { AuthService } from 'src/app/auth/auth.service';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
})
export class PasswordResetComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.doClearErrorMessage();
    this.buildSchema();
    this.form = this.schema.buildForm({});
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

  get token() {
    return this.route.snapshot.queryParamMap.get('token');
  }

  get loading() {
    return this.authService.loadingPasswordReset;
  }

  get errorStateMatcher() {
    return {
      isErrorState: (control, form) => {
        const isSubmitted = form && form.submitted;
        return Boolean(
          this.errorMessage ||
            (control &&
              control.invalid &&
              (control.dirty ||
                control.touched ||
                isSubmitted)),
        );
      },
    };
  }

  get errorMessage() {
    return this.authService.errorMessage;
  }

  async submit() {
    if (!this.form.valid) {
      return;
    }

    let { password } = this.form.value;
    let token = this.token;

    await this.authService.doResetPassword(token, password);
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [this.fields.password],
      this.formBuilder,
    );
  }
}
