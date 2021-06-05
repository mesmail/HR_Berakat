import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { SoftSkillsApi } from 'src/app/soft-skills/soft-skills.api';
import { SoftSkillsListService } from 'src/app/soft-skills/list/soft-skills-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private softSkillsListService: SoftSkillsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await SoftSkillsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.softSkills.destroy.success'),
      );

      this.router.navigate(['/soft-skills']);

      await this.softSkillsListService.doFetch(
        this.softSkillsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await SoftSkillsApi.destroyAll(ids);
      this.loading = false;

      this.softSkillsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.softSkills.destroyAll.success'),
      );

      this.router.navigate(['/soft-skills']);

      return this.softSkillsListService.doFetch(
        this.softSkillsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
