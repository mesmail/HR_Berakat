import { Component } from '@angular/core';
import { EmploymentContractListService } from 'src/app/employment-contract/list/employment-contract-list.service';
import { EmploymentContractService } from 'src/app/employment-contract/employment-contract.service';
import { EmploymentContractModel } from 'src/app/employment-contract/employment-contract-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { EmploymentContractDestroyService } from 'src/app/employment-contract/destroy/employment-contract-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-employment-contract-list-table',
  templateUrl: './employment-contract-list-table.component.html',
})
export class EmploymentContractListTableComponent {
  constructor(
    public service: EmploymentContractListService,
    public destroyService: EmploymentContractDestroyService,
    public employmentContractService: EmploymentContractService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return EmploymentContractModel.presenter(row, fieldName);
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
    return this.employmentContractService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.employmentContractService.hasPermissionToDestroy;
  }

  get fields() {
    return EmploymentContractModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.contractDate.name,
      this.fields.companyRepresentative.name,
      this.fields.secondParty.name,
      this.fields.nationality.name,
      this.fields.passportNumber.name,
      this.fields.passportIssueDate.name,
      this.fields.email.name,
      this.fields.jobTitle.name,
      this.fields.dailyWorkingHours.name,
      this.fields.weeklyWorkingHours.name,
      this.fields.weekEndDay.name,
      this.fields.workStartDate.name,
      this.fields.employeeName.name,
      this.fields.positionName.name,
      this.fields.basicSalary.name,

      '_actions',
    ];
  }
}
