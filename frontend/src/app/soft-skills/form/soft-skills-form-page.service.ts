import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkillsApi } from 'src/app/soft-skills/soft-skills.api';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillsFormPageService {
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
        this.record = await SoftSkillsApi.find(id);
      }

      this.initLoading = false;
    } catch (error) {
      this.errorService.handle(error);
      this.record = null;
      this.initLoading = true;
      this.router.navigate(['/soft-skills']);
    }
  }

  async doCreate(values) {
    try {
      this.saveLoading = true;
      await SoftSkillsApi.create(values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.softSkills.create.success'),
      );

      this.router.navigate(['/soft-skills']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  async doUpdate(id, values) {
    try {
      this.saveLoading = true;
      await SoftSkillsApi.update(id, values);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.softSkills.update.success'),
      );

      this.router.navigate(['/soft-skills']);
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }
}
