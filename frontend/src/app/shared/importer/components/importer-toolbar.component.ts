import { Component, OnInit } from '@angular/core';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ImporterService } from 'src/app/shared/importer/importer.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-importer-toolbar',
  templateUrl: './importer-toolbar.component.html',
})
export class ImporterToolbarComponent {
  constructor(
    public service: ImporterService,
    private confirmService: ConfirmService,
  ) {}

  get hasRows() {
    return this.service.hasRows;
  }

  get importing() {
    return this.service.importing;
  }

  get completed() {
    return this.service.completed;
  }

  get showDownloadTemplate() {
    return !this.hasRows;
  }

  get showImport() {
    return (
      this.hasRows && !this.importing && !this.completed
    );
  }

  get showDiscard() {
    return (
      this.hasRows && !this.importing && !this.completed
    );
  }

  get showNew() {
    return Boolean(this.completed);
  }

  get showPause() {
    return this.hasRows && this.importing;
  }

  async doReset() {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.service.doReset();
  }

  async doDiscard() {
    const response = await this.confirmService.confirm(
      i18n('importer.list.discardConfirm'),
    );

    if (!response) {
      return;
    }

    return this.service.doReset();
  }

  async doImport() {
    return this.service.doImport();
  }

  async doPause() {
    return this.service.doPause();
  }

  async doDownloadTemplate() {
    return this.service.doDownloadTemplate();
  }
}
