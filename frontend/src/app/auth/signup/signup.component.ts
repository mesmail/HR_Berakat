import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/user/user-model';
import { AuthService } from 'src/app/auth/auth.service';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
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
    this.form = this.schema.buildForm({
      email: this.emailFromInvitation
        ? {
            value: this.emailFromInvitation,
            disabled: true,
          }
        : undefined,
    });
  }

  get backgroundImageUrl() {
    return (
      this.authService.backgroundImageUrl ||
      '/assets/images/signup.jpg'
    );
  }

  get logoUrl() {
    return this.authService.logoUrl;
  }

  get fields() {
    return UserModel.fields;
  }

  get emailFromInvitation() {
    return this.route.snapshot.queryParamMap.get('email');
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

  async signup() {
    if (!this.form.valid) {
      return;
    }

    let { email, password } = this.form.value;
    email = email || this.emailFromInvitation;

    await this.authService.doRegisterEmailAndPassword(
      email,
      password,
    );
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [this.fields.email, this.fields.password],
      this.formBuilder,
    );
  }
}
