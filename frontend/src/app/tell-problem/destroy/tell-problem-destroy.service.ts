import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TellProblemApi } from 'src/app/tell-problem/tell-problem.api';
import { TellProblemListService } from 'src/app/tell-problem/list/tell-problem-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class TellProblemDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private tellProblemListService: TellProblemListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await TellProblemApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.tellProblem.destroy.success'),
      );

      this.router.navigate(['/tell-problem']);

      await this.tellProblemListService.doFetch(
        this.tellProblemListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await TellProblemApi.destroyAll(ids);
      this.loading = false;

      this.tellProblemListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.tellProblem.destroyAll.success'),
      );

      this.router.navigate(['/tell-problem']);

      return this.tellProblemListService.doFetch(
        this.tellProblemListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
