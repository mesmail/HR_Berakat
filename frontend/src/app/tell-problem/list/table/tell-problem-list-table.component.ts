import { Component } from '@angular/core';
import { TellProblemListService } from 'src/app/tell-problem/list/tell-problem-list.service';
import { TellProblemService } from 'src/app/tell-problem/tell-problem.service';
import { TellProblemModel } from 'src/app/tell-problem/tell-problem-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { TellProblemDestroyService } from 'src/app/tell-problem/destroy/tell-problem-destroy.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-tell-problem-list-table',
  templateUrl: './tell-problem-list-table.component.html',
})
export class TellProblemListTableComponent {
  constructor(
    public service: TellProblemListService,
    public destroyService: TellProblemDestroyService,
    public tellProblemService: TellProblemService,
    private confirmService: ConfirmService,
  ) {}

  presenter(row, fieldName) {
    return TellProblemModel.presenter(row, fieldName);
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
    return this.tellProblemService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.tellProblemService.hasPermissionToDestroy;
  }

  get fields() {
    return TellProblemModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.problemDescription.name,
      this.fields.problemDate.name,
      this.fields.problemCauses.name,
      this.fields.problemSolutions.name,

      '_actions',
    ];
  }
}
