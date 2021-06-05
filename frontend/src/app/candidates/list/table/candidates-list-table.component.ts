import { Component } from '@angular/core';
import { CandidatesListService } from 'src/app/candidates/list/candidates-list.service';
import { CandidatesService } from 'src/app/candidates/candidates.service';
import { CandidatesModel } from 'src/app/candidates/candidates-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { CandidatesDestroyService } from 'src/app/candidates/destroy/candidates-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-candidates-list-table',
  templateUrl: './candidates-list-table.component.html',
})
export class CandidatesListTableComponent {
  constructor(
    public service: CandidatesListService,
    public destroyService: CandidatesDestroyService,
    public candidatesService: CandidatesService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return CandidatesModel.presenter(row, fieldName);
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
    return this.candidatesService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.candidatesService.hasPermissionToDestroy;
  }

  get fields() {
    return CandidatesModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.candidateName.name,
      this.fields.currentPosition.name,
      this.fields.candidateReference.name,
      this.fields.gender.name,
      this.fields.academicCertificateSpecialization.name,
      this.fields.trainingCertificates.name,
      this.fields.currentCompany.name,
      this.fields.noticePeriod.name,
      this.fields.currentSalary.name,
      this.fields.expectedSalary.name,
      this.fields.softSkills.name,
      this.fields.managementSkills.name,
      this.fields.artisticSkills.name,
      this.fields.candidateCreatedDate.name,
      this.fields.jobs.name,
      this.fields.resume.name,
      this.fields.photo.name,

      '_actions',
    ];
  }
}
