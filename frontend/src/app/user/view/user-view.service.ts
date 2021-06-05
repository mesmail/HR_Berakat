import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { UserApi } from 'src/app/user/user.api';

@Injectable({
  providedIn: 'root',
})
export class UserViewService {
  loading = false;
  user = null;

  constructor(
    private errorService: ErrorService,
    private router: Router,
  ) {}

  async doFind(id) {
    try {
      this.user = null;
      this.loading = true;

      this.user = await UserApi.find(id);
      this.loading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.user = null;
      this.loading = false;

      this.router.navigate(['/user']);
    }
  }
}
