import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { TasksDutiesApi } from 'src/app/tasks-duties/tasks-duties.api';
import { TasksDutiesListService } from 'src/app/tasks-duties/list/tasks-duties-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class TasksDutiesDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private tasksDutiesListService: TasksDutiesListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await TasksDutiesApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.tasksDuties.destroy.success'),
      );

      this.router.navigate(['/tasks-duties']);

      await this.tasksDutiesListService.doFetch(
        this.tasksDutiesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await TasksDutiesApi.destroyAll(ids);
      this.loading = false;

      this.tasksDutiesListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.tasksDuties.destroyAll.success'),
      );

      this.router.navigate(['/tasks-duties']);

      return this.tasksDutiesListService.doFetch(
        this.tasksDutiesListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
