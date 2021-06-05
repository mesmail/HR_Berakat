import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
})
export class VerifyEmailComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParams.token;
    return this.authService.doVerifyEmail(token);
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
}
