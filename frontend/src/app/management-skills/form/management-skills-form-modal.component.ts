import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { ErrorService } from 'src/app/shared/error/error.service';
import { ManagementSkillsApi } from 'src/app/management-skills/management-skills.api';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-management-skills-form-modal',
  templateUrl: './management-skills-form-modal.component.html',
})
export class ManagementSkillsFormModalComponent {
  saveLoading = false;

  constructor(
    public dialogRef: MatDialogRef<
      ManagementSkillsFormModalComponent
    >,
    private errorService: ErrorService,
    private snackbar: Snackbar,
  ) {}

  async doCreate({ id, values }) {
    try {
      this.saveLoading = true;
      const { id } = await ManagementSkillsApi.create(values);
      const record = await ManagementSkillsApi.find(id);
      this.saveLoading = false;

      this.snackbar.success(
        i18n('entities.managementSkills.create.success'),
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
