import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { AdministrativeFinancialPowersApi } from 'src/app/administrative-financial-powers/administrative-financial-powers.api';
import { AdministrativeFinancialPowersListService } from 'src/app/administrative-financial-powers/list/administrative-financial-powers-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class AdministrativeFinancialPowersDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private administrativeFinancialPowersListService: AdministrativeFinancialPowersListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await AdministrativeFinancialPowersApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.administrativeFinancialPowers.destroy.success'),
      );

      this.router.navigate(['/administrative-financial-powers']);

      await this.administrativeFinancialPowersListService.doFetch(
        this.administrativeFinancialPowersListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await AdministrativeFinancialPowersApi.destroyAll(ids);
      this.loading = false;

      this.administrativeFinancialPowersListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.administrativeFinancialPowers.destroyAll.success'),
      );

      this.router.navigate(['/administrative-financial-powers']);

      return this.administrativeFinancialPowersListService.doFetch(
        this.administrativeFinancialPowersListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
