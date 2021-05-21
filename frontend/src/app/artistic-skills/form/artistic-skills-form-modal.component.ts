import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ArtisticSkillsApi } from 'src/app/artistic-skills/artistic-skills.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-artistic-skills-form-modal',
  templateUrl: './artistic-skills-form-modal.component.html',
})
export class ArtisticSkillsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ArtisticSkillsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ArtisticSkillsApi.create(values);
      const record = await ArtisticSkillsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.artisticSkills.create.success'),
      );

      if (this.dialogRef) {
        this.dialogRef.close(record);
      }
    } catch (error) {
      this.errorService.handle(error);
      this.saveLoading = false;
    }
  }

  doCancel() {
    this.dialogRef.close();
  }
}
