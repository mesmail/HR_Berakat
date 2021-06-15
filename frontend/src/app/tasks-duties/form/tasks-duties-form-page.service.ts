import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TasksDutiesApi } from 'src/app/tasks-duties/tasks-duties.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class TasksDutiesFormPageService {
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
        this.record = await TasksDutiesApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/tasks-duties']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await TasksDutiesApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.tasksDuties.create.success'),
      );

      this.router.navigate(['/tasks-duties']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await TasksDutiesApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.tasksDuties.update.success'),
      );

      this.router.navigate(['/tasks-duties']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
