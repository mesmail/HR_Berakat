import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ClaimApi } from 'src/app/claim/claim.api';
import { ClaimListService } from 'src/app/claim/list/claim-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ClaimDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private claimListService: ClaimListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ClaimApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.claim.destroy.success'),
      );

      this.router.navigate(['/claim']);

      await this.claimListService.doFetch(
        this.claimListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ClaimApi.destroyAll(ids);
      this.loading = false;

      this.claimListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.claim.destroyAll.success'),
      );

      this.router.navigate(['/claim']);

      return this.claimListService.doFetch(
        this.claimListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
