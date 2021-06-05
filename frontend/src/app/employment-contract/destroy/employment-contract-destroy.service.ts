import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { EmploymentContractApi } from 'src/app/employment-contract/employment-contract.api';
import { EmploymentContractListService } from 'src/app/employment-contract/list/employment-contract-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class EmploymentContractDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private employmentContractListService: EmploymentContractListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await EmploymentContractApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.employmentContract.destroy.success'),
      );

      this.router.navigate(['/employment-contract']);

      await this.employmentContractListService.doFetch(
        this.employmentContractListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await EmploymentContractApi.destroyAll(ids);
      this.loading = false;

      this.employmentContractListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.employmentContract.destroyAll.success'),
      );

      this.router.navigate(['/employment-contract']);

      return this.employmentContractListService.doFetch(
        this.employmentContractListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
