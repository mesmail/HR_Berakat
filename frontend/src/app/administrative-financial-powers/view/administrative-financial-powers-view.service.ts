import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdministrativeFinancialPowersApi } from 'src/app/administrative-financial-powers/administrative-financial-powers.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { i18n } from 'src/i18n';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AdministrativeFinancialPowersViewService {
  loading = false;
  record = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) {}

  async doFind(id) {
    try {
      this.record = null;
      this.loading = true;

      this.record = await AdministrativeFinancialPowersApi.find(id);
      this.loading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.loading = false;

      this.router.navigate(['/administrative-financial-powers']);
    }
  }
}
