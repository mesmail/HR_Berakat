import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { CandidatesApi } from 'src/app/candidates/candidates.api';
import { CandidatesListService } from 'src/app/candidates/list/candidates-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class CandidatesDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private candidatesListService: CandidatesListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await CandidatesApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.candidates.destroy.success'),
      );

      this.router.navigate(['/candidates']);

      await this.candidatesListService.doFetch(
        this.candidatesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await CandidatesApi.destroyAll(ids);
      this.loading = false;

      this.candidatesListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.candidates.destroyAll.success'),
      );

      this.router.navigate(['/candidates']);

      return this.candidatesListService.doFetch(
        this.candidatesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
