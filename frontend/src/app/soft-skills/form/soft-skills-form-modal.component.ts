import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { SoftSkillsApi } from 'src/app/soft-skills/soft-skills.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-soft-skills-form-modal',
  templateUrl: './soft-skills-form-modal.component.html',
})
export class SoftSkillsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      SoftSkillsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await SoftSkillsApi.create(values);
      const record = await SoftSkillsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.softSkills.create.success'),
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
