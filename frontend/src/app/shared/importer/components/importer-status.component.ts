import { Component, OnInit } from '@angular/core';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Component({
  selector: 'app-importer-status',
  templateUrl: './importer-status.component.html',
})
export class ImporterStatusComponent {
  constructor(public service: ImporterService) {}

  get isImporting() {
    return Boolean(this.service.importing);
  }

  get isCompleted() {
    return Boolean(this.service.completed);
  }

  get isAllErrors() {
    return (
      this.service.errorRowsCount === this.service.rowsCount
    );
  }

  get isSomeErrors() {
    return !this.isAllErrors && this.service.errorRowsCount;
  }

  get isAllSuccess() {
    return (
      this.service.importedRowsCount &&
      !this.service.errorRowsCount
    );
  }

  get isAllPending() {
    return (
      !this.isAllErrors &&
      !this.isSomeErrors &&
      !this.isAllSuccess
    );
  }

  get isProcessing() {
    return !this.isCompleted && this.isImporting;
  }
}
