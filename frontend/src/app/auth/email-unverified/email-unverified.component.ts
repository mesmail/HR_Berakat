import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { UserModel } from 'src/app/user/user-model';

@Component({
  selector: 'app-email-unverified',
  templateUrl: './email-unverified.component.html',
})
export class EmailUnverifiedComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  async signout() {
    await this.authService.doSignout();
  }

  get backgroundImageUrl() {
    return (
      this.authService.backgroundImageUrl ||
      '/assets/images/emailUnverified.jpg'
    );
  }

  get logoUrl() {
    return this.authService.logoUrl;
  }

  get loading() {
    return this.authService.loadingEmailConfirmation;
  }

  get email() {
    return this.authService.currentUserEmail;
  }

  async sendEmailConfirmation() {
    await this.authService.doSendEmailConfirmation();
  }
}
