import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/auth/auth.service';
import { UserModel } from 'src/app/user/user-model';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private route: ActivatedRoute,
    private snackbar: Snackbar,
  ) {}

  ngOnInit() {
    this.authService.doClearErrorMessage();
    this.buildSchema();
    this.form = this.schema.buildForm({ rememberMe: true });

    const {
      socialErrorCode,
    } = this.route.snapshot.queryParams;

    if (socialErrorCode) {
      if (socialErrorCode === 'generic') {
        this.snackbar.error(
          i18n('errors.defaultErrorMessage'),
        );
      } else {
        this.snackbar.error(
          i18n(`auth.social.errors.${socialErrorCode}`),
        );
      }
    }
  }

  get backgroundImageUrl() {
    return (
      this.authService.backgroundImageUrl ||
      '/assets/images/signin.jpg'
    );
  }

  get logoUrl() {
    return this.authService.logoUrl;
  }

  get fields() {
    return UserModel.fields;
  }

  get loading() {
    return this.authService.loading;
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

  async signin() {
    if (!this.form.valid) {
      return;
    }

    const { email, password, rememberMe } = this.form.value;

    await this.authService.doSigninWithEmailAndPassword(
      email,
      password,
      rememberMe,
    );
  }

  socialOauthLink(provider) {
    return `${environment.backendUrl}/auth/social/${provider}`;
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.email,
        this.fields.password,
        this.fields.rememberMe,
      ],
      this.formBuilder,
    );
  }
}
