import { Component } from '@angular/core';
import { JobsListService } from 'src/app/jobs/list/jobs-list.service';
import { JobsService } from 'src/app/jobs/jobs.service';
import { JobsModel } from 'src/app/jobs/jobs-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { JobsDestroyService } from 'src/app/jobs/destroy/jobs-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-jobs-list-table',
  templateUrl: './jobs-list-table.component.html',
})
export class JobsListTableComponent {
  constructor(
    public service: JobsListService,
    public destroyService: JobsDestroyService,
    public jobsService: JobsService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return JobsModel.presenter(row, fieldName);
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.jobsService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.jobsService.hasPermissionToDestroy;
  }

  get fields() {
    return JobsModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.positionName.name,
      this.fields.department.name,
      this.fields.supervisor.name,
      this.fields.jobLocation.name,
      this.fields.jobCode.name,
      this.fields.generalDescription.name,
      this.fields.generalGoals.name,
      this.fields.detailedGoals.name,
      this.fields.academicCertificates.name,
      this.fields.trainingCertificates.name,
      this.fields.professionalCertificates.name,
      this.fields.softSkills.name,
      this.fields.managementSkills.name,
      this.fields.artitistikSkills.name,
      this.fields.jobFramework.name,
      this.fields.connectionLevel.name,
      this.fields.commonCommittees.name,
      this.fields.jobRequirments.name,
      this.fields.jobPath.name,
      this.fields.tasksDuties.name,
      this.fields.administrativeFinancialPowers.name,
      this.fields.cardInformation.name,

      '_actions',
    ];
  }
}
