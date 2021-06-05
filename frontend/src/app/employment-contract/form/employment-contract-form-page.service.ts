import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EmploymentContractApi } from 'src/app/employment-contract/employment-contract.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class EmploymentContractFormPageService {
  initLoading = false;
  saveLoading = false;
  record = null;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
  ) {}

  async doInit(id) {
    try {
      this.record = null;
      this.initLoading = true;

      if (id) {
        this.record = await EmploymentContractApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/employment-contract']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await EmploymentContractApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.employmentContract.create.success'),
      );

      this.router.navigate(['/employment-contract']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await EmploymentContractApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.employmentContract.update.success'),
      );

      this.router.navigate(['/employment-contract']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
