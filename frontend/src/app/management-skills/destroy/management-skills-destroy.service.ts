import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ManagementSkillsApi } from 'src/app/management-skills/management-skills.api';
import { ManagementSkillsListService } from 'src/app/management-skills/list/management-skills-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ManagementSkillsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private managementSkillsListService: ManagementSkillsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ManagementSkillsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.managementSkills.destroy.success'),
      );

      this.router.navigate(['/management-skills']);

      await this.managementSkillsListService.doFetch(
        this.managementSkillsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ManagementSkillsApi.destroyAll(ids);
      this.loading = false;

      this.managementSkillsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.managementSkills.destroyAll.success'),
      );

      this.router.navigate(['/management-skills']);

      return this.managementSkillsListService.doFetch(
        this.managementSkillsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
