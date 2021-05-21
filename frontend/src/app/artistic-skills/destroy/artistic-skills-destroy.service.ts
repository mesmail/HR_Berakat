import { Injectable } from '@angular/core';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ArtisticSkillsApi } from 'src/app/artistic-skills/artistic-skills.api';
import { ArtisticSkillsListService } from 'src/app/artistic-skills/list/artistic-skills-list.service';
import { Router } from '@angular/router';
import { i18n } from 'src/i18n';

@Injectable({
  providedIn: 'root',
})
export class ArtisticSkillsDestroyService {
  loading = false;

  constructor(
    private errorService: ErrorService,
    private snackbar: Snackbar,
    private router: Router,
    private artisticSkillsListService: ArtisticSkillsListService,
  ) {}

  async doDestroy(id) {
    try {
      this.loading = true;
      await ArtisticSkillsApi.destroyAll([id]);
      this.loading = false;
      this.snackbar.success(
        i18n('entities.artisticSkills.destroy.success'),
      );

      this.router.navigate(['/artistic-skills']);

      await this.artisticSkillsListService.doFetch(
        this.artisticSkillsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }

  async doDestroyAll(ids) {
    try {
      this.loading = true;
      await ArtisticSkillsApi.destroyAll(ids);
      this.loading = false;

      this.artisticSkillsListService.doResetSelectedKeys();

      this.snackbar.success(
        i18n('entities.artisticSkills.destroyAll.success'),
      );

      this.router.navigate(['/artistic-skills']);

      return this.artisticSkillsListService.doFetch(
        this.artisticSkillsListService.filter,
      );
    } catch (error) {
      this.errorService.handle(error);
      this.loading = false;
    }
  }
}
